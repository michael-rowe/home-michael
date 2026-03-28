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
    enablePopovers: true,
    analytics: {
      provider: "umami",
      websiteId: "77390f7b-08ec-4c18-b306-0b03e2dafc81",
    },
    locale: "en-US",
    baseUrl: "michael-rowe.github.io/home-michael",
    ignorePatterns: ["private", "templates", ".obsidian", "drafts", "personas"],
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
          gray: "#a09990",
          darkgray: "#57534e",
          dark: "#1c1917",
          secondary: "#c45d3e",
          tertiary: "#a84a2f",
          highlight: "rgba(196, 93, 62, 0.08)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#131009",
          lightgray: "#2a2418",
          gray: "#5a5040",
          darkgray: "#d4c9b0",
          dark: "#ede6d6",
          secondary: "#e07a5f",
          tertiary: "#f2a58e",
          highlight: "rgba(224, 122, 95, 0.15)",
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
    ],
    filters: [Plugin.RemoveDrafts()],
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
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
