import { getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import typeStyle from "./styles/contentType.scss"

// The masthead (PFL-9, identity-michael.md § The masthead): one row of mono
// chips — what it is · version · status · date — then reading time. It
// replaces the old date line and the separate content-type pill.

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

const typeLabels: Record<string, string> = {
  post: "post",
  note: "note",
  essay: "essay",
  presentation: "talk",
  guide: "guide",
  podcast: "podcast",
  lesson: "lesson",
  bib: "reading",
}

// The content folder whose --graph- colour (custom.scss) the type chip takes;
// the same colours as the global graph's nodes. Lessons have none.
const typeFolders: Record<string, string> = {
  post: "posts",
  note: "notes",
  essay: "essays",
  presentation: "presentations",
  guide: "guides",
  podcast: "podcasts",
  bib: "bibliography",
}

// Essay versions follow the scheme in CLAUDE.md: 0.1–0.6 working draft,
// 0.7–0.8 preprint deposited, 0.9 submitted, 1.0+ peer-reviewed publication.
// 1.0+ gets no derived status: in September 2026 both 1.x essays were
// preprints, one saying "Peer reviewed: No", so a derived "peer reviewed" chip
// would overclaim. A status the version cannot misstate is shown; that one is
// not. The version chip appears only on content that is actually revised —
// here, essays; a post or a note carries none (PFL-6 version-chip rule).
function essayStatus(version: number): string | undefined {
  if (version >= 1) return undefined
  if (version >= 0.9) return "submitted"
  if (version >= 0.7) return "preprint"
  return "draft"
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10)
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    if (!text) return null

    const fm = fileData.frontmatter
    const type = fm?.type as string | undefined
    const chips: JSX.Element[] = []

    if (type && type in typeLabels) {
      chips.push(
        <span class="mr-chip mr-chip--type" style={`--type-colour: var(--graph-${typeFolders[type]})`}>
          {typeLabels[type]}
        </span>,
      )
    }

    const rawVersion = fm?.version as string | number | undefined
    if (type === "essay" && rawVersion !== undefined && rawVersion !== null && rawVersion !== "") {
      const v = String(rawVersion)
      const status = essayStatus(parseFloat(v))
      chips.push(<span class="mr-chip">v{v.includes(".") ? v : `${v}.0`}</span>)
      if (status) chips.push(<span class="mr-chip mr-chip--status">{status}</span>)
    }

    const date = fileData.dates ? getDate(cfg, fileData) : undefined
    if (date) {
      chips.push(
        <span class="mr-chip">
          <time datetime={date.toISOString()}>{isoDate(date)}</time>
        </span>,
      )
    }

    if (options.showReadingTime) {
      const { minutes } = readingTime(text)
      chips.push(<span class="mr-chip mr-chip--plain">{Math.ceil(minutes)} min read</span>)
    }

    return <p class={classNames(displayClass, "content-meta", "mr-chips")}>{chips}</p>
  }

  // contentType.scss still defines the --*-color aliases other components read
  ContentMetadata.css = style + "\n" + typeStyle

  return ContentMetadata
}) satisfies QuartzComponentConstructor
