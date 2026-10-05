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
      component: Component.Breadcrumbs({ showCurrentPage: false }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => {
        const type = page.fileData.frontmatter?.type as string | undefined
        return (
          type === "post" ||
          type === "note" ||
          type === "essay" ||
          type === "lesson" ||
          type === "bib" ||
          type === "presentation" ||
          type === "guide" ||
          type === "podcast"
        )
      },
    }),
    // ContentType's pill is now the first chip of ContentMeta's masthead (PFL-9)
    Component.TagList(),
  ],
  left: [
    // PageTitle removed (PFL-9): the wordmark heads the top bar instead
    Component.MobileOnly(Component.Spacer()),
    // Search, reader mode and the theme toggle moved to TopNav (POS-18)
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Course lessons only. ae6f98d7 replaced ContextualNav with
    // TableOfContents on content pages, which was right for essays and posts
    // (RelatedContent covers them) but left lesson pages with no desktop route
    // through the course — only LessonNav's prev/next, plus the mobile drawer
    // under 800px.
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.ContextualNav()),
      condition: (page) => page.fileData.frontmatter?.type === "lesson",
    }),
    Component.RecentlyAddedNav(),
    // Not on the Newsletters index, which already lists every issue in the body.
    Component.ConditionalRender({
      component: Component.NewsletterNav(),
      condition: (page) => page.fileData.slug !== "Newsletters/index",
    }),
  ],
  right: [
    // Per-page graph removed; the global graph opens from TopNav instead
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
        return (
          type === "post" ||
          type === "note" ||
          type === "essay" ||
          type === "presentation" ||
          type === "guide" ||
          type === "podcast"
        )
      },
    }),
    Component.ShareLinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ showCurrentPage: false }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    // PageTitle removed (PFL-9): the wordmark heads the top bar instead
    Component.MobileOnly(Component.Spacer()),
    // Search, reader mode and the theme toggle moved to TopNav (POS-18)
    Component.ContextualNav(),
    Component.RecentlyAddedNav(),
    // Not on the Newsletters index, which already lists every issue in the body.
    Component.ConditionalRender({
      component: Component.NewsletterNav(),
      condition: (page) => page.fileData.slug !== "Newsletters/index",
    }),
  ],
  right: [
    // Per-page graph removed; the global graph opens from TopNav instead
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
