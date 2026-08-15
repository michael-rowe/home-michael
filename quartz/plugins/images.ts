/**
 * Shared image-derivative logic, used by the MediaOptimization transformer
 * (which rewrites the markup) and the ImageVariants emitter (which generates
 * the files). Both must agree on variant naming, so the rules live here.
 *
 * Source images are never modified. Derivatives are generated into the output
 * directory at build time, so dropping a new image into content/Media is all
 * that is needed for it to be optimised — no manual conversion step.
 */
import path from "path"
import fs from "fs"
import sharp from "sharp"

/** Widths we generate. A variant is only produced if the source is wider. */
export const VARIANT_WIDTHS = [480, 800, 1200, 1600]

export const WEBP_QUALITY = 78

/** Extensions worth converting. SVG is already vector; GIF may be animated. */
const CONVERTIBLE = /\.(png|jpe?g)$/i

export type ImageInfo = {
  width: number
  height: number
  /** Widths for which a .webp derivative exists, ascending */
  variants: number[]
}

export function isConvertible(filePath: string): boolean {
  return CONVERTIBLE.test(filePath)
}

/**
 * `foo.png` at width 800 becomes `foo-800.webp`, always a sibling of the
 * original. Because only the filename changes, the transformer can rewrite
 * page-relative src values without knowing the page's depth.
 */
export function variantFilename(originalBasename: string, width: number): string {
  const stem = originalBasename.replace(/\.[^.]+$/, "")
  return `${stem}-${width}.webp`
}

export function variantWidthsFor(naturalWidth: number): number[] {
  // Only downscale. An upscaled variant is bigger than the original for no gain.
  const widths = VARIANT_WIDTHS.filter((w) => w < naturalWidth)
  // Always offer a full-size webp so even small images get the format win
  widths.push(naturalWidth)
  return widths
}

/** Regenerate only when the source is newer than the derivative. */
async function isStale(src: string, dest: string): Promise<boolean> {
  try {
    const [s, d] = await Promise.all([fs.promises.stat(src), fs.promises.stat(dest)])
    return s.mtimeMs > d.mtimeMs
  } catch {
    return true // derivative missing
  }
}

export async function generateVariants(
  srcPath: string,
  destDir: string,
  naturalWidth: number,
): Promise<string[]> {
  const basename = path.basename(srcPath)
  const written: string[] = []
  await fs.promises.mkdir(destDir, { recursive: true })

  for (const width of variantWidthsFor(naturalWidth)) {
    const destPath = path.join(destDir, variantFilename(basename, width))
    written.push(destPath)

    if (!(await isStale(srcPath, destPath))) continue

    await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(destPath)
  }

  return written
}

/**
 * Index every convertible image under the content directory, keyed by lowercased
 * basename. Image references reach the transformer in several shapes (Obsidian
 * embeds, markdown links, raw HTML — each rewritten relative to its own page),
 * but the filename is stable across all of them.
 */
export async function indexImages(contentDir: string): Promise<Map<string, ImageInfo>> {
  const index = new Map<string, ImageInfo>()

  const walk = async (dir: string) => {
    let entries: fs.Dirent[]
    try {
      entries = await fs.promises.readdir(dir, { withFileTypes: true })
    } catch {
      return
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(full)
        continue
      }
      if (!isConvertible(entry.name)) continue

      try {
        const { width, height } = await sharp(full).metadata()
        if (!width || !height) continue
        const key = entry.name.toLowerCase()
        if (index.has(key)) {
          console.warn(
            `[images] duplicate basename "${entry.name}" — variants may be ambiguous`,
          )
        }
        index.set(key, { width, height, variants: variantWidthsFor(width) })
      } catch {
        // Unreadable or corrupt: leave it out and the markup falls back to the original
      }
    }
  }

  await walk(contentDir)
  return index
}
