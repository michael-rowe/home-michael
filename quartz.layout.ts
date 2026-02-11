import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.TopNav(), Component.MobileNav()],
  afterBody: [],
  footer: Component.Footer({
    author: "Michael Rowe",
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentType(),
      condition: (page) => {
        const type = page.fileData.frontmatter?.type as string | undefined
        return type === "post" || type === "note" || type === "essay"
      },
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Recent",
        limit: 5,
        showTags: false,
        filter: (f) => {
          const slug = f.slug ?? ""
          const type = f.frontmatter?.type as string | undefined

          // Exclude templates
          if (slug.includes("templates")) return false

          // Only show content with a type field (posts, notes, essays, etc.)
          // This excludes static pages which don't have a type
          const validTypes = ["post", "note", "essay", "framework", "policy", "course"]
          return type !== undefined && validTypes.includes(type)
        },
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.AILiteracyNav(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        scale: 1.6,
        opacityScale: 3,
      },
    }),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.CourseGrid(),
      condition: (page) => page.fileData.slug === "Courses/index",
    }),
    Component.ConditionalRender({
      component: Component.NotesByCategory(),
      condition: (page) => page.fileData.slug === "topics",
    }),
    Component.ConditionalRender({
      component: Component.NotesByType(),
      condition: (page) => page.fileData.slug === "formats",
    }),
    Component.CourseButton(),
    Component.LessonNav(),
    Component.ConditionalRender({
      component: Component.RelatedContent(),
      condition: (page) => {
        const type = page.fileData.frontmatter?.type as string | undefined
        return type === "post" || type === "note" || type === "essay"
      },
    }),
    Component.ShareLinks(),
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "michael-rowe/emergent-scholarship",
        repoId: "R_kgDOOHzPWg",
        category: "Announcements",
        categoryId: "DIC_kwDOOHzPWs4Cw5Jj",
        mapping: "pathname",
        strict: false,
        reactionsEnabled: true,
        inputPosition: "top",
      },
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.ContextualNav(),
    Component.AILiteracyNav(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        scale: 1.6,
        opacityScale: 3,
      },
    }),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.CourseGrid(),
      condition: (page) => page.fileData.slug === "Courses/index",
    }),
    Component.ConditionalRender({
      component: Component.NotesByCategory(),
      condition: (page) => page.fileData.slug === "topics",
    }),
    Component.ConditionalRender({
      component: Component.NotesByType(),
      condition: (page) => page.fileData.slug === "formats",
    }),
    Component.CourseButton(),
    Component.LessonNav(),
  ],
}
