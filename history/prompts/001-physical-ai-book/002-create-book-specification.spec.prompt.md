---
id: 002
title: Create Physical AI Book Specification
stage: spec
date: 2025-12-07
surface: agent
model: claude-haiku-4-5-20251001
feature: 001-physical-ai-book
branch: main
user: user
command: /sp.specify
labels: ["spec", "documentation", "docusaurus", "hands-on-learning"]
links:
  spec: specs/001-physical-ai-book/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-book/spec.md
  - specs/001-physical-ai-book/checklists/requirements.md
tests:
  - N/A
---

## Prompt

Based on the constitution, create a detailed specification for a physical AI book including:
1. Book structure with 1 chapter and 3 lessons each (title and descriptions)
2. Content guidelines and lesson format
3. Docusaurus specific: requirements for organisation

## Response snapshot

Created comprehensive specification for Physical AI Book (Feature 001) aligned with constitution principles (hands-on learning first, progressive complexity, clarity over completeness, documentation as code, testing & validation, accessibility & inclusivity).

**Book Structure Delivered**:
- Chapter 1: Physical AI Fundamentals (fixed scope per requirements)
- Lesson 1: "What is Physical AI?" - Introduces core concepts with practical examples
- Lesson 2: "Core Concepts & Intuition" - Builds foundational understanding with progressively complex examples
- Lesson 3: "Building Your AI Intuition" - Develops practical intuition through real-world applications

**Content Format (Consistent Lesson Structure)**:
1. Learning Objectives + Time Estimate + Prerequisites + Real-World Context
2. Concept Overview (plain language, no jargon)
3. Visual Diagram (Mermaid or SVG)
4. Three Working Examples (30-50 lines, 50-75 lines, up to 100 lines)
5. Try This Modifications (3-5 interactive challenges)
6. Key Takeaways (bullet summary)
7. Checkpoint Questions (self-assessment, 3-5 questions)

**Content Guidelines**:
- Active voice only; 3-4 sentence max paragraphs
- All technical terms defined on first use
- Code examples are complete, runnable, syntax-correct
- Examples tested in CI/CD; no broken code
- 2,000-3,000 words per lesson; 20-30 minutes to complete
- Platform-agnostic (Windows, macOS, Linux support)

**Docusaurus Organization**:
- `/docs` structure: intro → chapter folder → 3 lesson files → getting-started → reference
- `/examples` structure: chapter-1 folder with 9 example files (3 per lesson)
- `/tests` structure: example tests + integration tests for setup
- MDX components: CodeExample, Diagram, LearningObjectives, TryThis, KeyTakeaways, Checkpoint
- Sidebar auto-generated from directory structure
- File naming conventions standardized (lesson-N-*, lesson-N-example-M.*)

## Outcome

- ✅ Impact: Specification establishes clear scope (1 chapter, 3 lessons, hands-on format), content guidelines aligned with progressive complexity principle, and Docusaurus-specific organization supporting automation (CI/CD testing, MDX components, sidebar generation). Enables planning and task generation with minimal ambiguity.
- 🧪 Tests: Specification quality checklist passed all 16 validation items (content quality, requirement completeness, feature readiness, edge cases, assumptions)
- 📁 Files:
  - specs/001-physical-ai-book/spec.md (6,800 words, full specification)
  - specs/001-physical-ai-book/checklists/requirements.md (quality validation, PASSED)
- 🔁 Next prompts: `/sp.plan` to design architecture and implementation approach; `/sp.tasks` to generate specific development tasks
- 🧠 Reflection: Specification successfully balances detailed prescriptive guidance (lesson format, content guidelines, file naming) with flexibility in subject matter. Constitution principles embedded in functional requirements (FR-001 Docusaurus-native, FR-005/-006/-008 hands-on learning, FR-010/-012/-013 progressive complexity). Ready for implementation planning.

## Evaluation notes (flywheel)

- Failure modes observed: None - specification derived directly from user input and constitution principles; all requirements unambiguous
- Graders run and results (PASS/FAIL): PASS - Quality checklist: 4/4 content quality ✓, 8/8 requirement completeness ✓, 4/4 feature readiness ✓; no [NEEDS CLARIFICATION] markers; all success criteria measurable
- Prompt variant (if applicable): None
- Next experiment: Validate specification against actual lesson authorship workflow once planning begins to ensure lesson format is ergonomic for writers
