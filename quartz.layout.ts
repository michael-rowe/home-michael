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
      condition: (page) => {
        const type = page.fileData.frontmatter?.type as string | undefined
        return type === "post" || type === "note" || type === "essay" || type === "lesson" || type === "bib" || type === "presentation" || type === "guide"
      },
    }),
    Component.ConditionalRender({
      component: Component.ContentType(),
      condition: (page) => {
        const type = page.fileData.frontmatter?.type as string | undefined
        return type === "post" || type === "note" || type === "essay" || type === "presentation" || type === "guide"
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
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.RecentlyAddedNav(),
    Component.NewsletterNav(),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: {
          scale: 1.6,
          opacityScale: 3,
          showTags: false,
        },
      }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  afterBody: [
    Component.Mcq(),
    Component.FlipCard(),
    Component.ConditionalRender({
      component: Component.RecentlyAddedList(),
      condition: (page) => (page.fileData.slug ?? "").startsWith("recently-added"),
    }),
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
        return type === "post" || type === "note" || type === "essay" || type === "presentation" || type === "guide"
      },
    }),
    Component.ShareLinks(),
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "michael-rowe/home-michael",
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
    Component.RecentlyAddedNav(),
    Component.NewsletterNav(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        scale: 1.6,
        opacityScale: 3,
        showTags: false,
      },
    }),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.Mcq(),
    Component.FlipCard(),
    Component.ConditionalRender({
      component: Component.RecentlyAddedList(),
      condition: (page) => (page.fileData.slug ?? "").startsWith("recently-added"),
    }),
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
