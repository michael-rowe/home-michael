---
title: Six principles for using AI well in health professions education
type: post
description: "Most AI guidance settles whether AI may be used, who is accountable, and what must be declared. Almost none of it says what competent use actually consists of. These six principles describe the craft rather than the permission: supplying what the system cannot know, staying inside what you can evaluate, weighting your attention to what failure costs, forming a position before you consult, placing oversight where judgement binds, and building for AI that is already present. Each one has to rule something out, so each comes with the failures it names."
meta-description: "Six AI principles for health professions education: what competent use consists of, not whether AI is permitted."
keyphrase: AI principles for health professions education
author: "[[Michael Rowe]]"
date: 2026-09-08
updated: 2026-09-08
tags:
  - ai-principles
  - health-professions-education
  - ai-literacy
  - judgement
  - governance
category:
  - Education
  - Professional development
draft: true
linkedin:
---

## What this is

Six principles about how a person works with generative AI — the general-purpose systems people already use for drafting, summarising, explaining, coding and thinking, rather than AI built into a clinical device or an imaging pathway.

Nothing about them is specific to health professions education. They'd hold for a lawyer, an engineer or an accountant, because they describe how these systems behave and what working with them well requires. I've scoped them to health professions education because that's where I can write examples that are recognisable rather than invented, and because the stakes there are unusual: students are building capabilities they'll later be trusted with, and the work of building them is exactly the work these systems can do instead.

They leave out the questions most AI guidance covers. Whether AI should be used at all, who is accountable when it goes wrong, what patients must consent to, how a system should be procured: professional codes and existing guidance handle all of that. What none of it covers is what competent use consists of.

## Who it's for

Students, educators and researchers in health professions education, and clinicians who teach. The same six apply across all of them, because the craft doesn't change when the setting does. What a researcher does badly when screening a literature search is what a student does badly when asking for feedback on a management plan.

They're written to work in a programme with a site licence and in a programme where people are using free tools on their own phones.

## What I mean by a guiding principle

A guiding principle is a durable, non-binding statement of what to achieve or protect, which constrains action without specifying it, and which someone can use to decide a case nobody anticipated when it was written.

A rule settles the cases you thought of. A platitude settles none, which is why "be transparent" survives every review and changes nothing. A principle earns its place when a person facing a situation you never imagined can reason from it to an answer, and would have reached a different answer without it.

One test follows from that: a principle has to rule something out. If you can't describe what breaking it looks like, using a practice a reasonable professional currently follows, it isn't a principle. The examples under each of the six are failures for that reason.

---

## 1. Supply what the system cannot know

**Give the system the particulars of your situation before asking it to reason about your situation.**

These models answer for a typical case. They have no access to what makes yours different, they won't ask, and a question stripped of its circumstances returns an answer built for circumstances that aren't yours. What comes back is fluent and internally consistent, and nothing in it is obviously false. It's about someone else.

**In practice.** Keep a short written context block for work you do repeatedly, covering setting, population, constraints and purpose, and open with it rather than rebuilding it from memory each time. Writing it down also means a colleague can check what context you supplied.

**Students**

- Asking for feedback on a management plan without mentioning that the patient is eighty-two, lives alone up a flight of stairs, and has already waited eleven weeks, then acting on a plan written for a patient who doesn't exist.
- Revising from material weighted towards whichever health system dominates the training data, because the module outcomes and the assessment format were never supplied.

**Educators**

- Generating case scenarios that couldn't occur in your health system, because local epidemiology, service configuration and scope of practice were never specified.
- Producing a rubric that describes a generic graduate rather than the one your programme is accountable for, because the programme's own progression expectations were left out.

**Researchers**

- Receiving an analytic approach that ignores students being nested in cohorts, sites and placement blocks, and looks entirely competent doing it.
- Screening against inclusion criteria loose enough that the system fills in its own, which makes the decisions unreproducible in a way no reader can detect.

---

## 2. Don't ask a question whose answer you can't evaluate

**Work at the edge of your competence, not past it.**

How good the output is has nothing to do with how confident it sounds, so your ordinary reading instincts don't help. A weak argument still looks weak, but a fabricated reference looks exactly like a real one, and a plausible wrong method looks like a plausible right one. Without some means of checking, you aren't getting a poor signal. You're getting none.

**In practice.** Before delegating anything, say how you'd detect an error in what comes back. Where there's no answer, you can build the competence, borrow it from someone who has it, or do the task yourself.

**Students**

- Asking for a differential on a presentation you've never encountered, with no basis for judging what returns.
- Keeping a citation you never traced, since the fabricated one is indistinguishable from the real one on the page.

**Educators**

- Filling a curriculum gap in a clinical area you don't teach, where the errors are the ones you can't see.
- Setting AI-permitted tasks without ever requiring students to say how they'd know the output was wrong.

**Researchers**

- Choosing a statistical or analytic approach you couldn't defend in review.
- Accepting a synthesis of literature from outside your field, which means accepting a judgement about what matters that you have no way to check.

---

## 3. Weight your involvement to what failure costs

**Let the consequences of being wrong decide both whether to delegate and how hard to check.**

Two questions settle it. Would an error be visible, and could it be undone? Work that fails cheaply and obviously can be handed over with a light check. Work that fails silently, or that can't be reversed once it's done, needs your attention whether or not it feels important. Most people check the things that feel weighty and skip the things that carry the risk.

**In practice.** Sort tasks on those two questions and check hardest where the answer to both is no. This rations scarce attention, so it's more useful where time and staffing are thin, not less.

**Students**

- Checking everything to the same standard, then abandoning checking altogether within a fortnight.
- Delegating the reasoning the task exists to build, because that's the most tedious part of it.

**Educators**

- Finding an error in a rubric at moderation, after it has already reached a whole cohort.
- Spending scarce verification effort on timetables and slide decks while assessment items go unchecked.

**Researchers**

- Extraction errors that never surface, because nothing was checked back against source.
- Coding decisions applied to a qualitative dataset you can no longer reconstruct.

---

## 4. Form your own position before you consult

**Write down what you think before you ask.**

Once you've read the output you can't recover what you'd have thought, and you won't notice that you can't. Your judgement afterwards feels like your own while being a revision of something you never wrote down. For a student that means never finding out what they can do unaided. For an experienced clinician or researcher it means losing the ability to tell a real objection from the system agreeing with the framing they supplied.

**In practice.** Write your answer down, dated, before the first query, and keep it. The distance between that and where you finished is the only record you'll have of what the system contributed.

**Students**

- Opening the task with the query, so no record exists of what you'd have thought.
- Never finding out what you can do unaided, and neither does your supervisor.

**Educators**

- Losing reasoning you already had, because preparing teaching felt like administration rather than practice.
- Setting tasks where the tools are available from the first minute, so no independent position ever exists to compare against.

**Researchers**

- Being unable to distinguish a real objection from a restatement of your own assumptions.
- Interpretations that drift towards the first output, with no dated record of the alternative you began with.

---

## 5. Put the human where judgement binds

**Place oversight where a decision turns on it, not evenly across a process.**

Oversight spread uniformly is expensive, and it produces false assurance, because a checkpoint nobody engages with still appears in the record as though someone did. It also uses up the attention needed at the points where a person's judgement is the only thing that can settle the question: whether a student is ready, whether a finding holds, whether this patient needs referral.

**In practice.** For every human checkpoint in a process, state which decision it changes and when it last changed one. Remove the ones with no answer and put the time into the ones that do.

**Students**

- Supervision time spent documenting tool use rather than on readiness and referral decisions.
- Entrustment inferred from the absence of objection rather than decided and stated.

**Educators**

- Declaration forms attached to every submission that nobody reads, which produce delay, noise and a record that isn't true.
- Verification effort spread evenly, so moderation receives the same attention as scheduling.

**Researchers**

- Dual screening ten thousand titles while the two hundred that matter get a single pass.
- Ethics and governance checkpoints retained after years of never changing a decision.

---

## 6. Assume presence, not permission

**Build for AI that's already in the environment.**

Most policy in this area assumes a moment of choosing: someone decides to use AI, and consent, disclosure and permission attach to that moment. For a growing number of people there is no such moment. AI is in the literature search, the electronic record, the reference manager, the transcription service and the keyboard, and it arrived without anyone in the programme deciding anything. Governance written for the first situation teaches people that the rules don't describe their world, which costs it authority on everything else it says.

**In practice.** List where AI already sits in the systems you and your students use without anyone having chosen it. That list is the real scope of any policy you write, and it's usually longer than the policy assumes.

**Students**

- Being required to declare that no AI was used, which asks for a statement students can't make truthfully.
- Meeting a first patient who arrives with an answer already, having never practised that conversation.

**Educators**

- Permission-based policy everyone knows to be unenforceable.
- Assessment that only stays informative if the tools are absent.

**Researchers**

- Declarations of no AI use that are untrue given what's embedded in reference managers, transcription and submission systems.
- Designs that assume an AI-free comparison group which no longer exists.
