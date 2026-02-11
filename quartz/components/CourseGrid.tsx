import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { classNames } from "../util/lang"

interface CourseGridOptions {
  coursesFolder?: string
}

const defaultOptions: CourseGridOptions = {
  coursesFolder: "Courses",
}

export default ((opts?: Partial<CourseGridOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const CourseGrid: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const courseFolderPattern = new RegExp(`^${options.coursesFolder}/([^/]+)/(landing-page|index)$`)

    const courses = allFiles
      .filter((file) => file.slug?.match(courseFolderPattern) !== null)
      .map((file) => {
        const match = file.slug!.match(courseFolderPattern)
        const courseName = match?.[1] || ""
        return {
          slug: file.slug!,
          title: file.frontmatter?.title || courseName,
          description: file.frontmatter?.description || "",
          status: file.frontmatter?.status as string | undefined,
          duration: file.frontmatter?.duration as string | undefined,
          level: file.frontmatter?.level as string | undefined,
          color: file.frontmatter?.color as string | undefined,
        }
      })
      .sort((a, b) => {
        const statusOrder: Record<string, number> = {
          Published: 0,
          "In Development": 1,
          "Coming Soon": 2,
        }
        const aStatus = statusOrder[a.status || ""] ?? 999
        const bStatus = statusOrder[b.status || ""] ?? 999
        if (aStatus !== bStatus) return aStatus - bStatus
        return a.title.localeCompare(b.title)
      })

    if (courses.length === 0) {
      return (
        <div class={classNames(displayClass, "course-grid")}>
          <p>No courses available yet.</p>
        </div>
      )
    }

    return (
      <div class={classNames(displayClass, "course-grid")}>
        {courses.map((course) => {
          const href = resolveRelative(fileData.slug!, course.slug as FullSlug)
          const statusSlug = course.status?.toLowerCase().replace(/\s+/g, "-")
          const accentColor = course.color || "var(--secondary)"

          return (
            <a
              href={href}
              class="course-card"
              style={`border-top-color: ${accentColor}`}
            >
              {course.status && (
                <span class={`course-status course-status--${statusSlug}`}>
                  {course.status}
                </span>
              )}
              <p class="course-card-title" style={`color: ${accentColor}`}>
                {course.title}
              </p>
              {course.description && (
                <p class="course-card-description">{course.description}</p>
              )}
              {(course.duration || course.level) && (
                <p class="course-card-meta">
                  {[course.duration, course.level].filter(Boolean).join(" · ")}
                </p>
              )}
            </a>
          )
        })}
      </div>
    )
  }

  CourseGrid.css = `
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.course-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background-color: var(--light);
  border: 1px solid var(--lightgray);
  border-top: 3px solid var(--secondary);
  border-radius: 8px;
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.15s ease;
}

.course-card:hover {
  border-color: currentColor;
  border-top-width: 3px;
}

.course-status {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  align-self: flex-start;
}

.course-status--published {
  background-color: #d4edda;
  color: #155724;
}

.course-status--in-development {
  background-color: #fff3cd;
  color: #856404;
}

.course-status--coming-soon {
  background-color: #d1ecf1;
  color: #0c5460;
}

.course-card-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

.course-card-description {
  margin: 0;
  font-size: 0.875rem;
  color: var(--darkgray);
  line-height: 1.4;
  flex-grow: 1;
}

.course-card-meta {
  margin: 0;
  font-size: 0.8rem;
  color: var(--gray);
}
`

  return CourseGrid
}) satisfies QuartzComponentConstructor
