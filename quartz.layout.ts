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
    Component.ContentMeta(),
    Component.TagList(),
    Component.ConditionalRender({
      component: Component.CourseGrid(),
      condition: (page) => page.fileData.slug === "Courses/index",
    }),
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
    Component.ContextualNav(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.CourseButton(),
    Component.LessonNav(),
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
    Component.ConditionalRender({
      component: Component.BookOverview({ showCoverOnly: true }),
      condition: (page) => page.fileData.slug === "Book/index",
    }),
    Component.ConditionalRender({
      component: Component.CourseGrid(),
      condition: (page) => page.fileData.slug === "Courses/index",
    }),
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
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.BookOverview({ showChaptersOnly: true }),
      condition: (page) => page.fileData.slug === "Book/index",
    }),
    Component.CourseButton(),
    Component.LessonNav(),
  ],
}
