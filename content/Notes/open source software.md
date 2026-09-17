---
title: Open source software
description: Software whose source code is published under a licence that lets anyone read, change and redistribute it — and what that means for the tools an institution depends on.
aliases:
  - OSS
  - FOSS
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-17
draft: false
tags:
  - collaboration
category: Scholarship
related:
  - "[[Notes/open-access-licensing]]"
  - "[[Notes/context-sovereignty]]"
keyphrase: "collaborative development in education"
linkedin:

---

> [!info] Open source means the recipe is public, not just the meal
> Open source software publishes its source code under a licence that lets anyone inspect it, change it and pass it on. The practical consequence for an institution is that the software can outlive its vendor, be adapted to local needs, and be checked rather than trusted.

## Open source software

**One-sentence definition:** Open source software is software distributed with its source code under a licence that grants the rights to study, modify and redistribute it, as defined by the Open Source Initiative.

Most software is closed: you get the compiled program and a licence to run it, and the code that makes it work stays with the company. Open source inverts that. The code is public, and the licence — GPL, MIT, Apache and a handful of others — says what you may do with it. Raymond's *The cathedral and the bazaar* (2000) is the classic account of how a community working in the open can produce better software than a firm working in private; Stallman's essays (2002) make the older, more political case that users have a right to control the software they depend on.

The infrastructure behind almost everything runs on open source: Linux on nearly every server, Python and R for research, Git for version control, the compilers and libraries behind commercial products. This site is built with Quartz, an open source static site generator, and edited in Obsidian, which is not.

### Why it matters in education

- **The exit is real.** When a vendor is bought, raises prices or discontinues a product, an institution running closed software has to migrate. With open source, the code stays available; someone else can maintain it, or you can. Avila et al. (2016) evaluated WordPress as an e-portfolio platform in undergraduate medical education partly on those grounds.
- **You can change it.** A learning platform that nearly does what a programme needs can be made to do it, and the change can be shared. Closed software can be configured; it can't be fixed.
- **You can look.** An assessment tool that makes decisions about students can be audited when its code is open. That matters more as software starts to include AI components, and it's why the argument over what "open source AI" should mean (Wiley, 2024) is worth following: a model released with weights but without training data is open in a narrower sense than the term used to carry.

Belshaw (2022) offers a useful typology of how open source communities grow and stall; the healthy ones have governance, not just code, which is the part institutions underestimate when they adopt.

### What it doesn't guarantee

Open source is not free of cost. Someone has to host, maintain, secure and update it, and if that's an already-stretched IT team the closed product with a support contract can be the cheaper choice. Openness of code also says nothing about openness of data: a closed-source tool can still let you export everything, and an open-source one can still lock your material in a bespoke format. Ask both questions.

---

## Sources

- Open Source Initiative. The open source definition. https://opensource.org/osd
- Raymond, E. S. (2000). *The cathedral and the bazaar*. http://www.catb.org/esr/writings/cathedral-bazaar/
- Stallman, R. M. (2002). *Free software, free society: Selected essays of Richard M. Stallman*. GNU Press.
- Avila, J., Sostmann, K., Breckwoldt, J., & Peters, H. (2016). Evaluation of the free, open source software WordPress as electronic portfolio system in undergraduate medical education. *BMC Medical Education*, 16, 157.
- Belshaw, D. (2022). How open source communities are evolving. https://dougbelshaw.com/blog/
- Wiley, D. (2024). Toward a definition of open source AI. *improving learning*. https://opencontent.org/blog/
