---
title: Higher Education Reference Model (HERM)
description: A shared vocabulary for universities, set out in business, data, application, and technology reference models, and a practical starting point for making institutional knowledge readable by software and AI agents.
meta-description: "What is the higher education reference model (HERM)? A shared vocabulary for universities, and a starting point for curriculum data AI agents can read."
aliases:
  - HERM
  - Higher Education Reference Model
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-26
draft: false
tags:
  - information-architecture
  - higher-education
  - knowledge-representation
  - curriculum-infrastructure
category:
  - Technology
  - Education
related:
  - "[[Essays/documentation-as-infrastructure]]"
  - "[[Essays/curriculum-infrastructure]]"
  - "[[Notes/documentation debt]]"
  - "[[Notes/graph database]]"
  - "[[Notes/knowledge graph]]"
keyphrase: "higher education reference model"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] HERM gives universities a shared vocabulary to build on
> The Higher Education Reference Models name the parts of a university (what it does, the information it holds, and the systems that hold it) and define each one, so that institutions and their suppliers mean the same thing by "course" or "assessment". That vocabulary is a sound starting point for making institutional knowledge readable by software, including AI agents. Each institution still encodes the relationships between those parts, such as which assessment tests which learning outcome, and HERM lets it do so in terms that other institutions and their software will recognise.

## Higher Education Reference Model (HERM)

**One-sentence definition:** HERM is a set of reference models (business, data, application, and technology) that gives higher education institutions a common vocabulary for describing what they do, the information they use, and the systems they use it in.

CAUDIT and UCISA, the associations for university IT directors in Australasia and the UK, develop HERM together with EDUCAUSE and EUNIS, their counterparts in the US and Europe (CAUDIT, 2025; UCISA, 2025). Institutions use it to plan and describe their systems, to compare themselves with other universities, and to tell suppliers what they need.

### A vocabulary with definitions

The business capability model lists what a university does, from curriculum management to admissions to research administration. The data reference model names the things a university holds information about, such as students, staff, courses, and assessments, groups them into topics, one of which is Curriculum, and gives each one a definition.

The definitions matter because institutions use the same words for different things. In HERM, a *Course* is the whole award a student enrols on, such as a Bachelor of Science (Boyatt, 2023). Many UK institutions would call that a programme and use *course* or *module* for a unit within it. Two systems that read the same word differently will exchange data that looks right and isn't, and a shared reference model makes that kind of mismatch visible before it turns up in a return to a regulator.

### What an institution still has to build

An [[Notes/ai-agents|AI agent]] checking a curriculum against a professional body's requirements needs the relationships stated explicitly: this module addresses that learning outcome, this assessment tests it, and the outcome maps to a named standard. The reference model supplies the names those statements are written in. Because each entity is defined once for the whole sector, a relationship encoded at one institution means the same thing at another, so a tool built to read one university's curriculum can read the next one's too.

Health professions programmes already do this work by hand. An occupational therapy programme seeking HCPC[^hcpc] approval maps its learning outcomes to the standards of proficiency (Health and Care Professions Council, 2023), usually in a spreadsheet that a programme lead rebuilds at each periodic review. That mapping is the relationship layer, held in a document rather than in data that software can query. *[[Essays/curriculum-infrastructure|Beyond document management]]* argues for encoding it in a [[Notes/graph database|graph database]], with HERM's vocabulary as the starting point.

Not every curriculum fits the model cleanly. The distinction between a clinical placement and a practice competency in nursing, or an integrated medical curriculum that doesn't divide into discrete modules, may need entities and relationships the model doesn't have. Internal consistency matters more than strict adherence: an institution can extend the vocabulary, provided it uses its extensions the same way everywhere.

The model also stops at the level of the institution. It says nothing about how teams structure the project records, meeting notes, and working documents that sit beneath the formal systems, which is where [[Notes/documentation debt|documentation debt]] accumulates and where *[[Essays/documentation-as-infrastructure|Documentation becomes infrastructure when AI agents are the readers]]* picks up the argument.

---

## Sources

- Boyatt, R. (2023). *Developing a data reference model for higher education* [Conference presentation]. EUNIS 2023. https://www.eunis.org/eunis2023/wp-content/uploads/sites/22/2023/05/056-Enterprise-Architecture-1-56-Boyattt.pdf
- Council of Australasian University Directors of Information Technology [CAUDIT]. (2025). *Higher Education Reference Models*. https://www.caudit.edu.au/communities/caudit-higher-education-reference-models/
- Health and Care Professions Council. (2023). *Standards of proficiency: Occupational therapists*. https://www.hcpc-uk.org/standards/standards-of-proficiency/occupational-therapists/
- Universities and Colleges Information Systems Association [UCISA]. (2025). *Higher Education Reference Models*. https://www.ucisa.ac.uk/groups/enterprise-architecture/herm

[^hcpc]: **HCPC** is the Health and Care Professions Council, the UK regulator for fifteen professions including occupational therapy, physiotherapy, paramedicine, and radiography. It approves the education programmes that lead to registration, and its standards of proficiency set out what a graduate must be able to do on the day they register. [Wikipedia](https://en.wikipedia.org/wiki/Health_and_Care_Professions_Council)
