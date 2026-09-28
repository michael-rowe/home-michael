import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { identityColors, loadIdentity } from "./quartz/util/identity"

const identity = loadIdentity()

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "/home/michael",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "umami",
      websiteId: "77390f7b-08ec-4c18-b306-0b03e2dafc81",
    },
    locale: "en-GB",
    baseUrl: "michael-rowe.github.io/home-michael",
    ignorePatterns: ["private", "templates", ".obsidian", "drafts", "personas", "**/*-kit.md"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      // House identity type (PFL-9): Plex Sans throughout, Plex Mono for code and labels
      typography: {
        header: { name: "IBM Plex Sans", weights: [400, 500, 600, 700] },
        body: { name: "IBM Plex Sans", weights: [400, 500, 600, 700], includeItalic: true },
        code: { name: "IBM Plex Mono", weights: [400, 500, 600] },
      },
      colors: {
        // From formats/identities/michael.css (PFL-9) — edit the tokens, not here
        lightMode: identityColors(identity.light),
        darkMode: identityColors(identity.dark),
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.NormalizeDates(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ maxDepth: 2 }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      // Must run after CrawlLinks so image src values are final
      Plugin.MediaOptimization(),
    ],
    filters: [Plugin.RemoveDrafts(), Plugin.RemoveFuturePublished()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.Redirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.RecentlyAddedArchive(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      // Generates the resized WebP derivatives that MediaOptimization points at
      Plugin.ImageVariants(),
      Plugin.Static(),
      Plugin.RootStatic(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
