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
          const placeholderColor = course.color || "#6b7280"

          return (
            <a href={href} class="course-card">
              <div
                class="course-card-image"
                style={!course.cover ? `background-color: ${placeholderColor}` : ""}
              >
                {course.cover ? (
                  <img
                    src={resolveRelative(fileData.slug!, course.cover as FullSlug)}
                    alt={course.title}
                    loading="lazy"
                  />
                ) : (
                  <i class="ph ph-graduation-cap course-card-placeholder-icon"></i>
                )}
                {course.status && (
                  <span class={`course-status course-status--${statusSlug}`}>
                    {course.status}
                  </span>
                )}
              </div>
              <div class="course-card-content">
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
              </div>
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
  background-color: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.15s ease;
}

.course-card:hover {
  border-color: var(--secondary);
}

.course-card-image {
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  background-color: var(--lightgray);
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-card-placeholder-icon {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.course-status {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
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

.course-card-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
}

.course-card-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.3;
}

.course-card-description {
  margin: 0;
  font-size: 0.9rem;
  color: var(--darkgray);
  line-height: 1.5;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-card-meta {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--lightgray);
  flex-wrap: wrap;
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
