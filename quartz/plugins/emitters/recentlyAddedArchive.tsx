import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { QuartzPluginData, defaultProcessedContent } from "../vfile"
import { FullPageLayout } from "../../cfg"
import { FullSlug, pathToRoot } from "../../util/path"
import { defaultContentPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { Content } from "../../components"
import { publishedMonths, monthLabel } from "../../components/RecentlyAddedList"
import { write } from "./helpers"
import { BuildCtx } from "../../util/ctx"
import { StaticResources } from "../../util/resources"

// Emits one archive page per month that has published content, at
// `recently-added/YYYY-MM`.
//
// These were hand-written content files carrying a `month:` frontmatter field,
// and the obvious thing happened: nobody wrote one after 2026-05, so June to
// September existed on the site and were missing from the Recently added
// sidebar. An archive of what was published is not something to remember to
// maintain — the content already knows when it was published.
//
// The page body is empty by design. RecentlyAddedList is mounted in afterBody
// for any slug under `recently-added` and reads the `month` frontmatter this
// emitter sets, so the month page renders exactly as it did when the file was
// written by hand.
export const RecentlyAddedArchive: QuartzEmitterPlugin = () => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content(),
  }

  const { head: Head, header, beforeBody, pageBody, afterBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  const emitMonth = async (
    ctx: BuildCtx,
    month: string,
    allFiles: QuartzPluginData[],
    resources: StaticResources,
  ) => {
    const slug = `recently-added/${month}` as FullSlug
    const label = monthLabel(month)
    const [tree, file] = defaultProcessedContent({
      slug,
      frontmatter: {
        title: label,
        month,
        description: `What was published on /home/michael in ${label}.`,
        tags: [],
      },
    })

    const cfg = ctx.cfg.configuration
    const externalResources = pageResources(pathToRoot(slug), resources)
    const componentData: QuartzComponentProps = {
      ctx,
      fileData: file.data,
      externalResources,
      cfg,
      children: [],
      tree,
      allFiles,
    }

    return write({
      ctx,
      content: renderPage(cfg, slug, componentData, opts, externalResources),
      slug,
      ext: ".html",
    })
  }

  return {
    name: "RecentlyAddedArchive",
    getQuartzComponents() {
      return [
        Head,
        Header,
        Body,
        ...header,
        ...beforeBody,
        pageBody,
        ...afterBody,
        ...left,
        ...right,
        Footer,
      ]
    },
    async *emit(ctx, content, resources) {
      const allFiles = content.map((c) => c[1].data)
      for (const month of publishedMonths(allFiles, ctx.cfg.configuration)) {
        yield emitMonth(ctx, month, allFiles, resources)
      }
    },
    // Any content change can add or empty a month, and there are only ever a
    // few dozen of these, so a partial build re-emits the lot.
    async *partialEmit(ctx, content, resources, _changeEvents) {
      const allFiles = content.map((c) => c[1].data)
      for (const month of publishedMonths(allFiles, ctx.cfg.configuration)) {
        yield emitMonth(ctx, month, allFiles, resources)
      }
    },
  }
}
