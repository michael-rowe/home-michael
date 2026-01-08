---
title: "Interactive Elements Demo"
---

# Interactive Elements Demo

This demo shows three different approaches for creating interactive, collapsible, and flip card content in Quartz.

---

## Approach 1: Quartz Callouts (Built-in Collapsible)

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

## Approach 2: Custom CSS Flip Cards (Hover to Flip)

These cards flip when you hover over them (or tap on mobile). Great for myth/reality pairs or flashcard-style content.

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

### Example: Closing Open Loops Flashcards

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Common Open Loops in Teaching</h3>
      <ul style="text-align: left; margin: 1rem 0;">
        <li>Student email about assignment extension waiting in inbox</li>
        <li>Mental note to revise week 5 lecture content</li>
        <li>Meeting notes about curriculum changes</li>
        <li>Browser tabs open with potential reading materials</li>
        <li>Verbal request from student for reference letter</li>
      </ul>
    </div>
    <div class="flip-card-back">
      <h3>Closing Teaching Loops</h3>
      <div style="text-align: left;">
        <p><strong>Quick wins (5-15 mins):</strong></p>
        <ul>
          <li>Reply to student email with clear decision</li>
          <li>Save and organise reading materials</li>
          <li>Create task for reference letter with deadline</li>
        </ul>
        <p><strong>Medium tasks (30-60 mins):</strong></p>
        <ul>
          <li>Process meeting notes into action items</li>
          <li>Schedule time block for lecture revision</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Common Open Loops in Research</h3>
      <ul style="text-align: left; margin: 1rem 0;">
        <li>Notes from conference talk that might inform methodology</li>
        <li>Unfinished draft of methods section sitting on desktop</li>
        <li>Reviewer comments waiting for response</li>
        <li>Potential collaborator's email needs follow-up</li>
        <li>Data files needing backup and organisation</li>
      </ul>
    </div>
    <div class="flip-card-back">
      <h3>Closing Research Loops</h3>
      <div style="text-align: left;">
        <p><strong>Quick wins (5-15 mins):</strong></p>
        <ul>
          <li>Move data files to secure storage</li>
          <li>Send brief response to collaborator</li>
          <li>Create task for reviewer response</li>
        </ul>
        <p><strong>Larger projects:</strong></p>
        <ul>
          <li>Methods section: Block 3 two-hour sessions next week</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---

## Approach 3: Native HTML `<details>` + `<summary>` (Semantic HTML)

This uses standard HTML elements that work everywhere. Simple, accessible, and semantic.

### Example: Activity Section

<details>
<summary><strong>Activity: Build Your Fixed-Schedule Foundation</strong></summary>

Today, start building your fixed-schedule foundation with these simple steps:

**Step 1: Choose your end time**
- Not shorter than your contracted hours, but not longer either
- Set this as a firm boundary for today

**Step 2: Review your tasks**
- Move anything non-essential to later in the week
- Focus only on what truly needs to happen today

**Step 3: Set an alarm**
- Set it for 10 minutes before your chosen end time
- Use this wrap-up time to help you finish gracefully

**Step 4: Process remaining tasks**
- Use this wrap-up time to quickly process remaining tasks into your calendar
- Don't try to complete everything—just capture what needs to happen next

**Step 5: Create a reminder**
- Place a sticky note on your laptop that says "Don't work at night"
- This serves as a physical commitment to your boundaries

**Bonus step:** Share your commitment to fixed hours with family or colleagues and ask them to gently help you stick to it.

</details>

<details>
<summary><strong>Activity: Week 1-4 Implementation Plan (Day-Theming)</strong></summary>

This four-week implementation plan helps you develop a sustainable day-theming practice.

**Week 1: Observe and document**
- Track your current work patterns for one week
- When are you most energetic?
- What days have fixed commitments?
- What tasks naturally cluster together?
- Note which tasks drain your energy and which energise you
- Identify your most common interruptions and urgent requests
- Document your peak productive periods

**Week 2: Design your approach**
- Review your observations and choose a day-theming style that fits your patterns
- Create initial theme assignments that work with your fixed commitments
- Identify potential challenges and develop contingency plans
- Set up calendar blocks to support your themes

**Week 3: Test and implement**
- Start with a "light" version of your chosen system—perhaps theming just 2-3 days
- Keep a brief daily note about what worked and what didn't
- Pay attention to how you handle interruptions and urgent requests
- Notice when and why you deviate from your themes

**Week 4: Reflect and refine**
- Review your implementation notes
- What patterns emerged? Which themes felt natural? Where did you struggle?
- Adjust your themes based on real-world experience
- Create a sustainable version you can maintain long-term

**Bonus:** Use your weekly review to track theme effectiveness over time.

</details>

<details>
<summary><strong>Practical Example: Mid-Career Academic</strong></summary>

**High-value tasks:**
- Supervising 4 postgraduate students
- Leading a major research project
- Writing an impact case study

**Important but not urgent:**
- Peer-reviewing papers
- Committee work
- Mentoring junior colleagues

**Routine tasks:**
- Module coordination
- Marking assignments
- Department meetings

**Applying task classification to the tasks above:**
- Use short gaps between meetings for quick tasks
- Protect Tuesday and Thursday mornings for PhD supervision
- Block Wednesdays for focused writing
- Batch routine admin into Monday afternoons

</details>

---

## Comparison Summary

### Quartz Callouts
**Pros:**
- Built into Quartz, no setup needed
- Consistent styling with the rest of your site
- Multiple callout types (tip, warning, example, etc.)
- Good for longer content sections

**Cons:**
- Only collapsible (not flip-style)
- Less visually distinctive for flashcard-style content

### Custom CSS Flip Cards
**Pros:**
- Visually engaging and interactive
- Perfect for flashcard/quiz-style content
- Great for myth/reality pairs
- Encourages active learning

**Cons:**
- Requires custom CSS
- Need to use HTML in markdown
- Fixed height (though this can be adjusted)

### Native HTML Details/Summary
**Pros:**
- Works everywhere (semantic HTML)
- No custom CSS needed
- Fully accessible
- Can contain any markdown content
- Variable height (adapts to content)

**Cons:**
- Less visually distinctive
- Basic styling only
- Similar to callouts but without the visual theming

---

## My Recommendation

Use a **combination**:
- **Flip cards** → For myth/reality pairs and open loops flashcards (lessons 03, 05)
- **Details/Summary** → For activity sections and long practical examples (all lessons)
- **Quartz Callouts** → For tips, warnings, and informational asides

This gives you visual variety while keeping the content organized and interactive.
