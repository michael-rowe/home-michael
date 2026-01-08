function toggleMobileNav(this: HTMLElement) {
  const mobileNav = this.closest(".mobile-nav") as HTMLElement
  if (!mobileNav) return

  const isOpen = mobileNav.classList.toggle("open")

  // Prevent body scroll when menu is open
  if (isOpen) {
    document.body.classList.add("mobile-nav-open")
  } else {
    document.body.classList.remove("mobile-nav-open")
  }
}

function closeMobileNav() {
  const mobileNav = document.querySelector(".mobile-nav") as HTMLElement
  if (!mobileNav) return

  mobileNav.classList.remove("open")
  document.body.classList.remove("mobile-nav-open")
}

// Close menu when clicking on a link
function handleLinkClick(this: HTMLElement, evt: MouseEvent) {
  closeMobileNav()
}

// Close menu when clicking overlay
function createOverlay() {
  const overlay = document.createElement("div")
  overlay.className = "mobile-nav-overlay"
  overlay.addEventListener("click", closeMobileNav)
  document.body.appendChild(overlay)
}

document.addEventListener("nav", () => {
  // Remove any existing overlay first
  const existingOverlay = document.querySelector(".mobile-nav-overlay")
  if (existingOverlay) {
    existingOverlay.remove()
  }

  // Create new overlay
  createOverlay()

  // Setup toggle button
  const toggleButton = document.querySelector(".mobile-nav-toggle")
  if (toggleButton) {
    toggleButton.removeEventListener("click", toggleMobileNav)
    toggleButton.addEventListener("click", toggleMobileNav)
  }

  // Setup close button
  const closeButton = document.querySelector(".mobile-nav-close")
  if (closeButton) {
    closeButton.removeEventListener("click", closeMobileNav)
    closeButton.addEventListener("click", closeMobileNav)
  }

  // Setup link clicks to close menu
  const navLinks = document.querySelectorAll(".mobile-nav-link")
  navLinks.forEach((link) => {
    link.removeEventListener("click", handleLinkClick)
    link.addEventListener("click", handleLinkClick)
  })

  // Close menu on page navigation (for SPA)
  window.addEventListener("popstate", closeMobileNav)
})

// Initialize on first load
window.addEventListener("DOMContentLoaded", () => {
  createOverlay()

  const toggleButton = document.querySelector(".mobile-nav-toggle")
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleMobileNav)
  }

  const closeButton = document.querySelector(".mobile-nav-close")
  if (closeButton) {
    closeButton.addEventListener("click", closeMobileNav)
  }

  const navLinks = document.querySelectorAll(".mobile-nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", handleLinkClick)
  })
})
