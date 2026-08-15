import { FilePath, joinSegments, slugifyFilePath } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import path from "path"
import { glob } from "../../util/glob"
import { generateVariants, isConvertible } from "../images"
import sharp from "sharp"

/**
 * Emits resized WebP derivatives next to every copied content image, so any
 * image added to the content directory is optimised on the next build with no
 * manual step. The MediaOptimization transformer points the markup at these.
 *
 * Source images are left untouched — they remain the archival originals and the
 * fallback for browsers without WebP support.
 */
export const ImageVariants: QuartzEmitterPlugin = () => {
  const emitFor = async function* (argv: { directory: string; output: string }, fp: FilePath) {
    if (!isConvertible(fp)) return

    const src = joinSegments(argv.directory, fp) as FilePath
    // Mirror the slugified destination Assets uses, so derivatives land beside
    // the original rather than in a parallel tree.
    const destDir = path.dirname(joinSegments(argv.output, slugifyFilePath(fp)))

    try {
      const { width } = await sharp(src).metadata()
      if (!width) return
      const written = await generateVariants(src, destDir, width)
      for (const w of written) {
        yield w as FilePath
      }
    } catch (e) {
      console.warn(`[ImageVariants] skipped ${fp}: ${(e as Error).message}`)
    }
  }

  return {
    name: "ImageVariants",
    async *emit({ argv, cfg }) {
      const fps = await glob(
        "**/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
        argv.directory,
        cfg.configuration.ignorePatterns,
      )
      for (const fp of fps) {
        yield* emitFor(argv, fp)
      }
    },
    async *partialEmit(ctx, _content, _resources, changeEvents) {
      for (const changeEvent of changeEvents) {
        if (changeEvent.type !== "add" && changeEvent.type !== "change") continue
        yield* emitFor(ctx.argv, changeEvent.path)
      }
    },
  }
}
