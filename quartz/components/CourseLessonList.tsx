import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, isFolderPath } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"

interface Module {
  name: string
  displayName: string
  description?: string
  lessons: QuartzPluginData[]
}

export const CourseLessonList: QuartzComponent = ({
  fileData,
  allFiles,
}: QuartzComponentProps) => {
  // Get module descriptions from frontmatter (optional)
  const moduleDescriptions = (fileData.frontmatter?.modules as Record<string, string>) ?? {}

  // Separate files into modules (subfolders) and direct lessons
  const courseSlug = fileData.slug!.replace(/\/index$/, "")
  const modules: Map<string, Module> = new Map()
  const directLessons: QuartzPluginData[] = []

  for (const file of allFiles) {
    const slug = file.slug!
    const relativePath = slug.replace(courseSlug + "/", "")

    // Skip folder index pages and introduction/conclusion at root level
    if (isFolderPath(slug)) continue

    // Check if this file is in a subfolder (module)
    const parts = relativePath.split("/")
    if (parts.length > 1) {
      // File is in a module subfolder
      const moduleFolderName = parts[0]
      // Extract display name and convert to sentence case (e.g., "01-Foundation" -> "Foundation")
      const rawName = moduleFolderName.replace(/^\d+[-\s]+/, "")
      const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase()

      if (!modules.has(moduleFolderName)) {
        modules.set(moduleFolderName, {
          name: moduleFolderName,
          displayName,
          description: moduleDescriptions[displayName],
          lessons: [],
        })
      }
      modules.get(moduleFolderName)!.lessons.push(file)
    } else {
      // Direct lesson (no subfolder)
      directLessons.push(file)
    }
  }

  // Sort modules by folder name (which includes number prefix)
  const sortedModules = Array.from(modules.values()).sort((a, b) =>
    a.name.localeCompare(b.name),
  )

  // Sort lessons within each module by slug
  for (const module of sortedModules) {
    module.lessons.sort((a, b) => a.slug!.localeCompare(b.slug!))
  }

  // Sort direct lessons by slug, but prioritize introduction and conclusion
  directLessons.sort((a, b) => {
    const aTitle = (a.frontmatter?.title as string)?.toLowerCase() ?? ""
    const bTitle = (b.frontmatter?.title as string)?.toLowerCase() ?? ""
    const aIsIntro = aTitle.includes("introduction")
    const bIsIntro = bTitle.includes("introduction")
    const aIsOutro = aTitle.includes("conclusion") || aTitle.includes("summary")
    const bIsOutro = bTitle.includes("conclusion") || bTitle.includes("summary")

    if (aIsIntro && !bIsIntro) return -1
    if (!aIsIntro && bIsIntro) return 1
    if (aIsOutro && !bIsOutro) return 1
    if (!aIsOutro && bIsOutro) return -1
    return a.slug!.localeCompare(b.slug!)
  })

  // Separate intro lessons (introduction) from outro lessons (conclusion)
  const introLessons = directLessons.filter((f) => {
    const title = (f.frontmatter?.title as string)?.toLowerCase() ?? ""
    const slug = f.slug?.toLowerCase() ?? ""
    return title.includes("introduction") || slug.includes("introduction")
  })
  const outroLessons = directLessons.filter((f) => {
    const title = (f.frontmatter?.title as string)?.toLowerCase() ?? ""
    const slug = f.slug?.toLowerCase() ?? ""
    return title.includes("conclusion") || title.includes("summary") || slug.includes("conclusion") || slug.includes("summary")
  })
  const otherDirectLessons = directLessons.filter(
    (f) => !introLessons.includes(f) && !outroLessons.includes(f),
  )

  // Determine if this is a modular course or flat course
  const isModular = sortedModules.length > 0

  const renderLesson = (page: QuartzPluginData) => {
    const title = page.frontmatter?.title ?? "Untitled"
    const description = page.frontmatter?.description ?? page.description

    return (
      <li class="lesson-item">
        <a href={resolveRelative(fileData.slug!, page.slug!)} class="lesson-link" data-no-popover="true">
          <span class="lesson-title">{title}</span>
          {description && <span class="lesson-description">{description}</span>}
        </a>
      </li>
    )
  }

  if (isModular) {
    // Modular course: show modules with headings
    // Introduction and Conclusion are hidden from this view but still accessible
    // via the sidebar navigation and "Start Course" button
    return (
      <div class="course-lesson-list course-modular">
        {/* Main modules */}
        {sortedModules.map((module) => (
          <div class="course-module">
            <h3 class="module-title">{module.displayName}</h3>
            {module.description && (
              <p class="module-description">{module.description}</p>
            )}
            <ul class="lesson-list">{module.lessons.map(renderLesson)}</ul>
          </div>
        ))}

        {/* Other direct lessons (excluding intro/outro) */}
        {otherDirectLessons.length > 0 && (
          <div class="course-module course-supplementary">
            <ul class="lesson-list">{otherDirectLessons.map(renderLesson)}</ul>
          </div>
        )}
      </div>
    )
  }

  // Flat course: simple lesson list
  return (
    <div class="course-lesson-list">
      <h3>Lessons</h3>
      <ul class="lesson-list">{directLessons.map(renderLesson)}</ul>
    </div>
  )
}

CourseLessonList.css = `
.course-lesson-list {
  margin-top: 2rem;
  padding-top: 1.5rem;
}

.course-lesson-list > h3 {
  margin-bottom: 1rem;
}

/* Modular course styles */
.course-modular {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.course-module {
  padding-bottom: 1.5rem;
}

.course-module:last-child {
  padding-bottom: 0;
}

.module-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: var(--dark);
}

.module-description {
  margin: 0 0 1rem 0;
  color: var(--darkgray);
  font-size: 0.95rem;
  line-height: 1.5;
}

.course-supplementary {
  padding-top: 1rem;
}

.course-supplementary .lesson-list {
  gap: 0.5rem;
}

/* Lesson list styles */
.lesson-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.lesson-item {
  margin: 0;
}

.lesson-link {
  display: block;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  background-color: transparent;
  transition: background-color 0.2s ease;
  border: none !important;
  border-left: none !important;
  outline: none !important;
  box-shadow: none !important;
}

.lesson-link:hover,
.lesson-link:focus,
.lesson-link:active {
  background-color: rgba(143, 159, 169, 0.1);
  border: none !important;
  border-left: none !important;
  outline: none !important;
  box-shadow: none !important;
}

.lesson-title {
  display: block;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 0.25rem;
  font-size: 1.05rem;
}

.lesson-description {
  display: block;
  font-size: 0.9rem;
  color: var(--darkgray);
  line-height: 1.4;
  font-weight: 400;
}
`

export default (() => CourseLessonList) satisfies QuartzComponentConstructor
