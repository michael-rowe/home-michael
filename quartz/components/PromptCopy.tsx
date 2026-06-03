import { QuartzComponent, QuartzComponentConstructor } from "./types"

// Behaviour-only component: wires up copy-to-clipboard buttons for prompt blocks
// used in course content. Markup convention (in Markdown/HTML content):
//
//   <div class="prompt-block">
//   <button class="prompt-copy" type="button" aria-label="Copy prompt to clipboard">Copy</button>
//   <pre><code>...the prompt...</code></pre>
//   </div>
//
// Styles live in quartz/styles/custom.scss (.prompt-block / .prompt-copy).
// Renders nothing; included once via sharedPageComponents so the delegated
// listener is attached site-wide and survives SPA navigation.
const PromptCopy: QuartzComponent = () => null

PromptCopy.afterDOMLoaded = `
(function () {
  if (window.__promptCopyBound) return;
  window.__promptCopyBound = true;
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.prompt-copy');
    if (!btn) return;
    const block = btn.closest('.prompt-block');
    const code = block && block.querySelector('code');
    if (!code || !navigator.clipboard) return;
    navigator.clipboard.writeText(code.innerText).then(function () {
      const original = btn.getAttribute('data-label') || btn.textContent;
      btn.setAttribute('data-label', original);
      btn.textContent = 'Copied';
      btn.classList.add('copied');
      setTimeout(function () {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 1500);
    });
  });
})();
`

export default (() => PromptCopy) satisfies QuartzComponentConstructor
