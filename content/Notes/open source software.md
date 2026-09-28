---
title: Open source software
description: Software whose source code is published under a licence that lets anyone read, change, and redistribute it — and what that means for the tools an institution depends on.
meta-description: "Open source software in education: how an open licence lets an institution leave a vendor, adapt its tools, and audit software that assesses students."
aliases:
  - OSS
  - FOSS
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-28
draft: false
tags:
  - collaboration
  - educational-technology
category:
  - Technology
related:
  - "[[Notes/open access licensing]]"
  - "[[Notes/context sovereignty]]"
  - "[[Notes/GitHub]]"
  - "[[Notes/Zotero]]"
  - "[[Notes/plain text]]"
keyphrase: "open source software in education"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] The value of open source lies in the control its makers give up
> Open source software publishes its source code under a licence that lets anyone inspect it, change it, and pass it on. The practical consequence for an institution is that the software can outlive its vendor, be adapted to local needs, and be checked rather than trusted.

## Open source software

**One-sentence definition:** Open source software is software distributed with its source code under a licence that grants the rights to study, modify, and redistribute it (Open Source Initiative, 2007).

Most software is closed: you get the compiled[^compiled] program and a licence to run it, and the code that makes it work stays with the company. Open source inverts that: the code is public, and the licence — GPL, MIT, Apache, and a handful of others — says what you may do with it. Raymond's *The cathedral and the bazaar* (2000) is the classic account of how a community working in the open can produce better software than a firm working in private; Stallman's essays (2002) make the older, more political case that users have a right to control the software they depend on.

The infrastructure behind almost everything runs on open source: Linux on servers, Python and R for research, [[Notes/git|Git]] for version control, the compilers and libraries behind commercial products. Moodle, a virtual learning environment, is open source, and so is [[Notes/Zotero|Zotero]], the reference manager. This site is built with Quartz, an open source static site generator,[^ssg] and edited in [[Notes/Obsidian|Obsidian]], which isn't.

### Exit, adaptation, and audit

- **The exit is real.** When a vendor is bought, raises prices, or discontinues a product, an institution running closed software has to migrate. With open source, the code stays available; someone else can maintain it, or you can.
- **You can change it.** A learning platform that nearly does what a programme needs can be made to do it, and the change can be shared. Moodle's plugin directory works this way: an extension one institution writes for its own teaching is there for others to install. Avila et al. (2016) built an e-portfolio for undergraduate medical education on WordPress because commercial systems were costly and didn't fit the institution's needs. Closed software can be configured; it can't be fixed.
- **You can look.** An assessment tool that makes decisions about students can be audited when its code is open. That matters more as software starts to include AI components, and it's why the argument over what "open source AI" should mean (Wiley, 2024) is worth following: a model released with weights[^weights] but without training data is open in a narrower sense than the term used to carry.

### What open doesn't give you

Open source isn't free of cost. Someone has to host, maintain, secure, and update it, and if that's an already-stretched IT team the closed product with a support contract can be the cheaper choice. Open code doesn't guarantee a living project either. Belshaw (2022) offers a useful typology of how open source communities grow and stall; the healthy ones have governance as well as code, and governance is the part institutions underestimate when they adopt open source software.

Openness of code also says nothing about openness of data: a closed source tool can still let you export everything, and an open source one can still lock your material in a bespoke format, so when you choose a tool it pays to ask about the code and the data separately.

---

## Sources

- Open Source Initiative. (2007). *The open source definition* (Version 1.9). https://opensource.org/osd
- Raymond, E. S. (2000). *The cathedral and the bazaar*. http://www.catb.org/esr/writings/cathedral-bazaar/
- Stallman, R. M. (2002). *Free software, free society: Selected essays of Richard M. Stallman*. GNU Press. https://www.gnu.org/philosophy/fsfs/rms-essays.pdf
- Avila, J., Sostmann, K., Breckwoldt, J., & Peters, H. (2016). Evaluation of the free, open source software WordPress as electronic portfolio system in undergraduate medical education. *BMC Medical Education*, *16*, 157. https://doi.org/10.1186/s12909-016-0678-1
- Belshaw, D. (2022, September 27). How open source communities are evolving. *We Are Open Co-op*. Archived at https://web.archive.org/web/20260210155004/https://blog.weareopen.coop/how-open-source-communities-are-evolving/
- Wiley, D. (2024, May 16). Toward a definition of open source AI. *Improving Learning*. https://opencontent.org/blog/toward-a-definition-of-open-source-ai/

[^compiled]: **Compiled** — turned from the human-readable source code a programmer writes into machine instructions a computer runs directly. A compiled program works, but reading it to see how it works is close to impossible, which is why having the source matters. [Wikipedia](https://en.wikipedia.org/wiki/Compiler)
[^ssg]: **Static site generator** — a program that turns a folder of text files into a finished website in one go, so there's no database or server-side software to run. Quartz takes the [[Notes/markdown|Markdown]] notes this site is written in and produces the pages you're reading. [Wikipedia](https://en.wikipedia.org/wiki/Static_site_generator)
[^weights]: **Weights** — the billions of numbers a language model learns during training, which together encode what it does. Releasing the weights lets anyone run the model; without the training data, nobody can see or reproduce how it came to behave as it does. [Wikipedia](https://en.wikipedia.org/wiki/Open-source_artificial_intelligence)
