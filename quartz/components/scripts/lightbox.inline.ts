import mediumZoom from "medium-zoom"

document.addEventListener("nav", () => {
  const allImages = document.querySelectorAll<HTMLImageElement>(
    ".center img:not(.no-zoom):not([data-no-zoom])",
  )
  // Exclude images inside anchor tags so linked images (e.g. course cards) still navigate
  const images = Array.from(allImages).filter((img) => !img.closest("a"))
  if (images.length === 0) return

  const zoom = mediumZoom(images, {
    background: "var(--light)",
    margin: 24,
  })

  window.addCleanup(() => zoom.detach())
})
