---
title: Accessibility
description: What I've done to make this site accessible, where it falls short, and how to report a problem.
enableToc: false
---

I'm committed to making this site accessible to as many people as possible, regardless of ability or technology.

## Standards

This site aims to conform to [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) Level AA guidelines. I can't guarantee full compliance, but I look for accessibility problems and fix them as I find them.

## What I've implemented

**Structure and navigation:**
- Semantic HTML (headings, landmarks, lists) for screen reader navigation
- Keyboard-accessible navigation throughout the site
- Skip links and logical focus order
- Consistent navigation across pages
- Breadcrumbs for orientation

**Visual design:**
- Sufficient colour contrast between text and backgrounds
- Text resizes without loss of functionality
- Dark mode support (respects system preference)
- Reader mode for distraction-free reading
- No content that flashes or strobes

**Content:**
- Descriptive link text (not "click here")
- Alt text for informational images
- Transcripts or descriptions for embedded media where possible
- Clear, plain language

**Technical:**
- Works without JavaScript for core content
- Responsive design for all screen sizes
- No auto-playing media

## Known limitations

- **Graph view:** The interactive graph visualisation may be difficult to use with screen readers or keyboard alone. It's supplementary, and all content can be reached through standard navigation.
- **Some embedded content:** Third-party embeds (videos, diagrams) may have their own accessibility limitations outside my control.
- **Older images:** Some images may lack alt text, and I'm adding descriptions as I go.
- **PDF documents:** Any linked PDFs may not be fully accessible. I aim to provide HTML alternatives where possible.

## How I test

- Manual keyboard navigation testing
- Browser accessibility inspection tools
- Automated testing with axe and Lighthouse
- Testing with system dark mode and text scaling

The site isn't currently tested by people who use assistive technologies, so if you use one and run into problems, your feedback is especially useful.

## Feedback

If you encounter any accessibility barriers on this site, please [[contact|contact me]]. Include:

- The page URL where you encountered the issue
- A description of the problem
- The assistive technology you were using (if applicable)

I'll work to fix any problem you report as quickly as I can.

## Continuous improvement

Accessibility is ongoing work. I review the site as I add new content and as I learn more about inclusive design.

---

*Last updated: October 2026*
