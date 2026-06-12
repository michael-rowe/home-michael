import { QuartzComponent, QuartzComponentConstructor } from "./types"

// Behaviour-only component: makes self-scoring multiple-choice questions in course
// content interactive. Markup convention (raw HTML in Markdown content):
//
//   <div class="mcq">
//   <p class="mcq-q">Question?</p>
//   <button class="mcq-option" type="button" data-correct="true">Right option</button>
//   <div class="mcq-fb">Why it's right.</div>
//   <button class="mcq-option" type="button">Wrong option</button>
//   <div class="mcq-fb">Why it's wrong (elaborative).</div>
//   </div>
//
// Clicking an option reveals its feedback and marks it correct/incorrect.
// Exploratory (not locked) so learners can read the feedback on every option.
// Styles live in quartz/styles/custom.scss (.mcq / .mcq-option / .mcq-fb).
// Included once via the page layout so the delegated listener is attached
// site-wide and survives SPA navigation.
const Mcq: QuartzComponent = () => null

Mcq.afterDOMLoaded = `
(function () {
  if (window.__mcqBound) return;
  window.__mcqBound = true;
  document.addEventListener('click', function (e) {
    const opt = e.target.closest('.mcq-option');
    if (!opt) return;
    const mcq = opt.closest('.mcq');
    if (!mcq) return;
    const correct = opt.getAttribute('data-correct') === 'true';
    opt.classList.add('chosen', correct ? 'correct' : 'incorrect');
    const fb = opt.nextElementSibling;
    if (fb && fb.classList.contains('mcq-fb')) {
      // aria-live so the revealed verdict + feedback is announced to screen
      // readers; correct/incorrect is otherwise conveyed only by colour/CSS
      fb.setAttribute('role', 'status');
      fb.setAttribute('aria-live', 'polite');
      if (!fb.dataset.verdictAdded) {
        fb.dataset.verdictAdded = 'true';
        const verdict = document.createElement('span');
        verdict.className = 'sr-only';
        verdict.textContent = correct ? 'Correct. ' : 'Incorrect. ';
        fb.prepend(verdict);
      }
      fb.classList.add('show');
    }
    mcq.classList.add('attempted');
  });
})();
`

export default (() => Mcq) satisfies QuartzComponentConstructor
