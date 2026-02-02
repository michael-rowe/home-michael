import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import style from "./styles/footer.scss"

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
          <a href={`${baseDir}/colophon`}>Colophon</a>
          <a href={`${baseDir}/accessibility`}>Accessibility</a>
          <a href={`${baseDir}/privacy`}>Privacy</a>
        </div>
        <div class="license-info">
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="license noopener noreferrer"
            class="cc-license-link"
          >
            <img
              src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg"
              alt="Creative Commons Attribution 4.0 International License"
              class="cc-license-badge"
            />
          </a>
          <p class="license-text">
            © {year} {author}. This work is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="license noopener noreferrer"
            >
              Creative Commons Attribution 4.0 International License
            </a>
            .
          </p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
