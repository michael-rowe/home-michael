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

  const closeBtn = document.createElement("button")
  closeBtn.className = "lightbox-close"
  closeBtn.setAttribute("aria-label", "Close image")
  closeBtn.innerHTML = "&#x2715;"
  document.body.appendChild(closeBtn)

  // Watch for medium-zoom's own body class rather than relying on its custom events,
  // which can fail to fire depending on how the build bundles event listeners.
  const observer = new MutationObserver(() => {
    closeBtn.classList.toggle(
      "lightbox-close--visible",
      document.body.classList.contains("medium-zoom--opened"),
    )
  })
  observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })

  closeBtn.addEventListener("click", () => zoom.close())

  window.addCleanup(() => {
    zoom.detach()
    observer.disconnect()
    closeBtn.remove()
  })
})
