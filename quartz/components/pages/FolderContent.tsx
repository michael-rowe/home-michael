import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

import style from "../styles/listPage.scss"
import { PageList, SortFn } from "../PageList"
import { NotesGrid } from "../NotesGrid"
import { NotesByTag } from "../NotesByTag"
import { CourseLessonList } from "../CourseLessonList"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { i18n } from "../../i18n"
import { QuartzPluginData } from "../../plugins/vfile"
import { ComponentChildren } from "preact"
import { concatenateResources } from "../../util/resources"
import { trieFromAllFiles } from "../../util/ctx"

interface FolderContentOptions {
  /**
   * Whether to display number of folders
   */
  showFolderCount: boolean
  showSubfolders: boolean
  sort?: SortFn
}

const defaultOptions: FolderContentOptions = {
  showFolderCount: true,
  showSubfolders: true,
}

export default ((opts?: Partial<FolderContentOptions>) => {
  const options: FolderContentOptions = { ...defaultOptions, ...opts }

  const FolderContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props

    const trie = (props.ctx.trie ??= trieFromAllFiles(allFiles))
    const folder = trie.findNode(fileData.slug!.split("/"))
    if (!folder) {
      return null
    }

    const allPagesInFolder: QuartzPluginData[] =
      folder.children
        .map((node) => {
          // regular file, proceed
          if (node.data) {
            return node.data
          }

          if (node.isFolder && options.showSubfolders) {
            // folders that dont have data need synthetic files
            const getMostRecentDates = (): QuartzPluginData["dates"] => {
              let maybeDates: QuartzPluginData["dates"] | undefined = undefined
              for (const child of node.children) {
                if (child.data?.dates) {
                  // compare all dates and assign to maybeDates if its more recent or its not set
                  if (!maybeDates) {
                    maybeDates = { ...child.data.dates }
                  } else {
                    if (child.data.dates.created > maybeDates.created) {
                      maybeDates.created = child.data.dates.created
                    }

                    if (child.data.dates.modified > maybeDates.modified) {
                      maybeDates.modified = child.data.dates.modified
                    }

                    if (child.data.dates.published > maybeDates.published) {
                      maybeDates.published = child.data.dates.published
                    }
                  }
                }
              }
              return (
                maybeDates ?? {
                  created: new Date(),
                  modified: new Date(),
                  published: new Date(),
                }
              )
            }

            return {
              slug: node.slug,
              dates: getMostRecentDates(),
              frontmatter: {
                title: node.displayName,
                tags: [],
              },
            }
          }
        })
        .filter((page) => page !== undefined) ?? []
    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
    const classes = cssClasses.join(" ")
    const listProps = {
      ...props,
      sort: options.sort,
      allFiles: allPagesInFolder,
    }

    const content = (
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)
    ) as ComponentChildren

    // Don't show the automatic page listing on Courses/index or Book/index since custom components handle it
    const shouldShowPageListing =
      fileData.slug !== "Courses/index" && fileData.slug !== "Book/index"

    // Detect folder types
    const isNotesFolder = fileData.slug === "Notes/index"
    const isCourseFolder = fileData.slug?.startsWith("Courses/") && fileData.slug !== "Courses/index"

    // Determine which list component to use
    let ListComponent = PageList
    if (isNotesFolder) {
      ListComponent = NotesByTag
    } else if (isCourseFolder) {
      ListComponent = CourseLessonList
    }

    // Only show folder count for standard folders (not notes, not courses)
    const showCount = !isNotesFolder && !isCourseFolder && options.showFolderCount

    return (
      <div class="popover-hint">
        <article class={classes}>{content}</article>
        {shouldShowPageListing && (
          <div class="page-listing">
            {showCount && (
              <p>
                {i18n(cfg.locale).pages.folderContent.itemsUnderFolder({
                  count: allPagesInFolder.length,
                })}
              </p>
            )}
            <div>
              <ListComponent {...listProps} />
            </div>
          </div>
        )}
      </div>
    )
  }

  FolderContent.css = concatenateResources(style, PageList.css, NotesGrid.css, NotesByTag.css, CourseLessonList.css)
  return FolderContent
}) satisfies QuartzComponentConstructor
