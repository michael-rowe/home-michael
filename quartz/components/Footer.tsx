import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { execSync } from "node:child_process"

// The build line (PFL-9; identity-michael.md § The masthead): which commit this
// page was built from, and when. CI provides GITHUB_SHA; locally, ask git.
function buildSha(): string {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7)
  try {
    return execSync("git rev-parse --short=7 HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim()
  } catch {
    return "local"
  }
}
const BUILD_SHA = buildSha()
const BUILD_DATE = new Date().toISOString().slice(0, 10)

interface Options {
  author?: string
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const author = opts?.author ?? "Michael Rowe"
    const baseDir = pathToRoot(fileData.slug!)
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-links">
          <a href={`${baseDir}/uses`}>Uses</a>
          <a href={`${baseDir}/writing-with-ai`}>Writing with AI</a>
          <a href={`${baseDir}/colophon`}>Colophon</a>
          <a href={`${baseDir}/accessibility`}>Accessibility</a>
          <a href={`${baseDir}/privacy`}>Privacy</a>
        </div>
        <div class="build-line">
          <span>
            /home/michael · build {BUILD_SHA} · {BUILD_DATE} ·{" "}
            <a href="https://quartz.jzhao.xyz" target="_blank" rel="noopener noreferrer">
              quartz v{version}
            </a>
          </span>
          <span>
            © {year} {author} ·{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="license noopener noreferrer"
              title="Creative Commons Attribution 4.0 International License"
            >
              CC BY 4.0
            </a>{" "}
            ·{" "}
            <a href="https://orcid.org/0000-0002-1538-6052" target="_blank" rel="noopener noreferrer">
              orcid 0000-0002-1538-6052
            </a>
          </span>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
