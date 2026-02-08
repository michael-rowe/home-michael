---
title: "Newsletter: January 2026 Update"
description: "A summary of recent site updates and some behind-the-scenes context."
date: 2026-01
type: newsletter
status: draft
---

> [!info] Project Status
> This site was launched just over two months ago as a home for **Emergent Scholarship**. Since then, it has been under aggressive development—not just in terms of the content being published, but in the evolution of the site's architecture and the frameworks that support it. This update captures the significant velocity of the past 30 days.

> [!tip] Subscriber Context
> [Write 1-2 paragraphs here about the 'Why' behind this month's work.]

## Project updates


### Posts
- [[2026-01-29-AI-and-evaluative-judgement|AI and evaluative judgement: Cultivating taste in the age of capability]] (2026-01-29): As AI makes creation and curation trivially easy, evaluative judgement about what should exist becomes the primary human contribution.
- [[2026-01-29-AI-for-learning-at-scale|AI for learning at scale: Why I'm optimistic]] (2026-01-29): Despite the ethical concerns, generative AI represents an enormous opportunity for learning at scale. Here's why I'm optimistic.
- [[2026-01-29-essays-as-scholarship|Essays as scholarship]] (2026-01-29): The peer-reviewed article dominates academia, but essays deserve recognition as scholarship—enabling exploration and synthesis that formal research cannot.
- [[2026-01-28-AI-meeting-scribes-organisational-memory-new-governance|AI meeting scribes, organisational memory, and new governance structures]] (2026-01-28): AI meeting scribes have automated the control of organisational memory, making existing power dynamics more powerful and less visible.
- [[2026-01-27-what-does-scholarship-sound-like|What does scholarship sound like?]] (2026-01-27): Audio scholarship—podcasts, dialogues, oral histories—deserves recognition as legitimate scholarly work. The format matters less than the quality of thinking.
- [[2026-01-17-thoughtful-AI-use-a-better-game|A better game: Thoughtful AI use over performative critique]] (2026-01-17): Rather than cataloguing AI's failures, demonstrate thoughtful use, critique from practice, and amplify what matters to you.

### Notes
- **[[AI literacy|AI literacy]]** (2026-01-29): AI literacy is a multidimensional capability spanning recognition, critical evaluation, functional application, creation, ethical awareness, and contextual judgement—not reducible to any single dimension.
- **[[qualifications for AI literacy|Qualifications for AI literacy]]** (2026-01-29): Any claim that a course or programme of study develops AI literacy requires important qualifications—literacy develops through sustained practice, is developmental and contextual, and cannot be fully assessed at course completion.




## Behind the Scenes: Site & Infrastructure



### Remove legacy cruft and unused Quartz upstream files

- Delete stray 'sudo' file (accidental commit from failed curl install)
- Remove docs/ directory (upstream Quartz documentation, not project content)
- Remove unused GitHub workflows that only run on jackyzha0/quartz
- Remove GitHub templates (FUNDING.yml, issue templates, PR template)
- Remove Dockerfile (not used for deployment)
- Remove broken 'docs' and unused 'profile' scripts from package.json

### Swap theme toggle icons to show action not state

Also add target audience (health professions educators) to CLAUDE.md
and create note template with audience reminder.

### Consolidate AI/prompt/context notes with academic framing

- Merge prompt engineering atomic notes into single concept note
- Merge context engineering atomic notes into single concept note
- Create new concept notes: graphRAG, knowledge graph, multi-hop reasoning
- Add academic/scholarly framing to all notes (applications, implications)
- Remove redundant "context engineering for academics" stub
- Add AIAS critique to bitter lesson post
- Link prompt engineering implications to AI literacy course

### Restructure homepage and enhance navigation

- Rewrite homepage with personal voice and cleaner structure
- Add icons to homepage headings (pencil, star, compass)
- Move Recent posts component to left sidebar on homepage
- Add Browse dropdown menu to top navigation
- Fix ContextualNav to handle category as string or array
- Add tip callouts with key claims to all posts
- Update post frontmatter to template format

### Add bitter lesson for higher education post and media icons

New post exploring how AI has exposed the limitations of artifact-based
assessment in higher education, drawing parallels to Rich Sutton's
observations about AI research.

### Add related frontmatter and category support to Posts navigation

Enhance ContextualNav for Posts to support explicit related links via
frontmatter field (can link to Essays, Notes, or any content type) and
automatic category-based matching. Falls back to tag matching if neither
explicit nor category matches exist.

### Hide Introduction and Conclusion from course module list

These are still accessible via sidebar navigation and Start Course button,
but no longer clutter the main module outline display.

### Apply style guide to AI literacy course lessons

Update all 11 lessons plus introduction and conclusion:
- Convert lesson overviews to callout format with Objective, Summary, Key habits
- Add opening quotes after first heading in each lesson
- Fix callout syntax throughout (add > prefix)
- Remove progress markers and horizontal dividers
- Convert HTML details elements to Quartz callouts
- Format key takeaways as bolded bullet points
- Add commitment sections with reflection prompts
- Apply British spelling consistently
- Clean up resources format

### Update About and Contact pages with personal information

- Add personal bio and research focus to About page
- Add online profiles (Google Scholar, LinkedIn, GitHub)
- Replace contact placeholder with web3forms contact form
- Update page formatting and structure

### Update course statuses from Coming Soon to Published

- Career development: Coming Soon → Published
- Email management: Coming Soon → Published
- Information management: Coming Soon → Published
- Note-taking: Coming Soon → Published

AI Literacy remains as In Development.
Time management already Published.

### Consolidate AI literacy course landing page

- Enhance index.md with comprehensive course information from landing page.md
- Add detailed lesson descriptions with time estimates
- Include 6 dimensions of AI literacy explanation
- Add learning approach and outcomes sections
- Remove sales-focused content (pricing, testimonials, FAQs)
- Delete landing page.md sales funnel
- Keep index.md as clear, informative course overview

This resolves duplicate AI literacy courses appearing on Courses page.

### Remove duplicate course folders with backslashes in names

- Delete duplicate AI literacy folder with backslashes (3 files)
- Delete duplicate Information management folder with backslashes (6 files)
- Retain correct folders: AI literacy and Information management
- Reduces build from 102 to 93 files

### Update course content and site components

- Update all AI literacy course lessons with refined content
- Update career development, email management, info management, note-taking, and time management courses
- Remove deprecated course update files and product descriptions
- Add new components: AILiteracyNav, NotesByTag, NotesGrid
- Enhance ContextualNav, CourseGrid, and MobileNav components
- Update layout configuration and folder content rendering
- Add new content: AI literacy index, prompt engineering notes
- Remove outdated book structure templates

### Implement comprehensive site navigation and content improvements

Navigation System:
- Add three-tier hierarchical navigation (TopNav, ContextualNav, TOC)
- Create mobile navigation with burger menu and slide-in drawer
- Implement responsive navigation that adapts to different sections
- Add scrollable left sidebar for long content lists
- Fix chapter/lesson numbering to display inline with titles

Course Features:
- Create CourseGrid component with visual course cards
- Add course cover images, status badges, and metadata
- Implement "Start Course" button on course landing pages
- Add Next/Previous lesson navigation with styled cards
- Auto-sort courses by status (Published first)

Book Features:
- Create Book landing page with floating cover placeholder
- Display chapter descriptions from frontmatter
- Show chapter list with titles, subtitles, and descriptions
- Remove date information from chapter display

Site-wide Updates:
- Replace footer with Creative Commons Attribution 4.0 license
- Reduce tag font size and remove bold formatting
- Disable link preview popovers
- Update course and book navigation to use YAML frontmatter fields
- Hide automatic folder listings where custom components are used

### Add CourseGrid component for visual course landing page

- Create CourseGrid component to display courses as visual cards
- Automatically scans for course folders and landing pages
- Displays course cover images, titles, descriptions, and metadata
- Supports status badges (Published, In Development, Coming Soon)
- Falls back to placeholder icon if no cover image specified
- Responsive grid layout (cards on desktop, single column on mobile)
- Add index/landing pages for all courses with frontmatter:
  - title, description, cover, status, duration, level
- Conditionally render CourseGrid only on Courses/index page
- Cards have hover effects and link to full course pages

Course metadata structure:
```yaml
---
title: "Course Title"
description: "Short description for card"
cover: "assets/course-covers/image.jpg"
status: "Published" | "In Development" | "Coming Soon"
duration: "4-6 hours"
level: "Beginner" | "Intermediate" | "Advanced"
---
```

### Use chapter_number field from frontmatter for book navigation

- Change from 'chapter' to 'chapter_number' to match existing frontmatter
- Updates both MobileNav and ContextualNav components
- Chapter numbers now display correctly in navigation menus
- Chapters sort numerically by chapter_number instead of alphabetically

The book chapters already had chapter_number in their frontmatter,
but the code was looking for a field called 'chapter'.

### Fix mobile navigation layout and TOC generation

- Change mobile breakpoint from 768px to 800px to match Quartz's base styles
- Add more specific CSS selector with !important to force hide sidebars on mobile
- Rewrite TOC generation to read directly from article headings instead of
  copying from desktop TOC (which is hidden on mobile)
- Add heading level indentation to mobile TOC
- Remove anchor icons from TOC entries

Fixes:
- Left sidebar no longer displays next to page title on mobile
- Table of contents now appears in mobile menu for essays, lessons, and other content
- All navigation panels now stack properly in mobile view

### Redesign mobile navigation with hierarchical menu on right side

- Move burger menu button from left to right side of screen
- Menu now slides in from right instead of left
- Hide both left and right sidebars on mobile
- Implement hierarchical navigation structure:
  1. Site Navigation (top) - Book, Courses, Essays, etc.
  2. Section Navigation (middle) - Contextual based on current page:
     - Essays: Recent essays
     - Posts: Recent posts
     - Notes: Related notes
     - Book: Chapter list
     - Courses: Lesson list
  3. Page Navigation (bottom) - Table of contents when available
- Auto-populate TOC from desktop version via JavaScript
- Clear visual sections with separators
- Improved touch targets and spacing

Fixes sidebar layout conflicts and provides complete navigation
hierarchy in one unified menu on mobile devices.

### Add responsive mobile navigation with burger menu

- Create MobileNav component with slide-in menu drawer
- Add burger menu button (hamburger icon) visible only on mobile
- Hide TopNav and sidebars on mobile, show MobileNav instead
- Implement touch-friendly navigation with close button and overlay
- Add smooth slide-in/out animations for menu
- Prevent body scrolling when mobile menu is open
- Auto-close menu on link clicks and page navigation
- Mobile breakpoint set at 768px

### Add hierarchical navigation system with top menu and contextual sidebars

- Add TopNav component for horizontal site navigation
- Add ContextualNav component for section-specific left navigation
- Create Contact and Newsletter pages
- Update navigation styling: remove background highlights, add link colors
- Essays section shows 5 most recent essays
- Posts section shows recent posts
- Notes section shows related/linked notes
- Book section shows chapters with optional numbering
- Courses section shows lessons when viewing a course
- Remove grey background from all internal navigation links

### Configure Umami analytics and Giscus comments

- Switch from Plausible to Umami analytics
  - Add Giscus comments to content pages
  - Update baseUrl for GitHub Pages
  - Add course landing pages and lesson YAML metadata
  - Create Courses index page
  - Add CLAUDE.md documentation

### Setup Quartz site with GitHub Pages deployment

- Add content structure (Book, Courses, Essays, Notes, Posts)
- Add about page
- Configure GitHub Actions workflow for deployment
- Update site configuration for emergent-scholarship

🤖 Generated with [Claude Code](https://claude.com/claude-code)


## Current Reflections

[Placeholder: Add any additional notes, resources you're finding useful, or questions you're asking the audience.]

---

*This draft was auto-generated from the site's project history to serve as a starting point.*
