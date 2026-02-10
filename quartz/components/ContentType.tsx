import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/contentType.scss"

const typeConfig: Record<string, { icon: string; label: string }> = {
  post: { icon: "ph-pencil-simple", label: "Post" },
  note: { icon: "ph-note", label: "Note" },
  essay: { icon: "ph-file-text", label: "Essay" },
}

const ContentType: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const type = fileData.frontmatter?.type as string | undefined
  if (!type || !(type in typeConfig)) return null

  const { icon, label } = typeConfig[type]

  return (
    <div class={`content-type content-type--${type}`}>
      <i class={`ph ${icon}`}></i>
      <span>{label}</span>
    </div>
  )
}

ContentType.css = style

export default (() => ContentType) satisfies QuartzComponentConstructor
