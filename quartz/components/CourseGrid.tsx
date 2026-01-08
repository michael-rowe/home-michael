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
    cfg,
  }: QuartzComponentProps) => {
    // Find all course folders by looking for course landing pages or index files
    // Note: Quartz converts "landing page.md" to "landing-page" in slugs
    const courseFolderPattern = new RegExp(`^${options.coursesFolder}/([^/]+)/(landing-page|index)$`)

    const courses = allFiles
      .filter((file) => {
        // Match files like "Courses/Course Name/landing page.md" or "Courses/Course Name/index.md"
        const match = file.slug?.match(courseFolderPattern)
        return match !== null
      })
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
          courseName: courseName,
        }
      })
      .sort((a, b) => {
        // Sort by status first (Published > In Development > Coming Soon > others)
        const statusOrder: Record<string, number> = {
          Published: 0,
          "In Development": 1,
          "Coming Soon": 2,
        }
        const aStatus = statusOrder[a.status || ""] ?? 999
        const bStatus = statusOrder[b.status || ""] ?? 999
        if (aStatus !== bStatus) {
          return aStatus - bStatus
        }
        // Then sort alphabetically by title
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

          return (
            <a href={href} class="course-card">
              <div class="course-card-image">
                {course.cover ? (
                  <img
                    src={resolveRelative(fileData.slug!, course.cover as FullSlug)}
                    alt={course.title}
                    loading="lazy"
                  />
                ) : (
                  <div class="course-card-placeholder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                )}
                {course.status && (
                  <span class={`course-status ${course.status.toLowerCase().replace(/\s+/g, '-')}`}>
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

@media (max-width: 800px) {
  .course-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.course-card {
  display: flex;
  flex-direction: column;
  background-color: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--secondary);
}

.course-card-image {
  position: relative;
  width: 100%;
  height: 200px;
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
  transition: transform 0.3s ease;
}

.course-card:hover .course-card-image img {
  transform: scale(1.05);
}

.course-card-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--gray);
}

.course-status {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: var(--light);
  border: 1px solid var(--lightgray);
}

.course-status.published {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.course-status.in-development {
  background-color: #fff3cd;
  border-color: #ffc107;
  color: #856404;
}

.course-status.coming-soon {
  background-color: #d1ecf1;
  border-color: #17a2b8;
  color: #0c5460;
}

.course-card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
}

.course-card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.3;
}

.course-card-description {
  margin: 0;
  font-size: 0.95rem;
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
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--lightgray);
}

.course-meta-item {
  font-size: 0.85rem;
  color: var(--gray);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.course-meta-item::before {
  content: "•";
  margin-right: 0.25rem;
}

.course-meta-item:first-child::before {
  content: "";
  margin-right: 0;
}
`

  return CourseGrid
}) satisfies QuartzComponentConstructor
