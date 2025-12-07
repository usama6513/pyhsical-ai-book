# Implementation Plan: Physical AI Book

**Branch**: `001-physical-ai-book` | **Date**: 2025-12-07 | **Spec**: [specs/001-physical-ai-book/spec.md](spec.md)
**Input**: Feature specification from `/specs/001-physical-ai-book/spec.md`

## Summary

Build a hands-on learning book using Docusaurus v3+ with one chapter containing three progressive lessons on Physical AI Fundamentals. The book prioritizes executable examples over theory, with all code samples tested in CI/CD. Content follows a consistent lesson format (learning objectives → concept overview → visual diagram → three working examples → interactive modifications → self-assessment). Development approach: establish Docusaurus infrastructure, create reusable MDX components, develop lessons with embedded examples, and validate all code runs on Windows/macOS/Linux.

## Technical Context

**Language/Version**: JavaScript/TypeScript (Node.js 18+ LTS) for Docusaurus; JavaScript/Python for examples (targeting modern runtime versions)

**Primary Dependencies**:
- Docusaurus v3.x (static site generator)
- MDX 2.x (JSX in Markdown)
- @docusaurus/plugin-content-docs (multi-version support)
- @docusaurus/theme-classic (built-in theme)
- Mermaid (diagram rendering in MDX)

**Storage**: Filesystem-based (Git repository; no database required)

**Testing**: Jest (for example validation), Docusaurus build validation (HTML output checking), end-to-end setup validation

**Target Platform**: Web (Docusaurus outputs static HTML; deployable to any CDN or static hosting)

**Project Type**: Documentation + code examples (dual structure: `/docs` for Docusaurus + `/examples` for runnable code)

**Performance Goals**:
- Build time: <30 seconds for clean build
- Page load: <2 seconds on 3G connection
- Code examples: Execute within 5 seconds on standard laptop hardware

**Constraints**:
- All code examples must run in <5 minutes of setup (inclusive of environment prep)
- Zero broken links in published output
- Zero broken code examples (all validated in CI/CD)
- Support Windows, macOS, Linux equally (no platform-specific code without fallbacks)

**Scale/Scope**:
- 1 chapter (Physical AI Fundamentals)
- 3 lessons (~2,000-3,000 words each)
- 9 code examples (3 per lesson, 30-100 lines each)
- 9+ diagrams (1-2 per lesson concept)
- ~200 lines of custom MDX components
- Expected final book: 10,000-15,000 published words

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle Alignment Validation

✅ **I. Hands-On Learning First**
- Plan includes 3 working examples per lesson with modifications
- All examples must be runnable without external setup (Constitution requirement)
- Examples stored in `/examples` directory, CI/CD tested
- PASSES: Non-negotiable requirement satisfied by design

✅ **II. Progressive Complexity**
- Lesson 1: Fundamentals (basic concepts, simple examples)
- Lesson 2: Core Concepts (intermediate patterns, slightly more complex)
- Lesson 3: Building Intuition (practical applications, most complex)
- Each lesson builds on prior knowledge without external resources
- PASSES: Progressive structure enforced by lesson sequencing

✅ **III. Clarity Over Completeness**
- Lesson format prioritizes plain-language explanation before code
- All technical terms defined on first use
- Strict paragraph length limits (3-4 sentences max)
- Visual diagrams precede detailed explanations
- PASSES: Content guidelines enforce clarity-first approach

✅ **IV. Documentation as Code**
- All content in MDX (Docusaurus-native format)
- Examples are actual files in `/examples`, not prose snippets
- Code examples tested in CI/CD to prevent outdating
- Documentation structure mirrors file structure (lesson files link to example files)
- PASSES: Documentation-as-code enforced by file structure + CI/CD

✅ **V. Testing & Validation (NON-NEGOTIABLE)**
- All examples automated-tested in CI/CD (Jest for code validation)
- Docusaurus build validation (no broken imports, valid MDX)
- Setup instructions validated end-to-end in CI/CD
- Broken examples block merge (PR gate enforcement)
- PASSES: Non-negotiable principle fully supported

✅ **VI. Accessibility & Inclusivity**
- Every lesson includes visual diagrams (Mermaid)
- Multiple learning modalities: prose explanation + code + visuals
- Examples support Windows/macOS/Linux (platform detection or fallbacks)
- Progressive complexity provides multiple difficulty paths
- PASSES: Multi-modality design built into lesson format

### Governance Compliance

- **Docusaurus Mandate**: MDX-native requirement enforced by technology choice (❌ no alternatives allowed)
- **CI/CD Gate**: Example validation on every commit required (❌ no broken code to main)
- **PR Process**: All PRs must include docs + examples (enforced by checklist in CONTRIBUTING.md)
- **Testing Non-Negotiable**: Zero broken examples in published output (enforced by CI/CD gate)

### Violations & Justifications

None identified. Plan fully complies with all six principles and governance requirements. No deviations from constitution needed.

## Project Structure

### Documentation (Docusaurus)

```text
docs/
├── intro.md                                      # Landing page
├── chapter-1-physical-ai-fundamentals/
│   ├── index.md                                  # Chapter overview & outline
│   ├── lesson-1-fundamentals.md                  # Lesson 1 (What is Physical AI?)
│   ├── lesson-2-core-concepts.md                 # Lesson 2 (Core Concepts & Intuition)
│   └── lesson-3-building-intuition.md            # Lesson 3 (Building AI Intuition)
├── getting-started/
│   ├── index.md                                  # Getting started overview
│   ├── installation.md                           # Installation & setup
│   ├── environment-setup.md                      # Environment configuration
│   └── troubleshooting.md                        # Common setup issues
├── reference/
│   ├── glossary.md                               # Key terms and definitions
│   └── resources.md                              # External learning resources
├── sidebars.js                                   # Sidebar navigation config
└── _category_.json                               # Directory organization metadata

src/
└── components/
    ├── CodeExample.jsx                           # Code block component
    ├── Diagram.jsx                               # Mermaid diagram wrapper
    ├── LearningObjectives.jsx                    # Learning objectives card
    ├── TryThis.jsx                               # Modification suggestions box
    ├── KeyTakeaways.jsx                          # Summary takeaways
    └── Checkpoint.jsx                            # Self-assessment questions

docusaurus.config.js                              # Docusaurus configuration
package.json                                      # Dependencies & scripts
```

### Code Examples

```text
examples/
├── chapter-1/
│   ├── lesson-1-example-1.js                     # Lesson 1, Example 1 (Fundamentals)
│   ├── lesson-1-example-2.js                     # Lesson 1, Example 2 (Intermediate)
│   ├── lesson-1-example-3.js                     # Lesson 1, Example 3 (Advanced)
│   ├── lesson-2-example-1.js                     # Lesson 2, Example 1
│   ├── lesson-2-example-2.js                     # Lesson 2, Example 2
│   ├── lesson-2-example-3.js                     # Lesson 2, Example 3
│   ├── lesson-3-example-1.js                     # Lesson 3, Example 1
│   ├── lesson-3-example-2.js                     # Lesson 3, Example 2
│   └── lesson-3-example-3.js                     # Lesson 3, Example 3
├── shared/
│   └── setup.js                                  # Shared utilities & helpers
└── README.md                                     # Examples directory guide
```

### Tests

```text
tests/
├── examples/
│   ├── chapter-1-lesson-1.test.js                # Tests for Lesson 1 examples
│   ├── chapter-1-lesson-2.test.js                # Tests for Lesson 2 examples
│   └── chapter-1-lesson-3.test.js                # Tests for Lesson 3 examples
├── integration/
│   ├── setup.test.js                             # End-to-end setup validation
│   └── links.test.js                             # Link validation (404 checking)
└── build.test.js                                 # Docusaurus build validation
```

### Repository Root

```text
.github/
└── workflows/
    ├── test-examples.yml                         # Run example tests on PR
    ├── validate-links.yml                        # Check for broken links
    └── build-docs.yml                            # Docusaurus build validation

.specify/                                         # SDD toolkit (from template)
├── memory/constitution.md                        # Project constitution
├── templates/                                    # Specification templates
├── scripts/                                      # Automation scripts
└── ...

specs/
└── 001-physical-ai-book/
    ├── spec.md                                   # Feature specification
    ├── plan.md                                   # This file
    ├── research.md                               # Phase 0 research (Phase 0)
    ├── data-model.md                             # Phase 1 design (Phase 1)
    ├── quickstart.md                             # Phase 1 design (Phase 1)
    ├── contracts/                                # Phase 1 design (Phase 1)
    └── tasks.md                                  # Phase 2 tasks (via /sp.tasks)

README.md                                         # Project overview
CONTRIBUTING.md                                   # Contribution guidelines
LICENSE                                           # License
package.json                                      # Node.js dependencies
.gitignore                                        # Git ignore rules
```

**Structure Decision**: Dual-structure approach (documentation + code examples) allows:
- Documentation content in Docusaurus-native MDX format (supports hot-reload, fast iteration)
- Code examples as separate files enabling easy CI/CD validation (run each file independently)
- Clear separation of concerns: docs/ for prose, examples/ for executable code
- Tests/ for CI/CD validation independent of documentation build process

## Phase 0: Outline & Research

### Research Tasks (No Clarifications Required)

The technical context is fully specified by the constitution:

1. ✅ **Docusaurus v3 Configuration**: Constitution mandates Docusaurus v3+; established best practices for MDX, plugins, sidebar generation
2. ✅ **Custom MDX Components**: Specification requires 6 reusable components (CodeExample, Diagram, LearningObjectives, TryThis, KeyTakeaways, Checkpoint); standard React/JSX patterns
3. ✅ **CI/CD Test Framework**: Constitution requires automatic example validation; Jest + Node.js standard for JavaScript testing
4. ✅ **Platform Support Strategy**: Examples must support Windows/macOS/Linux; use platform-detection (process.platform) or cross-platform libraries (e.g., path handling)
5. ✅ **Link Validation**: Constitution requires zero broken links; automated link checking (lighthouse-ci or linkinator)

### Phase 0 Deliverables

**research.md** (to be generated in Phase 0):
- Docusaurus v3 setup best practices (monorepo vs. single project, plugin architecture)
- MDX component patterns (custom components, prop validation, CSS-in-JS styling)
- Example testing strategy (Jest configuration, test structure, module imports)
- Cross-platform code examples (path separators, shell commands, environment detection)
- Link validation approach (automated tools, CI/CD integration)

---

## Phase 1: Design & Contracts

### 1. Data Model (data-model.md)

**Content Entities**:

| Entity | Fields | Relationships | Validation |
|--------|--------|---------------|-----------|
| Chapter | id, title, description, lessons[] | Contains multiple Lessons | id must be unique; must contain 3 lessons |
| Lesson | id, title, objectives[], content, examples[], diagrams[] | Belongs to Chapter; references Examples | id within chapter must be unique; must have 3 examples, 1+ diagrams |
| Example | id, title, language, code, lineCount, platforms[] | Belongs to Lesson | Code must be syntactically valid; <100 lines; tested |
| Diagram | id, type (mermaid/svg), source, caption | Belongs to Lesson | Must render without errors |
| Checkpoint | id, questions[], answers[] | Belongs to Lesson | Must have 3-5 questions; answers must match question content |

### 2. Content Contracts (contracts/ directory)

**File**: `contracts/book-structure.json`
```json
{
  "bookVersion": "1.0.0",
  "chapters": [
    {
      "id": "ch-1",
      "number": 1,
      "title": "Physical AI Fundamentals",
      "lessons": [
        {
          "id": "lesson-1",
          "number": 1,
          "title": "What is Physical AI?",
          "objectives": ["..."],
          "examples": ["lesson-1-example-1.js", "lesson-1-example-2.js", "lesson-1-example-3.js"],
          "diagrams": ["..."],
          "estimatedTime": "25 minutes"
        },
        {
          "id": "lesson-2",
          "number": 2,
          "title": "Core Concepts & Intuition",
          "examples": ["lesson-2-example-1.js", "lesson-2-example-2.js", "lesson-2-example-3.js"],
          "estimatedTime": "30 minutes"
        },
        {
          "id": "lesson-3",
          "number": 3,
          "title": "Building Your AI Intuition",
          "examples": ["lesson-3-example-1.js", "lesson-3-example-2.js", "lesson-3-example-3.js"],
          "estimatedTime": "35 minutes"
        }
      ]
    }
  ]
}
```

**File**: `contracts/example-format.json`
```json
{
  "exampleStructure": {
    "title": "string (one-liner description)",
    "description": "string (2-3 sentence explanation)",
    "language": "javascript|python|typescript",
    "code": "string (complete, runnable code)",
    "lineCount": "number (must be <100)",
    "platforms": ["windows", "macos", "linux"],
    "expectedOutput": "string or object (example output when run)",
    "dependencies": "string[] (external modules required)",
    "estimatedRunTime": "number (seconds)"
  }
}
```

### 3. Docusaurus Configuration (plan.md Section: Docusaurus Configuration Details)

**docusaurus.config.js Key Settings**:
```javascript
module.exports = {
  title: 'Physical AI Book',
  tagline: 'Learn AI through hands-on examples',
  url: 'https://physical-ai-book.example.com',
  baseUrl: '/',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/...',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: 'docs/examples',
        routeBasePath: 'examples',
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },
};
```

**MDX Components** (in `src/components/`):
- Imported into lesson files as: `import { CodeExample, Diagram, ... } from '@site/src/components'`
- Each component handles rendering, styling, and validation
- Props validated with PropTypes or TypeScript

### 4. Development & Deployment (contracts/development-workflow.json)

```json
{
  "localDevelopment": {
    "commands": {
      "install": "npm install",
      "dev": "docusaurus start",
      "build": "docusaurus build",
      "testExamples": "jest tests/examples/",
      "testSetup": "jest tests/integration/setup.test.js",
      "validateLinks": "linkinator build/",
      "serve": "docusaurus serve"
    },
    "requiredSetup": ["Node.js 18+", "npm or yarn"],
    "estimatedSetupTime": "5 minutes"
  },
  "ciCdGates": [
    {
      "name": "Test Examples",
      "command": "npm run test:examples",
      "mustPass": true,
      "blocksMerge": true
    },
    {
      "name": "Build Documentation",
      "command": "npm run build",
      "mustPass": true,
      "blocksMerge": true
    },
    {
      "name": "Validate Links",
      "command": "npm run validate:links",
      "mustPass": true,
      "blocksMerge": true
    }
  ],
  "deployment": {
    "target": "Static hosting (Netlify, Vercel, GitHub Pages)",
    "buildOutput": "build/ directory (static HTML)",
    "buildCommand": "npm run build",
    "previewCommand": "npm run serve"
  }
}
```

### 5. Quick Start Guide (quickstart.md)

**Phase 1 Deliverable**: quickstart.md will include:
- 5-minute setup walkthrough (Node.js installation, repo clone, dependency install)
- First lesson access via `npm run dev` (local hot-reload)
- Example running: `node examples/chapter-1/lesson-1-example-1.js`
- CI/CD validation: `npm run test:examples`

---

## Phase 1 Deliverables Summary

1. ✅ **data-model.md** – Entities (Chapter, Lesson, Example, Diagram, Checkpoint) with validation rules
2. ✅ **contracts/** – Content structure, example format, Docusaurus configuration, development workflow
3. ✅ **quickstart.md** – 5-minute setup guide with common tasks
4. ✅ **Agent context** – Updated with Docusaurus v3, MDX, Jest stack specifics

---

## Constitutional Compliance (Phase 1 Re-Check)

✅ **All six principles remain aligned after design phase**:
- Hands-On Learning: Examples structure defined; CI/CD validation required
- Progressive Complexity: Lesson sequencing established
- Clarity Over Completeness: MDX components enforce clear formatting
- Documentation as Code: Examples as files; tests validate syntax
- Testing & Validation: CI/CD gates for examples, links, builds
- Accessibility & Inclusivity: Diagram components, multi-modality lesson format

No design changes required. Proceeding to implementation.

---

## Summary: What Gets Built

### Immediate (Foundation - Phase 1 Complete)
- Docusaurus v3 project initialized with MDX support
- Directory structure created (/docs, /examples, /tests, /specs)
- 6 reusable MDX components for lesson formatting
- Docusaurus configuration (sidebars.js, docusaurus.config.js)
- CI/CD pipeline (GitHub Actions) for tests, build, link validation
- Development workflow documentation (README.md, CONTRIBUTING.md)

### Content Development (Phase 2 / Tasks)
- Chapter 1: Physical AI Fundamentals (1 chapter)
- 3 Lessons with consistent format (learning objectives → concept → diagram → 3 examples → modifications → checkpoints)
- 9 working code examples (JavaScript, tested, cross-platform)
- 3+ diagrams per lesson (Mermaid format)
- Setup instructions validated end-to-end

### Validation (Throughout)
- All examples run on Windows/macOS/Linux
- 0 broken links in output
- 0 broken code examples (CI/CD blocks broken code)
- All tests pass before merge
- Setup instructions validated by fresh user (checklist item in tasks)

---

## Next Steps

1. **Phase 0 Research** (if needed): Detailed investigation of Docusaurus best practices, MDX component patterns, cross-platform testing strategies
2. **Phase 1 Design** (Complete above, then generate):
   - research.md (consolidate research findings)
   - data-model.md (detailed entity definitions)
   - contracts/ (JSON schemas and configuration)
   - quickstart.md (5-minute setup guide)
3. **Phase 2 Task Generation** (via `/sp.tasks`):
   - Task breakdown for Docusaurus setup
   - Task breakdown for MDX component development
   - Task breakdown for lesson content development
   - Task breakdown for CI/CD setup
   - Task breakdown for example validation

---

**Plan Status**: READY FOR IMPLEMENTATION
**Gate Compliance**: ✅ All constitution checks passed
**Readiness**: Ready for Phase 0 research (if needed) or immediate Phase 1 design completion
