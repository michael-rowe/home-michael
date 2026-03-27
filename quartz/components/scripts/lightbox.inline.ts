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

  zoom.on("open", () => closeBtn.classList.add("lightbox-close--visible"))
  zoom.on("close", () => closeBtn.classList.remove("lightbox-close--visible"))
  closeBtn.addEventListener("click", () => zoom.close())

  window.addCleanup(() => {
    zoom.detach()
    closeBtn.remove()
  })
})
