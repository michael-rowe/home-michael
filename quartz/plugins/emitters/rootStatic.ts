import { FilePath, QUARTZ, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"
import { glob } from "../../util/glob"
import { dirname } from "path"

// Files that must be served from the site root rather than under /static/ —
// e.g. robots.txt and llms.txt, which crawlers and LLM tooling expect at a
// fixed top-level path.
export const RootStatic: QuartzEmitterPlugin = () => ({
  name: "RootStatic",
  async *emit({ argv, cfg }) {
    const sourcePath = joinSegments(QUARTZ, "static-root")
    if (!fs.existsSync(sourcePath)) return
    const fps = await glob("**", sourcePath, cfg.configuration.ignorePatterns)
    for (const fp of fps) {
      const src = joinSegments(sourcePath, fp) as FilePath
      const dest = joinSegments(argv.output, fp) as FilePath
      await fs.promises.mkdir(dirname(dest), { recursive: true })
      await fs.promises.copyFile(src, dest)
      yield dest
    }
  },
  async *partialEmit() {},
})
