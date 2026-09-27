import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TagList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const tags = fileData.frontmatter?.tags
  if (tags && tags.length > 0) {
    return (
      <ul class={classNames(displayClass, "tags")}>
        {tags.map((tag) => {
          const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <li>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return null
  }
}

TagList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

/* Tags as mono chips (PFL-9): lowercase — a tag is an identifier — in the
   link colour, 1px chip-line box, no fill */
a.internal.tag-link {
  border-radius: 0;
  background-color: transparent;
  border: 1px solid var(--mr-chip-line);
  padding: 0.25em 0.55em;
  margin: 0;
  font-family: var(--codeFont);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.02em;
}

a.internal.tag-link:hover {
  border-color: var(--secondary);
}
`

export default (() => TagList) satisfies QuartzComponentConstructor
