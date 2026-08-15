import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

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
      typography: {
        header: "Outfit",
        body: "Crimson Pro",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f7",
          lightgray: "#e8e2d9",
          // 4.56:1 on --light — muted, but passes WCAG AA for text (was #a09990, 2.68:1)
          gray: "#78716c",
          darkgray: "#57534e",
          dark: "#1c1917",
          secondary: "#1d70b8",
          tertiary: "#003078",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#131009",
          lightgray: "#2a2418",
          // 5.93:1 on --light — passes WCAG AA for text (was #5a5040, 2.38:1)
          gray: "#9c8f78",
          darkgray: "#d4c9b0",
          dark: "#ede6d6",
          secondary: "#60a5fa",
          tertiary: "#93c5fd",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
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
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
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
