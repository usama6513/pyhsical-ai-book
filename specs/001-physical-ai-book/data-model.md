# Data Model: Physical AI Book

**Date**: 2025-12-07
**Feature**: Physical AI Book (001-physical-ai-book)
**Phase**: Phase 1 Design

## Content Structure Model

### Entity: Chapter

**Purpose**: Top-level container for related lessons on a single topic.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | string | Unique within book | System identifier (e.g., "ch-1") |
| number | integer | 1+ | Chapter number (1, 2, 3, ...) |
| title | string | Required; <100 chars | Display title (e.g., "Physical AI Fundamentals") |
| description | string | Required; <300 chars | Chapter overview explaining what readers will learn |
| lessons | Lesson[] | Min 1; for Ch1: exactly 3 | Array of Lesson entities |
| estimatedTime | string | Format: "X hours Y minutes" | Total time to complete all lessons |

**Relationships**:
- Has-Many: Lessons

**Validation Rules**:
- id: Must be unique identifier (no duplicates across chapters)
- number: Must be sequential (no gaps; 1, 2, 3...)
- title: No HTML tags; no special characters except spaces and hyphens
- description: Plain text only; no markup

**Example**:
```json
{
  "id": "ch-1",
  "number": 1,
  "title": "Physical AI Fundamentals",
  "description": "Introduction to Physical AI concepts through hands-on examples. Learn core principles of AI systems that can perceive and act on physical environments.",
  "lessons": [
    { "id": "lesson-1", ... },
    { "id": "lesson-2", ... },
    { "id": "lesson-3", ... }
  ],
  "estimatedTime": "1 hour 30 minutes"
}
```

---

### Entity: Lesson

**Purpose**: Self-contained learning unit covering one major concept with examples and exercises.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | string | Unique within chapter | System identifier (e.g., "lesson-1") |
| number | integer | 1-3 | Lesson number within chapter (1, 2, or 3 for Ch1) |
| title | string | Required; <100 chars | Display title (e.g., "What is Physical AI?") |
| objectives | string[] | Min 3; Max 5 | Learning outcomes (e.g., "Understand core AI pipeline") |
| contentFile | string | Required; points to .md | MDX file path (docs/chapter-1/.../lesson-X.md) |
| examples | Example[] | Exactly 3 | Array of Example entities |
| diagrams | Diagram[] | Min 1; ideally 2-3 | Array of Diagram entities |
| checkpoints | Checkpoint | Required | Self-assessment questions |
| estimatedTime | string | Format: "X minutes" | Time to complete (typically 20-40 min) |
| prerequisites | string[] | Optional | Prior lessons or concepts needed |
| difficulty | string | Enum: "beginner", "intermediate" | Relative difficulty level |

**Relationships**:
- Belongs-To: Chapter
- Has-Many: Examples, Diagrams
- Has-One: Checkpoint

**Validation Rules**:
- id: Unique within parent chapter
- number: Must be 1, 2, or 3 (Chapter 1 constraint)
- title: No HTML; no special characters
- objectives: Minimum 3; each <200 chars
- examples: Exactly 3 (specification requirement)
- diagrams: Minimum 1 (specification: "100% of major concepts have diagrams")
- estimatedTime: Valid time format (20-40 minutes typical)
- difficulty: Only "beginner" or "intermediate"

**Example**:
```json
{
  "id": "lesson-1",
  "number": 1,
  "title": "What is Physical AI?",
  "objectives": [
    "Understand the core pipeline of AI systems (input → model → output)",
    "Run your first AI example without external setup",
    "Modify example parameters and observe behavior changes"
  ],
  "contentFile": "docs/chapter-1-physical-ai-fundamentals/lesson-1-fundamentals.md",
  "examples": [
    { "id": "lesson-1-example-1", ... },
    { "id": "lesson-1-example-2", ... },
    { "id": "lesson-1-example-3", ... }
  ],
  "diagrams": [
    { "id": "lesson-1-diagram-1", ... }
  ],
  "checkpoints": { ... },
  "estimatedTime": "25 minutes",
  "difficulty": "beginner"
}
```

---

### Entity: Example

**Purpose**: Executable code snippet demonstrating a concept, with explanation and validation.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | string | Unique within lesson | System identifier (e.g., "lesson-1-example-1") |
| number | integer | 1-3 | Example sequence (1, 2, 3 per lesson) |
| title | string | Required; <100 chars | One-liner description |
| description | string | Required; <300 chars | 2-3 sentence explanation of what it demonstrates |
| language | string | Enum: "javascript", "python" | Programming language |
| codeFile | string | Required; relative path | Source file (examples/chapter-1/lesson-X-example-Y.js) |
| lineCount | integer | Max 100 | Number of lines in source file |
| platforms | string[] | Min 1; valid: "windows", "macos", "linux" | Supported operating systems |
| dependencies | string[] | Optional | External packages (npm, pip, etc.) |
| expectedOutput | string or object | Optional | Example of expected output when run |
| estimatedRunTime | integer | Seconds | How long example takes to execute (typically <5 sec) |
| difficulty | string | Enum: "beginner", "intermediate", "advanced" | Relative complexity |

**Relationships**:
- Belongs-To: Lesson
- Tested-By: ExampleTest

**Validation Rules**:
- id: Unique within parent lesson
- number: 1, 2, or 3
- codeFile: Must exist and be syntactically valid (JS/Python)
- lineCount: Max 100 lines (specification: examples are concise, readable)
- platforms: Must support at least one; can support all three (Windows/macOS/Linux)
- dependencies: Must be listed in package.json or requirements.txt
- expectedOutput: Must match actual output when example runs (CI/CD validated)
- difficulty: Only "beginner", "intermediate", or "advanced"

**State Transitions**:
- Draft → Tested → Published (via CI/CD)
- Example only published if all tests pass

**Example**:
```json
{
  "id": "lesson-1-example-1",
  "number": 1,
  "title": "Your First AI Program",
  "description": "A simple example demonstrating the core AI pipeline: feeding input to a model and observing output. Shows how parameters affect behavior.",
  "language": "javascript",
  "codeFile": "examples/chapter-1/lesson-1-example-1.js",
  "lineCount": 35,
  "platforms": ["windows", "macos", "linux"],
  "dependencies": [],
  "expectedOutput": "Input: 10, Model: scale(x*2), Output: 20",
  "estimatedRunTime": 1,
  "difficulty": "beginner"
}
```

---

### Entity: Diagram

**Purpose**: Visual explanation of a concept (flowchart, state diagram, architecture, etc.).

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | string | Unique within lesson | System identifier (e.g., "lesson-1-diagram-1") |
| type | string | Enum: "mermaid", "svg" | Diagram format |
| source | string | Required | Mermaid DSL or SVG file path |
| caption | string | Required; <200 chars | Text description of diagram |
| concepts | string[] | Required | List of concepts illustrated (e.g., ["input", "model", "output"]) |

**Relationships**:
- Belongs-To: Lesson

**Validation Rules**:
- id: Unique within parent lesson
- type: Only "mermaid" or "svg"
- source: Mermaid must be valid DSL; SVG must be valid XML
- caption: Must clearly describe what diagram shows
- concepts: Minimum 1; maximum 7 (keep diagrams focused)

**Example (Mermaid)**:
```json
{
  "id": "lesson-1-diagram-1",
  "type": "mermaid",
  "source": "graph LR\n    A[Input Data] --> B[AI Model]\n    B --> C[Output/Prediction]\n    D[Parameters] -.-> B",
  "caption": "Basic AI pipeline: input flows through a model (influenced by parameters) to produce output.",
  "concepts": ["input", "model", "output", "parameters"]
}
```

---

### Entity: Checkpoint

**Purpose**: Self-assessment questions validating reader understanding before moving to next lesson.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | string | Unique within lesson | System identifier (e.g., "lesson-1-checkpoint") |
| questions | Question[] | Min 3; Max 5 | Array of assessment questions |

**Relationships**:
- Belongs-To: Lesson (one-to-one)

**Validation Rules**:
- questions: Minimum 3; maximum 5
- Each question must be answerable from lesson content alone (no external research)

**Example**:
```json
{
  "id": "lesson-1-checkpoint",
  "questions": [
    {
      "id": "q1",
      "text": "What are the three main components of an AI pipeline?",
      "expectedAnswer": "Input, Model, and Output",
      "hints": ["One component receives data", "One component processes it", "One component produces results"]
    },
    {
      "id": "q2",
      "text": "How do parameters affect the behavior of an AI model?",
      "expectedAnswer": "Parameters control how the model transforms input to output; changing parameters changes the output for the same input",
      "hints": ["Think about the 'Try This' modification examples"]
    },
    {
      "id": "q3",
      "text": "Why is it important to test code examples as you read?",
      "expectedAnswer": "Testing examples lets you experiment, modify parameters, and develop intuition about how concepts work",
      "hints": ["What did you learn by running example 3?"]
    }
  ]
}
```

---

### Entity: Question (nested in Checkpoint)

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | string | Unique within checkpoint | Question identifier (e.g., "q1") |
| text | string | Required; <300 chars | Question text (plain language, no markup) |
| expectedAnswer | string | Required; <500 chars | Sample correct answer (not verbatim; shows understanding) |
| hints | string[] | Optional; Max 3 | Optional hints to guide learner (for expandable hints feature) |

---

## Content Organization Structure

### File Structure (Mirror in Code)

```
docs/
├── intro.md
└── chapter-1-physical-ai-fundamentals/
    ├── index.md (Chapter overview)
    ├── lesson-1-fundamentals.md (Lesson 1 content)
    ├── lesson-2-core-concepts.md (Lesson 2 content)
    └── lesson-3-building-intuition.md (Lesson 3 content)

examples/
├── chapter-1/
│   ├── lesson-1-example-1.js
│   ├── lesson-1-example-2.js
│   ├── lesson-1-example-3.js
│   ├── lesson-2-example-1.js
│   ├── lesson-2-example-2.js
│   ├── lesson-2-example-3.js
│   ├── lesson-3-example-1.js
│   ├── lesson-3-example-2.js
│   └── lesson-3-example-3.js
└── shared/
    └── setup.js (Shared utilities)
```

---

## State Management & Validation Rules

### Content Lifecycle

```
Draft → Review → Published
  ↓        ↓         ↓
Written   Checked   Live in
          for       book
          errors
```

**Draft State**: Content author writes lesson, examples, diagrams
- Examples must compile (syntax check via linter)
- No validation tests required yet

**Review State**: Content reviewed; examples tested
- All examples run without errors (Jest validation)
- All links valid (linkinator check)
- Diagrams render without errors
- Self-assessment questions have reasonable answers
- PR requires non-author review

**Published State**: Merged to main branch
- All validations passed in CI/CD
- Example tests pass on Windows/macOS/Linux
- Docusaurus build succeeds
- No broken links in output
- Live on published website

### CI/CD Validation Gates

| Gate | Trigger | Validation | Block Merge if Fails |
|------|---------|-----------|-------------------|
| Example Tests | On PR | Jest runs all example files | YES |
| Build Docs | On PR | Docusaurus build succeeds | YES |
| Link Check | On PR (post-build) | linkinator finds 0 broken links | YES |
| Code Linting | On PR | ESLint/Prettier formatting | NO (warning only) |
| Accessibility | On PR (post-build) | axe-core checks for A11y | NO (warning only) |

---

## Example Validation

### Test Structure (Jest)

Each example file must be executable and return expected output:

```javascript
// examples/chapter-1/lesson-1-example-1.js
module.exports = {
  run: function() {
    // Actual example code
    const input = 10;
    const scaled = input * 2;
    return scaled;
  },
  expectedOutput: 20
};

// tests/examples/chapter-1-lesson-1.test.js
describe('Lesson 1: Fundamentals', () => {
  test('Example 1: Your First AI Program runs correctly', () => {
    const example = require('../../examples/chapter-1/lesson-1-example-1.js');
    const output = example.run();
    expect(output).toBe(example.expectedOutput);
  });
});
```

---

## Summary: Entity Relationships

```
Chapter (1)
  ├─→ Lesson (3 per Chapter 1)
        ├─→ Example (3 per Lesson)
        ├─→ Diagram (1-3 per Lesson)
        └─→ Checkpoint (1 per Lesson)
               └─→ Question (3-5 per Checkpoint)
```

**Cardinality for Physical AI Book**:
- Chapters: 1 (currently)
- Lessons: 3 per chapter
- Examples: 3 per lesson = 9 total
- Diagrams: 2-3 per lesson = 6-9 total
- Checkpoints: 1 per lesson = 3 total
- Questions: 3-5 per checkpoint = 9-15 total

**Constraints Enforced**:
- All examples must pass tests (CI/CD gate)
- All links must be valid (CI/CD gate)
- All diagrams must render (Docusaurus build gate)
- All questions must be answerable from lesson content

**Scalability**: Model supports future chapters (2, 3, etc.) with same structure; no changes needed.
