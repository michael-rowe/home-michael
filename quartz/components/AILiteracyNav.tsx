import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative, simplifySlug } from "../util/path"

interface Module {
  title: string
  lessons: {
    slug: string
    title: string
    number: string
  }[]
}

const modules: Module[] = [
  {
    title: "Foundation",
    lessons: [
      { slug: "foundation lesson 1 - AI as a cognitive partner", title: "AI as a cognitive partner", number: "1.1" },
      { slug: "foundation lesson 2 - prompting and communication", title: "Prompting and communication", number: "1.2" },
    ],
  },
  {
    title: "Module 1: Substitution",
    lessons: [
      { slug: "substitution lesson 1 - creating content efficiently", title: "Creating content efficiently", number: "2.1" },
      { slug: "substitution lesson 2 - reading for information", title: "Reading for information", number: "2.2" },
      { slug: "substitution lesson 3 - writing assistance", title: "Writing assistance", number: "2.3" },
    ],
  },
  {
    title: "Module 2: Adaptation",
    lessons: [
      { slug: "adaptation lesson 1 - building competence", title: "Building competence", number: "3.1" },
      { slug: "adaptation lesson 2 - argument development", title: "Argument development", number: "3.2" },
      { slug: "adaptation lesson 3 - problem decomposition", title: "Problem decomposition", number: "3.3" },
    ],
  },
  {
    title: "Module 3: Transformation",
    lessons: [
      { slug: "transformation lesson 1 - context sovereignty", title: "Context sovereignty", number: "4.1" },
      { slug: "transformation lesson 2 - cultivating taste", title: "Cultivating taste", number: "4.2" },
      { slug: "transformation lesson 3 - integrating into practice", title: "Integrating into practice", number: "4.3" },
    ],
  },
]

export default (() => {
  const AILiteracyNav: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
    const currentSlug = simplifySlug(fileData.slug!)
    const isAILiteracy = currentSlug.startsWith("Courses/AI literacy")

    if (!isAILiteracy) {
      return null
    }

    return (
      <div class={classNames(displayClass, "ai-literacy-nav")}>
        <h3>Course navigation</h3>
        {modules.map((module) => (
          <div class="module-section">
            <h4 class="module-title">{module.title}</h4>
            <ul class="lesson-list">
              {module.lessons.map((lesson) => {
                const lessonSlug = `Courses/AI literacy/${lesson.slug}`
                const isActive = simplifySlug(lessonSlug) === currentSlug

                return (
                  <li class={isActive ? "active" : ""}>
                    <a
                      href={resolveRelative(fileData.slug!, lessonSlug)}
                      class="internal"
                    >
                      <span class="lesson-number">{lesson.number}</span> {lesson.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  AILiteracyNav.css = `
.ai-literacy-nav {
  margin-top: 1rem;
}

.ai-literacy-nav h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: var(--dark);
}

.module-section {
  margin-bottom: 1.5rem;
}

.module-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.lesson-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.lesson-list li {
  margin: 0;
  padding: 0;
}

.lesson-list a {
  display: block;
  padding: 0.4rem 0.5rem;
  margin-left: 0.5rem;
  color: var(--darkgray);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.lesson-list a:hover {
  color: var(--secondary);
  border-left-color: var(--secondary);
}

.lesson-list li.active a {
  color: var(--secondary);
  font-weight: 600;
  border-left-color: var(--secondary);
}

.lesson-number {
  font-weight: 600;
  color: var(--gray);
}

.lesson-list li.active .lesson-number {
  color: var(--secondary);
}

@media (max-width: 768px) {
  .ai-literacy-nav {
    display: none;
  }
}
`

  return AILiteracyNav
}) satisfies QuartzComponentConstructor
