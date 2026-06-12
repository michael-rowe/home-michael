import { QuartzPluginData } from "../../plugins/vfile"

/**
 * Canonical course-lesson ordering, shared by every component that lists or
 * walks lessons (LessonNav, CourseButton, ContextualNav, MobileNav,
 * CourseLessonList). Order: introduction first, conclusion/summary last, then
 * the `lesson` frontmatter number (aliases: `lesson_number`, `lesson_order`),
 * then title. Comparison is key-based so the order is transitive even when
 * only some lessons carry a number.
 */

export function lessonNumber(f: QuartzPluginData): number | undefined {
  const n = f.frontmatter?.lesson_number ?? f.frontmatter?.lesson_order ?? f.frontmatter?.lesson
  return typeof n === "number" ? n : undefined
}

function sortKey(f: QuartzPluginData): [number, number, string] {
  const title = ((f.frontmatter?.title as string) ?? "").toLowerCase()
  const slug = (f.slug ?? "").toLowerCase()
  const isIntro = title.includes("introduction") || slug.includes("introduction")
  const isOutro = /conclusion|summary/.test(title) || /\/(conclusion|.*summary)$/.test(slug)
  const pin = isIntro ? -1 : isOutro ? 1 : 0
  return [pin, lessonNumber(f) ?? Infinity, title]
}

export function byLessonOrder(a: QuartzPluginData, b: QuartzPluginData): number {
  const ka = sortKey(a)
  const kb = sortKey(b)
  if (ka[0] !== kb[0]) return ka[0] - kb[0]
  if (ka[1] !== kb[1]) return ka[1] - kb[1]
  return ka[2].localeCompare(kb[2])
}

/**
 * All lesson pages for a course, excluding the course index and any
 * overview/landing pages, in canonical order.
 */
export function courseLessons(
  allFiles: QuartzPluginData[],
  courseName: string,
): QuartzPluginData[] {
  return allFiles
    .filter((f) => {
      const parts = f.slug!.split("/")
      return (
        parts[0] === "Courses" &&
        parts[1] === courseName &&
        !f.slug!.endsWith("/index") &&
        !f.slug!.endsWith("/course-overview") &&
        !f.slug!.endsWith("/landing-page")
      )
    })
    .sort(byLessonOrder)
}
