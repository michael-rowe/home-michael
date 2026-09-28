import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// `title-highlight:` in frontmatter names a phrase in the title to tint with
// the accent (PFL-9; identity-michael.md § Structure — the identity's one
// decorative move). Opt-in: a title without the field, or whose field does
// not occur in it, renders plain.
const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (!title) return null

  const phrase = fileData.frontmatter?.["title-highlight"]
  const at = phrase ? title.toLowerCase().indexOf(phrase.toLowerCase()) : -1
  if (!phrase || at < 0) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  }

  return (
    <h1 class={classNames(displayClass, "article-title", "article-title--highlight")}>
      {title.slice(0, at)}
      <mark class="title-highlight">{title.slice(at, at + phrase.length)}</mark>
      {title.slice(at + phrase.length)}
    </h1>
  )
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

/* A heading that carries a highlight opens its leading, or the tint covers
   the descenders of the line above (identity § Structure) */
.article-title--highlight {
  line-height: 1.22;
}

.article-title .title-highlight {
  background-color: var(--mr-accent-tint);
  color: inherit;
  padding: 0 0.2em;
  margin: 0 -0.05em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
