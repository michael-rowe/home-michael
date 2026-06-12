function toggleFlipCard(this: HTMLElement) {
  this.classList.toggle("flipped")
}

function flipCardKeydown(this: HTMLElement, e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault()
    this.classList.toggle("flipped")
  }
}

function setupFlipCards() {
  const flipCards = document.getElementsByClassName("flip-card") as HTMLCollectionOf<HTMLElement>

  for (const card of flipCards) {
    // Make cards keyboard-operable
    card.setAttribute("tabindex", "0")
    card.setAttribute("role", "button")

    card.addEventListener("click", toggleFlipCard)
    card.addEventListener("keydown", flipCardKeydown)
    window.addCleanup(() => {
      card.removeEventListener("click", toggleFlipCard)
      card.removeEventListener("keydown", flipCardKeydown)
    })
  }
}

document.addEventListener("nav", setupFlipCards)
