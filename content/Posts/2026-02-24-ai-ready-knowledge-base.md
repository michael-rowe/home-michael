---
type: post
title: Building an AI-ready knowledge base
description: A detailed account of a week-long project to restructure 5,819 Obsidian notes using AI as a working partner. The project involved building a 23-category taxonomy, migrating thousands of legacy notes to a consistent metadata structure, and generating AI-written descriptions for every note in the collection. The piece describes not just what was done, but how extended planning conversations, external project documentation, and careful human review at each phase made the work tractable. The most unexpected outcome was that building infrastructure for a note collection required articulating, for the first time, precisely how I think about my academic field.
meta-description: "How I built an AI-ready knowledge base from 5,819 unstructured Obsidian notes: five phases, ten hours, and an unexpected outcome."
keyphrase: AI-ready knowledge base
author: "[[Michael Rowe]]"
date: 2026-02-24
updated: 2026-02-24
tags:
  - personal-knowledge-management
  - note-taking
  - information-architecture
  - large-language-models
  - ai-integration
  - context-engineering
  - documentation
category:
  - Information management
  - AI and technology
draft: false
enableToc: true
reviewed:
  - writing_style
  - blog_writer
  - copy_editor
  - SEO_optimiser
slug: posts/ai-ready-knowledge-base
aliases:
  - posts/building-the-scaffold
---

> [!info] Before AI can work with your notes, you have to know what your notes mean.
> Pointing an AI at a large, unstructured note collection produces surprisingly little. The limiting factor isn't the model — it's the absence of consistent structure, vocabulary, and metadata. This is a detailed account of building an AI-ready knowledge base: five phases, about ten hours, no content changes — and an unexpected outcome that had nothing to do with AI.

This is not a tutorial. I'm not going to tell you which tools to use or give you a checklist to follow. What I want to do is describe a real project in enough detail that the texture of the work comes through — the decisions, the friction, the things that didn't work, the things that emerged unexpectedly. I think that kind of account is more useful than a polished summary of outcomes, and rarer.

I've been accumulating notes for about fifteen years. Reading responses, half-formed arguments, quotes I wanted to hold onto, observations from practice, ideas I wasn't ready to do anything with yet. For the first decade, those notes were scattered across Word documents, local folders, online services, and physical notebooks — no system, no connections between them, just accumulation. About five years ago I moved everything into [Obsidian](https://obsidian.md/), a note-taking application that stores everything as plain text files on your computer, nothing locked in a proprietary format. I started building connections between notes, adding structure, trying to turn a pile of material into something more like a collection. By early 2026 I had 5,819 notes, and I was increasingly unable to see inside what I'd built. Not because the notes were bad, but because the collection had outgrown any ability to navigate it, including my own.

The goal I had in mind was specific. I wanted to use AI as a genuine working partner with this material — not to search it or summarise it, but to use it as raw material for writing, for developing arguments, for finding connections across my field that I might otherwise miss. This is different from asking an AI to help you draft an email. It requires the model to work with your accumulated thinking, to reason across it, to retrieve relevant ideas when you're exploring a question. And it turns out that pointing a [[large language models|large language model]] at 5,819 unstructured notes is not useful in any serious way. The model can read individual notes well enough. What it cannot do is discern signal from noise across a collection with no consistent structure, no shared vocabulary, no way to filter by domain or retrieve by type. Context windows have grown large, but size alone doesn't solve the problem — without structure, a large context is just a large pile. Simply having notes is not the same as having an AI-ready knowledge base — one with consistent structure, shared vocabulary, and navigable metadata.

The project I'm going to describe was the work required to close that gap. It took about a week of intermittent sessions — perhaps ten hours in total — introduced very few changes to the content of any note, and was one of the more intellectually demanding things I've done with AI. I want to describe it in some detail because I think the details are where the useful lessons are.

## What working with a language model actually requires

Before I get into what we did, I want to say something about what working with a language model actually requires — because most accounts of AI tools skip this, and it matters for everything that follows.

When you work with a human colleague over time, you develop a model of how they think. You learn what they'll infer correctly, where they'll need more specificity, what assumptions they'll make when something is left ambiguous. You learn to pre-empt their predictable missteps by structuring your communication differently. But the benefit runs both ways. A good collaborator also pushes your thinking: they ask questions you hadn't considered, challenge assumptions you'd treated as settled, surface implications you'd missed. The collaboration sharpens both of you.

Working with a language model involves the same dynamic, with some important differences. The model's characteristics — what it handles well, where it needs precise instruction, what kinds of ambiguity it resolves badly — are more consistent and learnable than a human colleague's. You can develop reliable intuitions about how to work with it effectively. What the model won't do is accumulate understanding of you passively over time. Whatever context it has about your situation, your priorities, and your history has to be constructed deliberately and provided explicitly. A colleague who has worked with you for three years brings that history to every conversation without being asked. A language model begins each session knowing only what you have written down and shared. This is less a limitation than a design constraint — one that shapes how you need to work.

Three things follow from this that are worth understanding before taking on any extended project with AI.

First: precise instructions, including the rationale behind decisions and not just the decisions themselves, produce outputs calibrated to your actual situation. Vague instructions produce plausible but generic results. The difference in practice is considerable, and the only way to discover it is to experience it.

Second: a language model will not tell you when a task has become too complex for a single instruction to handle reliably. Ask a model to "reorganise my notes" and it will attempt something — but the gap between what you mean and what it produces may be vast, and the model won't flag that gap. Knowing this means breaking complex work into phases, reviewing outputs at each stage, and treating what the model produces as a draft to interrogate rather than a result to accept. The model is not navigating towards your goal; it is responding to what you have given it. Those are different things.

Third: the back-and-forth is not overhead. The extended conversation required to converge on a shared understanding — of the plan, of the purpose, of the distinctions that matter — is where much of the value is generated. Skipping this to get to the "real work" is a mistake. In this project, the conversations that happened before any file was touched were the most important conversations in the whole project.

## Starting conditions: 1,055 tags and a swamp

Here is what we were starting from, with numbers I didn't have until the project began.

In five years of working within Obsidian — itself an improvement on the decade before it — I had generated 1,055 unique tags. Of those, 677 appeared three times or fewer. That number is worth sitting with. It means the majority of my tags existed for essentially one note and were never used again. Tags like `steampunk`, `rodent`, `medieval`, and `gcse-resits` sit in the same inventory as `learning-theory`, `metacognition`, and `assessment-design`. Many were near-duplicates with inconsistent spelling — `organisational-culture` alongside `organizational-culture`; `generative-ai` alongside `ai` alongside `artificial-intelligence`. This is not a vocabulary or a useful taxonomy. It is a swamp.

The problem had two causes, and it is worth being honest about both. The structural cause was that tags were doing two jobs simultaneously: classifying the domain a note belonged to (learning, psychology, economics) and labelling the specific concept it addressed (spaced repetition, cognitive bias, opportunity cost). Conflating domain and concept is the root of tag proliferation — without a categorical level, every domain and every concept within every domain both become tags. But the other cause was simpler: thoughtlessness. Many tags were whatever word came to mind when I saved a note, never revisited. That is not a structural problem; it is a habit problem, and infrastructure alone cannot fix it. What infrastructure can do is make the habit less damaging going forward.

Roughly two-thirds of the notes had no metadata at all. These were notes from my first period in Obsidian, before I had any consistent system. They had no tags, no categories, no creation date — just a title and body text, and sometimes an inline `#edit` flag I had scattered through the body to remind myself the note needed attention, which I had then accumulated for years without acting on.

The newer notes had [YAML](https://yaml.org/) frontmatter — a structured block at the top of each file that contains machine-readable information about the note. YAML is not complicated; it looks like a labelled list. Here is what a well-formed note looks like after this project:

```yaml
---
title: Cognitive load theory
category: Learning
tags:
  - cognitive-load
  - working-memory
  - instructional-design
status: reviewed
needs_review: false
description: An overview of cognitive load theory and its implications for instructional design.
---
```

And here is what a note from the earlier period looked like:

```
#edit

cognitive load theory is about the amount of mental effort being used in the working memory...
```

The YAML block is what makes a note part of a system rather than an isolated document. Without it, a note exists only as text — searchable by content, but not filterable by category, not queryable by status, not distinguishable by type. With it, the collection becomes something a model can navigate: retrieve all notes in category `Assessment`, surface everything tagged `retrieval-practice`, find notes with `needs_review: true`, scan descriptions without reading full bodies. Obsidian's internal linking creates connections between notes, but structure in the frontmatter is what makes those connections navigable at scale and usable by AI systems working across the whole collection.

## Five phases, not three

The project began with what I thought was a reasonable plan: three phases. Fix the broken metadata, build a tag taxonomy, migrate the old notes.

I worked with Claude Code — a version of Claude that operates directly on your file system, reading and writing files, running automated scripts (small programmes that apply a set of instructions repeatedly across many files), and working iteratively without you needing to copy and paste anything into a chat window. We started work in February 2026.

By the end there were five phases, plus two sub-phases that hadn't existed as concepts when we began:

- **Phase 1** — mechanical fixes (broken metadata, `#edit` flags in note bodies)
- **Phase 2** — tag taxonomy and category framework
- **Phase 2b** — category assignment via domain signals
- **Phase 3** — old-epoch migration (3,866 notes with no YAML at all)
- **Phase 4a** — codex file deletion
- **Phase 4b** — duplicate merging
- **Phase 5** — description generation

Phases 4a and 4b didn't exist until Phase 3 revealed what needed handling. The codex files — a legacy format generating cluttered links throughout the collection — were invisible until we had mapped things carefully enough to see them. The duplicate clusters only surfaced once the notes had consistent enough structure to compare them systematically. I knew duplicates existed; every now and again I'd search for something and find two notes with almost the same title. When I had time I'd merge them manually, but it was tedious and usually I'd leave it. The project surfaced them all at once, which made them tractable.

You cannot know what a collection contains until you start mapping it, and the map changes as you draw it. Building a fully linear plan at the outset and following it to completion was never available. What mattered was having a living plan that could be updated as the work revealed new requirements — and a clear enough record of decisions made that each session could begin from where the last one ended.

Before the first scripts ran, I initialised a git repository in my notes folder. Git is version control software — it lets you take a named snapshot of a folder at any point in time and restore it completely if something goes wrong. Most people associate it with software development, but it works on any folder of text files, which is all Obsidian notes are. The value, and the peace of mind, when you are about to run a script that will touch 3,817 files, is considerable. Whenever I was about to make a major change, I'd make a commit — a named checkpoint I could return to. One command, and everything goes back to how it was. This is not glamorous infrastructure. It is the kind of thing that makes it possible to work without anxiety.

## External memory

The other thing that made the project possible — across a week of sessions, with a three-day break in the middle — was a set of documents in Obsidian that served as external memory for us both.

The main project file recorded every session as we went: what was done, what decisions were made and why, what was outstanding, how each script had behaved, what edge cases had appeared. But there were other files too — tag inventories, category mapping tables, review lists — that Claude and I both read and wrote to as the work developed. These weren't just records; they were working documents. I could add comments directly to them, disagree with a decision that had been made, flag something for reconsideration. Claude would read those comments in the next session and incorporate them.

When I returned after the three-day break, I didn't try to reconstruct the conversation or remember where we'd left off. I told Claude to read the project file. That was enough. The context wasn't in the chat history; it was in the documents, where it could persist across sessions, across breaks, across the gap between one conversation and the next.

There is something recursive about this worth naming. The principle that motivated the entire project — that structured, persistent information makes AI more useful — was also the method by which the project was conducted. I used structured notes to enable AI-assisted work on my structured notes. The tool and the object were the same thing. This is not a coincidence. It is what the principle looks like when you apply it seriously.

## The conversations before any file was touched

The phase that consumed the most time was not the one that touched the most files.

Before any script ran on the collection, there were hours of conversation about how to think about the notes — what they represented, how my field was structured, which distinctions mattered and why. Most people who use AI tools skip this: the extended, iterative back-and-forth required to converge on a shared understanding, not just of a plan, but of the purpose behind it. It is unglamorous work. It produces no visible output for a long time. And it is, I've come to think, the most important part of any serious AI collaboration.

The tag problem pointed toward a solution: introduce a `category` field for domain-level classification and reserve `tags` for specific concepts. This would resolve the structural conflation at source. But it required deciding what the categories were. Claude analysed the existing tag inventory and proposed an initial set of 18 categories. Most of the domain structure was there. But as we began working through the notes, five more emerged as necessary: `Communication`, `Writing`, `Productivity`, `Science`, and `Organisation`.

Each had to be argued for. That argument happened internally, not to Claude. Claude would ask why a new category needed to exist as distinct rather than being absorbed into something already on the list, and I had to answer with precision. The question sounds administrative. It isn't.

Consider the distinction between `Learning`, `Teaching`, and `Assessment` in a vault like mine, where I work in health professions education. These could all sit inside a single `Education` category — and in many systems, they would. But keeping them separate reflects a real distinction in how I think about the work: Learning is about how people learn (theory, cognitive processes, strategies); Teaching is about what educators do (pedagogy, facilitation, instructional design); Assessment is about how learning is evaluated and what that evaluation actually measures. These are different intellectual territories with different literatures, different debates, different implications for practice. Merging them would make the category less useful, not more efficient.

I knew these distinctions intuitively. I had never had to write them down, and writing them down turned out to be both harder and more useful than I expected. The clarity that the process demanded didn't feel like a byproduct of the project. It felt like the project.

The most thought-provoking of these decisions was the rename of `knowledge-management` to `information-management`. Both terms had appeared in the tag inventory, used interchangeably. The PKM community has settled on "personal knowledge management" as a label, and I'd followed that convention without thinking carefully about it. But information can be managed — captured, stored, retrieved, organised. Knowledge is something that emerges from a person's engagement with information. The vault's own naming should be precise. That is not a tidying decision. It is an epistemological one, and it only surfaced because the process required me to be exact about what each category meant.

The output of this phase was a document that didn't exist before the project began — one that Claude and I both wrote to and revised as the categorisation work developed: 23 category definitions, each with a description, a list of typical tags, and distinguishing criteria for every pair of adjacent categories that might be confused. The entry for `Learning` and `Teaching` reads:

> Learning = how people learn (theory, cognitive processes, strategies). Teaching = what educators do (pedagogy, instructional design, facilitation). A note about spaced repetition → Learning. A note about scaffolding → Teaching.

This document now governs how every new note is filed. It is machine-readable governance — a framework that future AI systems, and I, can consult when categorising new notes. It is also a written account of how I think about my field, which neither of us could have produced without the pressure the process applied.

## When scripts meet reality

With the framework in place, the scripted work could begin. The rhythm throughout was the same: identify the problem, agree on an approach, test it on one file, discover something unexpected, refine the approach, test on a small batch, then scale up.

The first obstacle was mundane. Phase 2 required a Python script, and the script needed a software library called `pyyaml` that wasn't installed. The first attempt to install it — `sudo pip3 install pyyaml` — appeared to succeed but left nothing installed. A check confirmed the library was still missing. The fix was simple: drop `sudo` entirely. `pip3 install pyyaml` installed correctly. This kind of thing — an obstacle that is frustrating for fifteen minutes and trivial in retrospect — happened throughout the project. I mention it not because it is interesting but because it is representative.

Nothing in a project like this works exactly as expected on the first attempt. Claude was indispensable for diagnosing these problems: not just this one, but every script failure that followed. Scripts failed regularly — sometimes on the first run, sometimes after running correctly on small batches and then hitting an unexpected edge case on the full collection. The fact that Claude was planning, writing, running, evaluating, and iteratively fixing code is remarkable. I wrote none of it.

The more revealing early test was the single-file dry run — the practice of running every script on one file before applying it to hundreds or thousands. When Phase 2's script was run on a note called `AI as external witness to thinking.md`, it proposed assigning `category: Learning` because `learning` appeared in the note's tags and was the first category-mapped tag encountered. The problem: the note's remaining tags — `artificial-intelligence`, `machine-learning`, `language-model` — pointed clearly toward Technology. The script had done exactly what it was told. The result was wrong in a way any reader would catch immediately.

This surfaced a genuine design question. Could the script read the note's content and use an AI model to determine the right category? Technically yes — but at the scale of 1,953 notes with YAML frontmatter, that meant 1,953 separate calls to an external AI service (an API call: a programmatic request to a model that returns a response, billed per use). Beyond the cost, there was a more fundamental issue: mechanical categorisation is fast, consistent, and auditable. A model making content-aware judgements introduces a different kind of uncertainty — it might be wrong, in a different way each time, with no systematic way to detect patterns in the errors.

The solution was a hybrid: script the mechanical majority, detect ambiguous cases algorithmically, and route them to a targeted human review. Two mechanisms were added to the script: a flag for notes whose tags pointed to multiple different categories, and a tension detector that flagged notes where the assigned category seemed mismatched with the weight of the remaining tags. Both types were written to a review file rather than processed automatically.

The most interesting discovery during Phase 2 came from looking carefully at a tag that had been marked for deletion. `thoughtful` appeared 21 times in the tag inventory and had been classified as a "personal sorting label, not semantic" — which seemed reasonable. But on second inspection, `thoughtful` was doing real work: it was filtering a curated view in Obsidian that surfaced a specific collection of quotes I wanted to revisit. In Obsidian you can create filtered views that show only notes matching certain criteria — think of it as a saved search that automatically updates. `thoughtful` was one of those criteria. Deleting the tag silently would have broken that view, and the script would never have flagged this. Only a careful review before applying the script caught it.

This revealed a category of tag with no existing name: tags used not to describe what a note is about, but to determine what it should be used for. The solution was a new field — `collection: thoughtful` — with the view updated to filter on the new field rather than the tag. This was not in the original plan. It emerged because the output was treated as a draft to review, not a result to accept.

The review tables that Claude generated at several points in the project are the clearest illustration of what human judgement actually contributed. Here is a short excerpt from one of them — 38 notes that resisted automated categorisation and required manual review:

| Note | Suggested | Correction |
|------|-----------|------------|
| Any fool can know. The point is to understand | Learning | |
| Bayes' law | Philosophy | |
| developing taste is time-consuming | Culture | |
| invention of the map transformed civilisation | Culture | |
| steel man argument | Communication | |
| then a miracle occurs | Culture | |

The suggestions are reasonable. Some are correct. Some aren't — not because the model made a technical error, but because knowing what `then a miracle occurs` is actually a note about requires knowing the cartoon it references and what argument the note is making. The model doesn't have that. I do. Sometimes I accepted the suggestion, sometimes I corrected it, and occasionally I added a third category that hadn't yet existed on the list, which expanded the taxonomy in real time. This happened throughout the project: not just with these tables, but in every phase where the model was making judgements and I was reviewing them. The contribution that cannot be automated is knowing what your own notes mean.

## Descriptions at scale

Phase 5 — the final phase — involved generating a one-sentence description for each of the roughly 4,659 notes that didn't have one. This connects back to the original goal of the whole project. A description in the `description:` field of the frontmatter allows a model working across the collection to understand what a note contains without reading the full body text. At scale, this is significant: instead of loading thousands of complete notes into a context window to answer a query, a model can scan descriptions first, identify the relevant notes, and then read only those. The collection becomes not just structured but efficiently navigable.

This decision illustrates a kind of judgement that runs throughout this kind of work. A large, capable language model would write excellent descriptions — but running it across 4,659 notes would be slow, expensive, and unnecessary. The task is simple: read a note, write one accurate sentence. A smaller, faster, cheaper model handles this well. The solution was a Python script that handled the file orchestration — reading each note, calling the model, writing the result back into the frontmatter — while Claude Haiku handled the language task. The core of the API call looks like this:

```python
response = anthropic.messages.create(
    model="claude-haiku-4-5",
    max_tokens=100,
    messages=[{
        "role": "user",
        "content": f"Write a single sentence describing what this note is about:\n\n{note_content}"
    }]
)
description = response.content[0].text.strip()
```

You don't need to know Python to understand what this is doing. The model is being given a note and asked for one sentence. The script runs that operation across all 4,659 notes and writes the results back into the files. No manual work. No pasting content into a chat window. The total cost for all 4,659 descriptions was about $2.

A note on what this involved: Claude Code (the tool I was using throughout the project) is accessed through Anthropic's standard subscription. But running a script that calls Claude Haiku thousands of times uses the API — a separate, pay-per-use service for developers. Claude Code can write and run scripts that make those calls automatically. I had to set up an API key and configure it, which Claude Code helped with. It is worth being aware of this distinction if you follow a similar approach: the conversational product and the API are different things, and using one does not give you access to the other.

The decision to use Haiku rather than a larger model — and to use a script rather than doing this manually or asking Claude conversationally — is not a technical one. It is a question about what the task requires, what level of quality is appropriate, and what the cost looks like at scale. Getting these decisions right requires understanding what the system is for. It does not require knowing how to write code.

## What didn't change

Across five phases, eleven sessions, and thousands of file operations, we did not change the content of a single note. No sentence was rewritten. No idea was modified. Everything described above was work done on structure and metadata — the scaffold, not the building. The notes themselves, the thinking accumulated over fifteen years, are exactly as they were.

There is a legitimate anxiety about AI and intellectual work, which is that involving AI means your work is no longer entirely your own. In this project, AI wrote every script, suggested every category, generated every description, and processed thousands of files without corrupting a single one. It did not produce a single sentence of the notes themselves. The description field is a sentence about the note, not a modification of it.

This is also a good point to note what this project was not. I do use AI to help create new notes — reading a paper, generating a structured summary, then editing and integrating that into the collection. That is a different kind of work, and a different set of questions about authorship and intellectual ownership. This project wasn't that. The content was mine throughout. The project was about making that content accessible in a new way.

## What an AI-ready knowledge base makes possible

The most immediate change is that it can be more effectively navigated. A consistently structured collection with 23 categories, a controlled tag vocabulary, type fields, status fields, and a description for every note is something a language model can work with in a fundamentally different way than a pile of unstructured text. I can ask Claude to retrieve notes in a specific category relevant to something I'm writing, rather than surfacing everything. I can surface the `needs_review: true` queue as an actionable backlog. I can scan descriptions across a large result set without opening each note. I can ask for connections between notes that share tags, with results that are actually useful because the vocabulary is now consistent. I can ask Claude to find notes related to something I'm working on and get suggestions grounded in the actual structure of the collection rather than generic retrieval.

More substantively — and this is the goal the project was built toward — I can use the collection as raw material for developing arguments. I can ask what my notes say about a particular topic and get a response grounded in what I actually think, rather than what the model generates from its training data. I can ask where my thinking is developed and where it has gaps. Whether this works as well in practice as it does in principle is something only time will tell; the collection is structured now, but the collaboration it enables is just beginning.

The governance framework means this is self-sustaining. New notes are filed against the same 23-category system, tagged against the same controlled vocabulary, described by the same Haiku script. The infrastructure doesn't degrade as the collection grows.

## What the process actually produced

What I didn't anticipate at the start of this project was that building infrastructure for my notes would require me to articulate how I actually think about my field.

The category framework didn't emerge from asking what categories would be useful. It emerged from the much harder question of what distinctions actually matter — and why `Learning`, `Teaching`, and `Assessment` each need their own category rather than sitting inside a single `Education` category, and why `information-management` is more precise than `knowledge-management`, and why there are 23 categories rather than 18 or 30. Answering those questions required precision about something that had previously been implicit. The framework I ended up with — 23 categories, each defined, with distinguishing criteria for every adjacent pair — is a written account of how I think about my domain. It now exists in a form that is both human-readable and machine-readable. That wasn't the goal of the project. It's what the project produced.

I've come to think this is one of the more underappreciated things that working seriously with AI can do. Not the outputs it generates or the tasks it automates, but the pressure it places on you to be explicit about things you have always left implicit. A model cannot work with intuition. It can work with structure, rationale, and precise definitions. Building those things forces a kind of thinking that is useful entirely independently of the AI — and then leaves you with something written down that the AI can actually use.

The scaffold I started building with intent five years ago feels, for the first time, structurally sound. What happens on it next is the interesting part.

*Tools mentioned in this post: [Obsidian](https://obsidian.md/) is a free, local-first note-taking application that stores everything as plain text. [YAML frontmatter](https://help.obsidian.md/Editing+and+formatting/Properties) is Obsidian's built-in support for structured note metadata. [Claude Code](https://claude.ai/code) is Anthropic's agentic coding tool, which can work directly with files on your computer. [Git](https://git-scm.com/) is free, open-source version control software. The [Anthropic API](https://www.anthropic.com/api) is the developer service used by the description-generation script — separate from the Claude.ai subscription product.*
