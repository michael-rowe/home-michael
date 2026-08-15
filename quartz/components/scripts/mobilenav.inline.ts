function populateMobileTOC() {
  const mobileTOCContainer = document.querySelector(".mobile-nav-toc") as HTMLElement | null
  const mobileTOCList = document.getElementById("mobile-toc-list")

  if (!mobileTOCContainer || !mobileTOCList) return

  // Get all headings from the article
  const article = document.querySelector("article")
  if (!article) {
    mobileTOCContainer.style.display = "none"
    return
  }

  // Find all h1-h6 headings with IDs
  const headings = article.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")

  if (headings.length === 0) {
    mobileTOCContainer.style.display = "none"
    return
  }

  mobileTOCContainer.style.display = "block"
  mobileTOCList.innerHTML = ""

  headings.forEach((heading) => {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.href = `#${heading.id}`

    // Get the text content, excluding any icons or extra elements
    const clone = heading.cloneNode(true) as HTMLElement
    const icon = clone.querySelector('a[role="anchor"]')
    if (icon) icon.remove()
    a.textContent = clone.textContent || ""

    a.className = "internal mobile-nav-link"

    // Add indentation based on heading level
    const level = parseInt(heading.tagName.substring(1))
    if (level > 2) {
      a.style.paddingLeft = `${(level - 2) * 0.75}rem`
    }

    // No close listener here — setupMobileNav wires every .mobile-nav-link
    // (including these) immediately after populateMobileTOC runs.
    li.appendChild(a)
    mobileTOCList.appendChild(li)
  })
}

function setExpanded(expanded: boolean) {
  const toggleButton = document.querySelector(".mobile-nav-toggle")
  if (toggleButton) toggleButton.setAttribute("aria-expanded", String(expanded))

  // `inert` removes the closed drawer from the tab order and the accessibility
  // tree. Without it the off-screen panel is still focusable, so tabbing the
  // page drops the user into an invisible menu.
  const panel = document.getElementById("mobile-nav-content")
  if (panel) {
    if (expanded) {
      panel.removeAttribute("inert")
    } else {
      panel.setAttribute("inert", "")
    }
  }
}

// Keep focus inside the open drawer — it is a modal surface (body scroll is
// locked and an overlay covers the page behind it).
function trapFocus(e: KeyboardEvent) {
  if (e.key !== "Tab") return
  const panel = document.getElementById("mobile-nav-content")
  if (!panel || !panel.closest(".mobile-nav")?.classList.contains("open")) return

  const focusable = panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
  if (focusable.length === 0) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

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
  setExpanded(isOpen)

  // Move focus into the drawer so keyboard and screen-reader users land where
  // the visual focus went.
  if (isOpen) {
    const closeButton = document.querySelector(".mobile-nav-close") as HTMLElement | null
    closeButton?.focus()
  }
}

function closeMobileNav(opts?: { restoreFocus?: boolean }) {
  const mobileNav = document.querySelector(".mobile-nav") as HTMLElement
  if (!mobileNav) return

  const wasOpen = mobileNav.classList.contains("open")
  mobileNav.classList.remove("open")
  document.body.classList.remove("mobile-nav-open")
  setExpanded(false)

  // Return focus to the toggle, but only when closing via Escape or the close
  // button — not when following a link, which navigates away anyway.
  if (wasOpen && opts?.restoreFocus) {
    const toggleButton = document.querySelector(".mobile-nav-toggle") as HTMLElement | null
    toggleButton?.focus()
  }
}

// Closing via the close button or Escape is a deliberate dismissal, so focus
// goes back to the control that opened the drawer.
function closeMobileNavRestoringFocus() {
  closeMobileNav({ restoreFocus: true })
}

// Close menu when clicking on a link
function handleLinkClick(this: HTMLElement, evt: MouseEvent) {
  closeMobileNav()
}

// Close menu when clicking overlay
function createOverlay() {
  const overlay = document.createElement("div")
  overlay.className = "mobile-nav-overlay"
  overlay.addEventListener("click", () => closeMobileNav({ restoreFocus: true }))
  document.body.appendChild(overlay)
}

function setupMobileNav() {
  // Remove any existing overlay first
  const existingOverlay = document.querySelector(".mobile-nav-overlay")
  if (existingOverlay) {
    existingOverlay.remove()
  }

  // Create new overlay
  createOverlay()

  // Populate TOC
  populateMobileTOC()

  // Setup toggle button
  const toggleButton = document.querySelector(".mobile-nav-toggle")
  if (toggleButton) {
    toggleButton.removeEventListener("click", toggleMobileNav)
    toggleButton.addEventListener("click", toggleMobileNav)
  }

  // Setup close button
  const closeButton = document.querySelector(".mobile-nav-close")
  if (closeButton) {
    closeButton.removeEventListener("click", closeMobileNavRestoringFocus)
    closeButton.addEventListener("click", closeMobileNavRestoringFocus)
  }

  // Setup link clicks to close menu
  const navLinks = document.querySelectorAll(".mobile-nav-link")
  navLinks.forEach((link) => {
    link.removeEventListener("click", handleLinkClick)
    link.addEventListener("click", handleLinkClick)
  })
}

function handleEscape(e: KeyboardEvent) {
  if (e.key === "Escape") closeMobileNav({ restoreFocus: true })
}

// Module-level listeners: this script executes once per full page load, so
// these never duplicate. Per-page wiring lives in setupMobileNav, which runs
// on every SPA "nav" event (Quartz fires it on initial load too).
window.addEventListener("popstate", () => closeMobileNav())
document.addEventListener("keydown", handleEscape)
document.addEventListener("keydown", trapFocus)
document.addEventListener("nav", setupMobileNav)
