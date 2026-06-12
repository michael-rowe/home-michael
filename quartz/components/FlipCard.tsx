import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/flipcard.inline"

// Behaviour-only component: makes click-to-flip cards in course content
// interactive. Markup convention (raw HTML in Markdown content):
//
//   <div class="flip-card">
//     <div class="flip-card-inner">
//       <div class="flip-card-front"><h3>QUESTION</h3><p>…</p></div>
//       <div class="flip-card-back"><h3>ANSWER</h3><p>…</p></div>
//     </div>
//   </div>
//
// Clicking (or pressing Enter/Space) toggles the card. Styles live in
// quartz/styles/custom.scss (.flip-card / .flip-card-front / .flip-card-back).
// Included once via the page layout so the listeners are attached site-wide
// and survive SPA navigation; the inline script re-binds on the nav event and
// cleans up via window.addCleanup.
const FlipCard: QuartzComponent = () => null

FlipCard.afterDOMLoaded = script

export default (() => FlipCard) satisfies QuartzComponentConstructor
