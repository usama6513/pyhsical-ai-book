# Feature Specification: Physical AI Book

**Feature Branch**: `001-physical-ai-book`
**Created**: 2025-12-07
**Status**: Draft
**Input**: User description: "Based on the constitution, create a detailed specification for a physical AI book including: 1. Book structure with 1 chapter and 3 lessons each (title and descriptions) 2. Content guidelines and lesson format 3. Docusaurus specific: requirements for organisation"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Reader Learns AI Fundamentals Through Hands-On Examples (Priority: P1)

A beginner reader opens the Physical AI book's first chapter and wants to understand core AI concepts through practical, immediately-runnable examples. They should be able to read a concept, see working code they can modify, and experiment without complex setup.

**Why this priority**: This is the foundational user journey. All readers need to successfully learn core concepts with working examples. Without this, the book fails its core mission. P1 ensures the book delivers on the "hands-on learning first" principle from the constitution.

**Independent Test**: Can be fully tested by a new reader following the chapter from start to finish, running each example without external setup, modifying code, and demonstrating understanding of the concept. Delivers the core value of hands-on learning with progressive complexity.

**Acceptance Scenarios**:

1. **Given** a reader with basic programming knowledge opens Lesson 1 (Fundamentals), **When** they read a concept section, **Then** they find a complete, working code example within 2 paragraphs that they can copy and run
2. **Given** a reader completes the example code, **When** they follow the "Try This" modification suggestions, **Then** the modified code runs without errors and demonstrates the concept
3. **Given** a reader finishes all 3 lessons in Chapter 1, **When** they review the progression, **Then** each lesson builds on the previous one without requiring external resources or prior knowledge

---

### User Story 2 - Reader Understands Concepts Across Multiple Learning Styles (Priority: P2)

A reader with different learning preferences (visual, textual, hands-on) should find the content accessible. Some readers prefer diagrams; others prefer code; others prefer narrative explanations. All should reach the same learning outcome.

**Why this priority**: P2 ensures accessibility and inclusivity. Not all readers learn the same way. Providing multiple pathways increases success rate and aligns with the "Accessibility & Inclusivity" principle. This is important but secondary to core concepts being learnable.

**Independent Test**: Can be fully tested by providing the same concept in visual (diagram), textual (prose), and interactive (code) formats, then validating that different learners successfully understand the concept through their preferred modality.

**Acceptance Scenarios**:

1. **Given** a concept with a visual diagram, **When** a visual learner reads the chapter, **Then** the diagram clearly illustrates the concept before diving into code
2. **Given** a concept section with both narrative and code examples, **When** a text-focused reader reads the lesson, **Then** they can understand the concept from prose alone, with code as reinforcement
3. **Given** interactive examples in the lesson, **When** a hands-on learner runs and modifies the code, **Then** experimentation naturally reveals the concept without additional explanation

---

### User Story 3 - Reader References Book and Finds Material Current and Correct (Priority: P3)

A reader at any point in the book needs confidence that code examples work, links are valid, and information is accurate. If they revisit the book months later, they shouldn't encounter broken examples or outdated setup instructions.

**Why this priority**: P3 ensures long-term reliability and maintainability. This is important for user trust and reduces support burden, but is lower priority than initial learning and accessibility. It's supported by the "Testing & Validation" principle (non-negotiable), but implementation details are P3 relative to reader-facing content.

**Independent Test**: Can be fully tested by running all code examples from the published book in a fresh environment, validating all external links, and checking that setup instructions work end-to-end. Reader should encounter zero broken examples.

**Acceptance Scenarios**:

1. **Given** any code example in the published book, **When** a reader copies and runs it in a fresh environment, **Then** it runs without modification
2. **Given** a link in the book to external resources, **When** a reader clicks the link, **Then** it resolves to the intended resource (no 404s or redirects to different content)
3. **Given** setup instructions at the chapter start, **When** a fresh reader follows them exactly, **Then** they have a working environment to run all chapter examples

---

### Edge Cases

- What happens when a reader uses a different OS (Windows, macOS, Linux) than the examples were written for?
- How does the book handle if external libraries or tools used in examples become deprecated or significantly change versions?
- What if a reader skips Lesson 1 and jumps to Lesson 3—can they still follow along, or must they complete sequentially?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Book MUST be authored in Docusaurus-native format (MDX) and built using Docusaurus v3+
- **FR-002**: Book MUST contain exactly 1 chapter with 3 lessons (Chapter 1: Physical AI Fundamentals)
- **FR-003**: Chapter 1 MUST include Lesson 1 (Fundamentals), Lesson 2 (Core Concepts), and Lesson 3 (Building Intuition)
- **FR-004**: Each lesson MUST include at least 3 working code examples relevant to its topic
- **FR-005**: Each lesson MUST include visual diagrams (using Mermaid or SVG) explaining key concepts
- **FR-006**: All code examples MUST be complete and runnable without modification (no pseudo-code or fragments)
- **FR-007**: Code examples MUST support multiple platforms (Windows, macOS, Linux) or explicitly document platform-specific requirements
- **FR-008**: Book MUST include a "Getting Started" section with setup instructions that work end-to-end
- **FR-009**: Each lesson MUST follow a consistent format: Concept Overview → Visual Explanation → Working Example → Try This Modifications → Key Takeaways
- **FR-010**: Book MUST include a table of contents with links to all chapters and lessons
- **FR-011**: Code examples referenced in prose MUST be stored in the `/examples` directory with corresponding MDX references
- **FR-012**: Book MUST include learning objectives at the start of each lesson
- **FR-013**: Book MUST include end-of-lesson checkpoints (self-assessment questions) to verify understanding

### Key Entities

- **Chapter**: Container for lessons with a single focus (e.g., "Physical AI Fundamentals")
- **Lesson**: Self-contained learning unit within a chapter covering one major concept with examples and exercises
- **Code Example**: Executable code snippet with title, purpose, and explanation (stored in `/examples` directory, referenced in MDX)
- **Diagram**: Visual explanation of a concept (Mermaid graph or SVG file)
- **Learning Objective**: Clear statement of what the reader should understand after completing a lesson
- **Checkpoint**: Self-assessment questions validating understanding before moving to next lesson

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Reader can complete Chapter 1 (all 3 lessons + checkpoints) in under 90 minutes with basic programming knowledge
- **SC-002**: 95% of code examples run without modification on Windows, macOS, and Linux
- **SC-003**: 0% of external links in published book return 404 or redirect to different content
- **SC-004**: Reader self-assessment checkpoints show 80%+ understanding rate across all lessons
- **SC-005**: Setup instructions can be followed by a fresh user in under 5 minutes to reach a working environment
- **SC-006**: 90% of beginner readers complete at least 2 of 3 lessons without requiring external documentation
- **SC-007**: Visual diagrams accompany all major concepts (100% of major topics have at least one diagram)

## Content Guidelines & Lesson Format

### Lesson Structure (Consistent Format for All Lessons)

Each lesson follows this structure to ensure consistency and progressive learning:

1. **Lesson Header** (100-150 words)
   - Clear learning objectives (3-5 bullet points)
   - Estimated completion time
   - Prerequisites (if any)
   - Why this concept matters (real-world connection)

2. **Concept Overview** (200-300 words)
   - Plain-language explanation without jargon
   - Key terms defined on first use
   - Connection to previous lessons
   - Big-picture context

3. **Visual Explanation** (Required)
   - Diagram illustrating the concept
   - 2-3 sentence caption explaining diagram
   - Can be Mermaid flowchart, state diagram, or SVG architecture diagram

4. **Working Example** (Required, 1st Example)
   - Complete, runnable code (30-50 lines maximum)
   - Inline comments explaining non-obvious logic
   - Single clear purpose (demonstrates one concept)
   - File location referenced: `/examples/lesson-X-example-1.{js,py,etc}`

5. **Intermediate Example** (Required, 2nd Example)
   - Builds on 1st example with additional complexity
   - Shows common patterns or variations
   - Still under 75 lines with clear focus

6. **Advanced Example** (Required, 3rd Example)
   - Demonstrates practical application
   - May show integration with other concepts
   - Can be longer (up to 100 lines) but should remain focused

7. **Try This Modifications** (Interactive)
   - 3-5 specific code modifications reader can make
   - Each modification should take under 2 minutes
   - Modifications reveal deeper understanding of the concept
   - Example: "Change the value from 10 to 100 and observe how the output changes"

8. **Key Takeaways** (100-150 words)
   - Bullet-point summary of core concept
   - Connection to next lesson (if applicable)
   - Real-world application example

9. **Checkpoint Questions** (Self-Assessment)
   - 3-5 short-answer questions (not multiple choice)
   - Questions should be answerable from the lesson content alone
   - No external research required
   - Answers provided in expandable sections

### Content Guidelines (All Lessons Must Adhere)

**Clarity & Accessibility**
- Use active voice exclusively; no passive constructions
- Limit paragraphs to 3-4 sentences maximum
- Define all technical terms on first use; no assumed knowledge
- Use "you" when addressing the reader directly
- Provide context before introducing concepts

**Code Quality in Examples**
- All code must be syntactically correct and runnable
- Comments explain the "why," not the "what"
- Variable names are descriptive (not `x`, `y`, `data`)
- No pseudo-code; every example is production-ready for learning
- Examples show best practices, not shortcuts or hacks
- Error handling included for realistic scenarios

**Visual Design**
- Diagrams are simple and focused (max 5-7 nodes/elements)
- Consistent color scheme across all diagrams (use CSS variables)
- Diagrams rendered with Mermaid for consistency and maintainability
- SVG used only for complex custom illustrations (flowcharts use Mermaid)

**Testing & Validation**
- Every code example must be tested in CI/CD
- Examples tested on Node.js LTS + Python 3.11+
- Platform compatibility verified (Windows, macOS, Linux)
- Broken examples block publication

**Length & Pacing**
- Each lesson is 2,000-3,000 words maximum (including code)
- Each lesson should take 20-30 minutes to complete
- Chapter (3 lessons) should take 60-90 minutes total

## Docusaurus-Specific Requirements & Organization

### Directory Structure

```
docs/
├── intro.md                                    # Landing page
├── chapter-1-physical-ai-fundamentals/
│   ├── index.md                                # Chapter overview
│   ├── lesson-1-fundamentals.md                # Lesson 1: "What is Physical AI?"
│   ├── lesson-2-core-concepts.md               # Lesson 2: "Core Concepts & Intuition"
│   └── lesson-3-building-intuition.md          # Lesson 3: "Building Your AI Intuition"
├── getting-started/
│   ├── index.md                                # Setup overview
│   ├── installation.md                         # Installation guide
│   ├── environment-setup.md                    # Environment configuration
│   └── troubleshooting.md                      # Common setup issues
├── reference/
│   ├── glossary.md                             # Key terms and definitions
│   └── resources.md                            # External learning resources
└── _category_.json                             # Directory organization metadata

examples/
├── chapter-1/
│   ├── lesson-1-example-1.js                   # Example code files
│   ├── lesson-1-example-2.js
│   ├── lesson-1-example-3.js
│   ├── lesson-2-example-1.js
│   ├── lesson-2-example-2.js
│   ├── lesson-2-example-3.js
│   ├── lesson-3-example-1.js
│   ├── lesson-3-example-2.js
│   └── lesson-3-example-3.js
├── shared/
│   └── setup.js                                # Shared utilities (if needed)
└── README.md                                   # Examples directory guide

tests/
├── examples/
│   ├── chapter-1-lesson-1.test.js              # Test each example
│   ├── chapter-1-lesson-2.test.js
│   └── chapter-1-lesson-3.test.js
└── integration/
    └── setup.test.js                           # Validate setup instructions
```

### File Naming Conventions

- **Lessons**: `lesson-<number>-<kebab-case-title>.md`
  - Example: `lesson-1-fundamentals.md`, `lesson-2-core-concepts.md`
- **Code Examples**: `lesson-<number>-example-<sequence>.<extension>`
  - Example: `lesson-1-example-1.js`, `lesson-2-example-3.py`
- **Tests**: `chapter-<number>-lesson-<number>.test.<extension>`
  - Example: `chapter-1-lesson-1.test.js`
- **Diagrams**: Inline Mermaid in MDX when possible; external files as `lesson-<number>-diagram-<name>.svg`

### MDX Organization & Component Structure

**Reusable MDX Components** (in `src/components/`)

- `<CodeExample />` - Renders code with syntax highlighting + file reference
- `<Diagram />` - Renders Mermaid diagrams with captions
- `<Learning Objectives />` - Renders bulleted learning objectives
- `<TryThis />` - Renders modification suggestions in styled box
- `<KeyTakeaways />` - Renders summary bullets
- `<Checkpoint />` - Renders self-assessment questions with expandable answers
- `<Prerequisites />` - Renders lesson prerequisites if needed

**Example MDX Usage**:

```mdx
# Lesson 1: Fundamentals

<LearningObjectives
  objectives={[
    "Understand core AI concepts",
    "Run your first AI example",
    "Experiment with parameter changes"
  ]}
  timeEstimate="25 minutes"
/>

## Concept Overview

[Plain language explanation...]

<Diagram
  diagram={`graph LR
    A[Input] --> B[Model]
    B --> C[Output]
  `}
  caption="Basic AI pipeline structure"
/>

<CodeExample
  title="Your First AI Program"
  file="lesson-1-example-1.js"
  language="javascript"
/>

<TryThis suggestions={[
  "Change the input value from 10 to 100",
  "Modify the output format"
]} />

<KeyTakeaways bullets={[
  "AI models take inputs and produce outputs",
  "Understanding parameters helps control behavior"
]} />

<Checkpoint
  questions={[
    { q: "What are the three components of an AI pipeline?", a: "Input, Model, Output" }
  ]}
/>
```

### Docusaurus Configuration (`docusaurus.config.js`)

- **Theme**: Use `@docusaurus/theme-classic` with code highlighting enabled
- **Plugins**: Enable `@docusaurus/plugin-content-docs` for multi-version support
- **MDX**: Configure `@mdx-js/react` with custom components
- **Sidebar**: Auto-generated from directory structure via `sidebars.js`
- **Search**: Algolia integration for full-text search (optional but recommended)
- **Analytics**: Track user progress through chapters (optional)

### Sidebar Navigation (`sidebars.js`)

```javascript
module.exports = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome'
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/environment-setup',
        'getting-started/troubleshooting'
      ]
    },
    {
      type: 'category',
      label: 'Chapter 1: Physical AI Fundamentals',
      items: [
        'chapter-1-physical-ai-fundamentals/lesson-1-fundamentals',
        'chapter-1-physical-ai-fundamentals/lesson-2-core-concepts',
        'chapter-1-physical-ai-fundamentals/lesson-3-building-intuition'
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/resources'
      ]
    }
  ]
};
```

### Static Assets Organization

- **Diagrams** (Mermaid-generated): Inline in MDX files
- **Custom SVG**: Stored in `static/diagrams/`
- **Code Screenshots**: Stored in `static/images/` (for visual guides)
- **Example Output**: Can be included as image for visual validation

### Build & Deployment

- **Build Command**: `docusaurus build`
- **Local Development**: `docusaurus start` (enables hot-reload)
- **Output Directory**: `build/` contains static HTML ready for hosting
- **CI/CD Gate**: Build must succeed; all examples must pass tests before merge to main

## Assumptions

1. **Target Reader Technical Level**: Readers have basic programming knowledge (can read/write simple functions) but no AI/ML background
2. **Development Environment**: Readers have either Node.js (v18+) or Python (3.11+) already installed; setup guide covers additional tools
3. **Time Commitment**: Readers can dedicate 30-90 minutes to learning (1 lesson to full chapter)
4. **Platform Support**: Examples prioritize Windows, macOS, and Linux equally (no iOS/Android-specific examples in Chapter 1)
5. **External Dependency Stability**: Libraries used in examples (e.g., popular ML frameworks) are in active maintenance and unlikely to deprecate core APIs during book lifetime
6. **Learning Outcome Definition**: "Understanding" means reader can explain the concept and modify example code without external help
