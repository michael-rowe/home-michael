function toggleFlipCard(this: HTMLElement) {
  this.classList.toggle("flipped")
}

function setupFlipCards() {
  const flipCards = document.getElementsByClassName("flip-card") as HTMLCollectionOf<HTMLElement>

  for (const card of flipCards) {
    // Remove any existing listeners
    card.removeEventListener("click", toggleFlipCard)
    // Add click listener
    card.addEventListener("click", toggleFlipCard)
    window.addCleanup(() => card.removeEventListener("click", toggleFlipCard))
  }
}

document.addEventListener("nav", setupFlipCards)
window.addEventListener("resize", setupFlipCards)
