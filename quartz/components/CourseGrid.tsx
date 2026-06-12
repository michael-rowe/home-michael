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
          cover: file.frontmatter?.cover as string | undefined,
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
          const accentColor = course.color || "var(--neutral-accent)"

          return (
            <a href={href} class="course-card" style={`--card-accent: ${accentColor}`}>
              {course.status && (
                <span class={`course-status course-status--${statusSlug}`}>
                  {course.status}
                </span>
              )}
              <h3 class="course-card-title">{course.title}</h3>
              {course.description && (
                <p class="course-card-description">{course.description}</p>
              )}
              {(course.duration || course.level) && (
                <div class="course-card-meta">
                  {course.duration && <span class="course-meta-item">{course.duration}</span>}
                  {course.level && <span class="course-meta-item">{course.level}</span>}
                </div>
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
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.course-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background-color: color-mix(in srgb, var(--card-accent, var(--lightgray)) 10%, var(--light));
  border: 1px solid color-mix(in srgb, var(--card-accent, var(--lightgray)) 25%, transparent);
  border-radius: 8px;
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.15s ease;
}

.course-card:hover {
  border-color: color-mix(in srgb, var(--card-accent, var(--secondary)) 60%, transparent);
}

.course-status {
  display: inline-flex;
  align-self: flex-start;
  padding: 0.2em 0.6em;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.course-status--published {
  background-color: color-mix(in srgb, var(--status-positive) 12%, transparent);
  color: var(--status-positive);
}

.course-status--in-development {
  background-color: color-mix(in srgb, var(--status-progress) 12%, transparent);
  color: var(--status-progress);
}

.course-status--coming-soon {
  background-color: color-mix(in srgb, var(--status-upcoming) 12%, transparent);
  color: var(--status-upcoming);
}

.course-card-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--dark);
  line-height: 1.3;
}

.course-card-description {
  margin: 0;
  font-size: 0.9rem;
  color: var(--darkgray);
  line-height: 1.5;
  flex-grow: 1;
}

.course-card-meta {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid color-mix(in srgb, var(--card-accent, var(--lightgray)) 20%, transparent);
  flex-wrap: wrap;
  margin-top: auto;
}

.course-meta-item {
  font-size: 0.8rem;
  color: var(--gray);
}

.course-meta-item + .course-meta-item::before {
  content: "·";
  margin-right: 0.5rem;
}
`

  return CourseGrid
}) satisfies QuartzComponentConstructor
