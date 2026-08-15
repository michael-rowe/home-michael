import { QuartzTransformerPlugin } from "../types"
import { visitParents } from "unist-util-visit-parents"
import { Root, Element, Parent } from "hast"
import path from "path"
import { indexImages, ImageInfo, variantFilename } from "../images"

export interface Options {
  /** Add width/height so the browser can reserve space before the image loads */
  setDimensions: boolean
  /** Lazy-load images below the fold */
  lazyLoad: boolean
  /** Wrap images in <picture> with WebP sources */
  webp: boolean
  /**
   * `sizes` for an image occupying the content column, which is capped near
   * 800px; below that breakpoint images run full width.
   */
  sizes: string
  /**
   * `sizes` for images inside a multi-column gallery, where each tile is a
   * fraction of the column width. Keyed by the container's class.
   */
  gallerySizes: string
  galleryClasses: string[]
}

const defaultOptions: Options = {
  setDimensions: true,
  lazyLoad: true,
  webp: true,
  sizes: "(max-width: 800px) 100vw, 800px",
  // Three-up on desktop, two-up on narrow screens
  gallerySizes: "(max-width: 600px) 50vw, 270px",
  galleryClasses: ["keynote-row", "project-row"],
}

/**
 * Deliberately NOT `sizes="auto"`. It looks ideal — the browser would use the
 * real laid-out width instead of a static guess — but in Chromium a lazy image
 * that has not been laid out yet resolves to a width of 0, and the image then
 * never loads at all. Verified against this site: it silently broke 6 of 8
 * images on an image-heavy post. Static hints per context are less precise but
 * actually work.
 */
function sizesFor(ancestors: Parent[], opts: Options): string {
  const inGallery = ancestors.some((a) => {
    const cls = (a as Element).properties?.className
    const names = Array.isArray(cls) ? cls.map(String) : typeof cls === "string" ? [cls] : []
    return names.some((n) => opts.galleryClasses.includes(n))
  })
  return inGallery ? opts.gallerySizes : opts.sizes
}

// Built once per process and shared across pages: reading image headers should
// happen once, not once per reference.
let imageIndex: Promise<Map<string, ImageInfo>> | null = null

function buildSrcset(src: string, info: ImageInfo): string {
  const dir = src.slice(0, src.length - path.basename(src).length)
  const basename = path.basename(src.split("?")[0])
  return info.variants
    .map((w) => `${dir}${encodeURI(variantFilename(decodeURIComponent(basename), w))} ${w}w`)
    .join(", ")
}

export const MediaOptimization: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "MediaOptimization",
    htmlPlugins(ctx) {
      return [
        () => {
          return async (tree: Root, _file) => {
            const found: {
              node: Element
              parent: Parent
              index: number
              ancestors: Parent[]
            }[] = []
            visitParents(tree, "element", (node, ancestors) => {
              const el = node as Element
              if (el.tagName !== "img" || ancestors.length === 0) return
              const parent = ancestors[ancestors.length - 1] as Parent
              const index = parent.children.indexOf(el)
              if (index === -1) return
              found.push({ node: el, parent, index, ancestors: ancestors as Parent[] })
            })

            if (found.length === 0) return

            imageIndex ??= indexImages(ctx.argv.directory)
            const index = await imageIndex

            // Walk backwards: replacing a node shifts the indices after it.
            for (let i = found.length - 1; i >= 0; i--) {
              const { node, parent, index: pos, ancestors } = found[i]
              const props = (node.properties ??= {})
              const isFirst = i === 0

              if (opts.lazyLoad && props.loading === undefined) {
                // The first image is the likely LCP element, so it loads eagerly
                // and at high priority. Lazy-loading it would delay the very
                // paint the metric measures.
                if (isFirst) {
                  props.loading = "eager"
                  props.fetchpriority = "high"
                } else {
                  props.loading = "lazy"
                }
              }

              if (props.decoding === undefined) props.decoding = "async"

              const src = props.src
              if (typeof src !== "string") continue
              const key = decodeURIComponent(path.basename(src.split("?")[0])).toLowerCase()
              const info = index.get(key)
              if (!info) continue

              // Obsidian embeds without an explicit size arrive from ofm.ts as
              // width="auto" height="auto". Those are not valid values for the
              // HTML dimension attributes — browsers ignore them — so treat
              // them as absent and supply the real intrinsic size instead.
              if (props.width === "auto") delete props.width
              if (props.height === "auto") delete props.height

              // Intrinsic dimensions let the browser reserve the right box
              // before bytes arrive. Paired with `height: auto` in base.scss the
              // attributes act as an aspect ratio, not a fixed size.
              if (opts.setDimensions && props.width === undefined && props.height === undefined) {
                props.width = info.width
                props.height = info.height
              }

              if (!opts.webp) continue

              // <picture> rather than putting WebP straight into the img's
              // srcset: a browser that understands srcset but not WebP would
              // otherwise pick a file it cannot decode. With <source>, an
              // unsupported type is skipped and the original img is used.
              const picture: Element = {
                type: "element",
                tagName: "picture",
                properties: {},
                children: [
                  {
                    type: "element",
                    tagName: "source",
                    properties: {
                      type: "image/webp",
                      srcset: buildSrcset(src, info),
                      sizes: sizesFor(ancestors, opts),
                    },
                    children: [],
                  },
                  node,
                ],
              }

              parent.children[pos] = picture
            }
          }
        },
      ]
    },
  }
}
