import mediumZoom from "medium-zoom"

document.addEventListener("nav", () => {
  const images = document.querySelectorAll<HTMLImageElement>(
    ".center img:not(.no-zoom):not([data-no-zoom])",
  )
  if (images.length === 0) return

  const zoom = mediumZoom(images, {
    background: "var(--light)",
    margin: 24,
  })

  window.addCleanup(() => zoom.detach())
})
