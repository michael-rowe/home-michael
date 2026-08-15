// `backface-visibility: hidden` is a paint-level effect only — both faces stay
// in the accessibility tree, so a screen reader would otherwise read the
// question and its answer together. Mirror the visual state with aria-hidden so
// only the face on show contributes to the card's accessible name.
function syncFlipState(card: HTMLElement) {
  const flipped = card.classList.contains("flipped")
  const front = card.querySelector(".flip-card-front")
  const back = card.querySelector(".flip-card-back")

  front?.setAttribute("aria-hidden", String(flipped))
  back?.setAttribute("aria-hidden", String(!flipped))
  card.setAttribute("aria-pressed", String(flipped))
}

function toggleFlipCard(this: HTMLElement) {
  this.classList.toggle("flipped")
  syncFlipState(this)
}

function flipCardKeydown(this: HTMLElement, e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault()
    this.classList.toggle("flipped")
    syncFlipState(this)
  }
}

function setupFlipCards() {
  const flipCards = document.getElementsByClassName("flip-card") as HTMLCollectionOf<HTMLElement>

  for (const card of flipCards) {
    // Make cards keyboard-operable
    card.setAttribute("tabindex", "0")
    card.setAttribute("role", "button")
    syncFlipState(card)

    card.addEventListener("click", toggleFlipCard)
    card.addEventListener("keydown", flipCardKeydown)
    window.addCleanup(() => {
      card.removeEventListener("click", toggleFlipCard)
      card.removeEventListener("keydown", flipCardKeydown)
    })
  }
}

document.addEventListener("nav", setupFlipCards)
