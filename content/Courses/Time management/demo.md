---
title: "Interactive Elements Demo"
---

# Interactive Elements Demo

This demo shows two main approaches for creating interactive content in Quartz, plus a special comparison layout for before/after scenarios.

---

## Approach 1: Quartz Callouts (Collapsible Sections)

Quartz has built-in support for collapsible callouts using the `[!type]-` syntax.

### Example: Practical Examples Section

> [!example]- Early Career Academic
> **High-value tasks:**
> - Writing first grant proposal
> - Developing two research papers from PhD
> - Creating teaching materials for a new module
>
> **Important but not urgent:**
> - Reviewing department teaching materials
> - Contributing to curriculum review
> - Attending faculty development workshops
>
> **Routine tasks:**
> - Responding to student emails
> - Weekly team meetings
> - Administrative paperwork
>
> **Applying task classification:**
> - Use Friday mornings for strategic planning
> - Block 7-9am for writing before campus gets busy
> - Batch student emails into two daily slots
> - Schedule meetings in the afternoon when energy is lower

> [!tip]- Energy Mapping Exercise
> The purpose of this energy mapping exercise is to help you work within fixed hours by identifying your 3-4 hours of peak cognitive energy each day.
>
> **Instructions:**
> 1. Track your energy levels throughout the day for one week
> 2. Note when you feel most alert and focused
> 3. Identify your natural energy dips
> 4. Match high-value work to peak energy times
>
> [Download the template](#)

> [!info]- Day-Theming: Energy-Based Approach
> **High-energy mornings (08:00-12:00):** Reserve these peak hours for writing manuscripts, analysing data, or developing research proposals. When your mind is fresh, tackle work that requires creative thinking and complex problem-solving.
>
> **Social mid-day period (12:00-15:00):** Leverage your natural tendency to be more communicative during these hours. Schedule student consultations, team meetings, and collaborative work.
>
> **Administrative wind-down (15:00-17:00):** Use the natural energy dip of late afternoon for lighter tasks that still need focused attention. Process email, update your task list, or organise research notes.

---

## Approach 2: Flip Cards (Click to Flip)

These cards are narrower and use callout colors for consistency. They flip when you click on them. Perfect for myth/reality pairs and quiz-style learning content.

### Example: Time-Blocking Myths

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>MYTH</h3>
      <p>Time-blocking means every minute must be scheduled</p>
    </div>
    <div class="flip-card-back">
      <h3>REALITY</h3>
      <p>Effective time-blocking requires flexibility and breathing room. Think of time blocks as a framework, not a prison. Good time-blocking includes buffer zones for unexpected tasks, recovery periods, and spontaneous opportunities.</p>
      <p><strong>Try this:</strong> Start by blocking only your most important work (2-3 blocks per day) and include at least 30 minutes of 'buffer time' between major blocks.</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>MYTH</h3>
      <p>I need long blocks of time to make writing progress</p>
    </div>
    <div class="flip-card-back">
      <h3>REALITY</h3>
      <p>Regular, shorter sessions often produce better results than irregular marathon sessions. Consistent 30-60 minute focused blocks build momentum and maintain connection with your work.</p>
      <p><strong>Try this:</strong> Schedule three 30-minute writing blocks across the week. Use the first 5 minutes to review where you left off, then write for 20 minutes, leaving 5 minutes to note where to pick up next time.</p>
    </div>
  </div>
</div>

---

## Approach 3: Comparison Layout (Side-by-Side Before/After)

For content where learners need to compare the "before" and "after" (like open loops vs. closed loops), use a collapsible callout with a two-column comparison grid. This shows both sides at once for easy comparison.

### Example: Closing Open Loops

> [!example]- Teaching: Open vs. Closed Loops
> <div class="comparison-grid">
> <div class="comparison-column">
>
> #### Common Open Loops in Teaching
> - Student email about assignment extension waiting in inbox
> - Mental note to revise week 5 lecture content
> - Meeting notes about curriculum changes
> - Browser tabs open with potential reading materials
> - Verbal request from student for reference letter
>
> </div>
> <div class="comparison-column">
>
> #### Closing Teaching Loops
> **Quick wins (5-15 mins):**
> - Reply to student email with clear decision
> - Save and organise reading materials
> - Create task for reference letter with deadline
>
> **Medium tasks (30-60 mins):**
> - Process meeting notes into action items
> - Schedule time block for lecture revision
>
> </div>
> </div>

> [!example]- Research: Open vs. Closed Loops
> <div class="comparison-grid">
> <div class="comparison-column">
>
> #### Common Open Loops in Research
> - Notes from conference talk that might inform methodology
> - Unfinished draft of methods section sitting on desktop
> - Reviewer comments waiting for response
> - Potential collaborator's email needs follow-up
> - Data files needing backup and organisation
>
> </div>
> <div class="comparison-column">
>
> #### Closing Research Loops
> **Quick wins (5-15 mins):**
> - Move data files to secure storage
> - Send brief response to collaborator
> - Create task for reviewer response
>
> **Larger projects:**
> - Methods section: Block 3 two-hour sessions next week
>
> </div>
> </div>

---

## Comparison Summary

### Quartz Callouts (Collapsible Sections)
**Best for:** Activity instructions, practical examples, additional information

**Pros:**
- Built into Quartz, no setup needed
- Consistent styling with the rest of your site
- Multiple callout types (tip, warning, example, etc.)
- Good for longer content sections
- Clean, professional appearance

**Cons:**
- Only collapsible (not quiz-style)
- Less engaging for active recall content

### Flip Cards (Click-Based)
**Best for:** Myth/reality pairs, quiz content, active recall learning

**Pros:**
- Visually engaging and interactive
- Perfect for flashcard/quiz-style content
- Great for myth/reality or question/answer pairs
- Encourages active learning
- Click-based interaction feels intentional
- Uses callout colors for consistency
- Compact horizontal size (max 500px)

**Cons:**
- Requires custom CSS and JavaScript
- Need to use HTML in markdown
- Not ideal for content that should be compared side-by-side

### Comparison Grid (Side-by-Side Layout)
**Best for:** Before/after comparisons, open vs. closed loops, parallel information

**Pros:**
- Shows both sides at once for easy comparison
- Works inside Quartz callouts (collapsible)
- Responsive (stacks on mobile)
- Perfect for comparing related concepts
- Uses semantic structure

**Cons:**
- Requires HTML divs in markdown
- Needs custom CSS for grid layout

---

## Recommended Usage

Use the right tool for each type of content:

**Quartz Callouts** → Activity sections, practical examples, tips and warnings, additional context

**Flip Cards** → Myth/reality pairs (lesson 03), quiz-style content, active recall exercises

**Comparison Grid** → Open vs. closed loops (lesson 05), before/after scenarios, parallel concepts

This approach gives you pedagogical variety while maintaining visual consistency with the callout color scheme.

<script>
// Flip card click handler
document.addEventListener('DOMContentLoaded', function() {
  function setupFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
      });
    });
  }

  setupFlipCards();

  // Re-run on navigation (for SPA)
  document.addEventListener('nav', setupFlipCards);
});
</script>
