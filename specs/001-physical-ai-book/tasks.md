---
description: "Task list for Physical AI Book implementation (Docusaurus + Chapter 1 with 3 lessons)"
---

# Tasks: Physical AI Book

**Input**: Design documents from `/specs/001-physical-ai-book/` (spec.md, plan.md, research.md, data-model.md, quickstart.md)
**Prerequisites**: All design documents complete and reviewed
**Tests**: NOT requested in specification; focus on implementation tasks only

**Organization**: Tasks grouped by phase (Setup, Foundational, User Stories P1-P3, Polish). User story tasks marked with `[US1]`, `[US2]`, `[US3]` labels.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (`[US1]`, `[US2]`, `[US3]`)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Docusaurus project, configure dependencies, set up file structure

### Repository & Dependencies

- [ ] T001 Initialize Node.js project with `npm init -y` and create `.nvmrc` with `18`
- [ ] T002 [P] Install Docusaurus v3 and core dependencies: `npm install @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/plugin-content-docs @mdx-js/react mermaid`
- [ ] T003 [P] Install dev dependencies for testing and validation: `npm install --save-dev jest @babel/preset-env @babel/preset-react linkinator`
- [ ] T004 Install shared utilities: `npm install --save-dev prettier eslint @docusaurus/eslint-plugin`
- [ ] T005 Create `.gitignore` with entries for `node_modules/`, `build/`, `.DS_Store`, `*.log`

### Project Structure

- [ ] T006 Create core directories: `mkdir -p docs/chapter-1-physical-ai-fundamentals docs/getting-started docs/reference examples/chapter-1 examples/shared src/components tests/examples tests/integration`
- [ ] T007 Create `package.json` scripts section with entries for: `dev`, `build`, `serve`, `test:examples`, `test:setup`, `validate:links`, `ci`, `lint`, `format`
- [ ] T008 Create `.github/workflows/` directory structure for CI/CD: `mkdir -p .github/workflows`
- [ ] T009 Create foundational configuration files at repository root:
  - `docusaurus.config.js` (Docusaurus configuration with MDX, plugins, theme setup)
  - `sidebars.js` (Navigation structure for docs)
  - `.prettierrc` (Code formatting rules)
  - `.eslintrc.json` (Linting configuration)
  - `babel.config.js` (Jest/Babel configuration for tests)

### Documentation Files (Skeleton)

- [ ] T010 [P] Create docs skeleton files (empty, structure only):
  - `docs/intro.md` (landing page stub)
  - `docs/chapter-1-physical-ai-fundamentals/index.md` (chapter overview stub)
  - `docs/getting-started/index.md` (setup guide stub)
  - `docs/getting-started/installation.md` (installation instructions stub)
  - `docs/getting-started/troubleshooting.md` (troubleshooting stub)
  - `docs/reference/glossary.md` (glossary stub)
  - `docs/reference/resources.md` (resources stub)

### Example Skeleton Files

- [ ] T011 [P] Create example files (empty skeletons with structure comments):
  - `examples/chapter-1/lesson-1-example-1.js`
  - `examples/chapter-1/lesson-1-example-2.js`
  - `examples/chapter-1/lesson-1-example-3.js`
  - `examples/chapter-1/lesson-2-example-1.js`
  - `examples/chapter-1/lesson-2-example-2.js`
  - `examples/chapter-1/lesson-2-example-3.js`
  - `examples/chapter-1/lesson-3-example-1.js`
  - `examples/chapter-1/lesson-3-example-2.js`
  - `examples/chapter-1/lesson-3-example-3.js`

### README & Contributing

- [ ] T012 Create `README.md` with project overview, quick start instructions, tech stack description
- [ ] T013 Create `CONTRIBUTING.md` with contribution guidelines, PR checklist, code of conduct
- [ ] T014 Create `LICENSE` file (choose appropriate license for project)

**Checkpoint**: Repository initialized; all files exist; `npm install` succeeds; `npm run build` produces initial static site

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build core Docusaurus infrastructure, custom MDX components, testing framework

### Docusaurus Configuration

- [ ] T015 Fill `docusaurus.config.js` with complete configuration:
  - Site metadata (title, tagline, URL, baseURL)
  - Preset configuration with MDX support
  - Theme customization
  - Markdown settings (mermaid: true)
  - Navbar and footer configuration
  - Color scheme settings (light/dark mode)
  - Version file: `versions.json` (initially ["current"])

- [ ] T016 Configure `sidebars.js` to auto-generate sidebar navigation:
  - Intro doc
  - Getting Started category (installation, environment-setup, troubleshooting)
  - Chapter 1 category with 3 lesson placeholders
  - Reference category (glossary, resources)

### Custom MDX Components

- [ ] T017 [P] Create `src/components/CodeExample.jsx` component:
  - Accept props: title, file (path), language
  - Render code block with syntax highlighting
  - Include "Copy" button functionality
  - Display file reference path
  - Support dynamic code loading from files

- [ ] T018 [P] Create `src/components/Diagram.jsx` component:
  - Accept props: type ("mermaid" or "svg"), diagram (source code), caption
  - Render Mermaid diagrams inline
  - Support SVG file rendering
  - Include caption below diagram
  - Add aria-label for accessibility

- [ ] T019 [P] Create `src/components/LearningObjectives.jsx` component:
  - Accept props: objectives (array), timeEstimate (string)
  - Render as styled card with bullet points
  - Display estimated completion time
  - Use CSS module for styling

- [ ] T020 [P] Create `src/components/TryThis.jsx` component:
  - Accept props: suggestions (array of strings)
  - Render as highlighted box with numbered suggestions
  - Support expandable sections for hints (optional)

- [ ] T021 [P] Create `src/components/KeyTakeaways.jsx` component:
  - Accept props: bullets (array of strings)
  - Render as styled summary section
  - Use checkmark icons for visual appeal

- [ ] T022 [P] Create `src/components/Checkpoint.jsx` component:
  - Accept props: questions (array of {q, a, hints?})
  - Render Q&A with expandable answers
  - Support hint display for each question
  - Track user interaction (optional)

- [ ] T023 Create `src/components/index.js` to export all components:
  - Import and re-export CodeExample, Diagram, LearningObjectives, TryThis, KeyTakeaways, Checkpoint

### Component Styling

- [ ] T024 Create `src/components/styles/components.module.css` with styles for all custom components:
  - CodeExample styling (syntax highlighting, borders, padding)
  - Diagram styling (centering, caption styling)
  - LearningObjectives styling (card appearance, time display)
  - TryThis styling (highlighted box, numbered list)
  - KeyTakeaways styling (checkmarks, bullet spacing)
  - Checkpoint styling (Q&A accordion, expandable answers)
  - CSS variables for colors (light/dark mode compatibility)

- [ ] T025 Create `src/css/custom.css` for global custom styles:
  - Color variables (primary, secondary, accent)
  - Typography settings
  - Dark mode overrides
  - Print styles

### Testing Infrastructure

- [ ] T026 Create `jest.config.js` with configuration for:
  - Test environment (node or jsdom)
  - Module paths
  - Transform setup
  - Test match patterns
  - Coverage settings (optional)

- [ ] T027 Create `tests/examples/` directory structure and `jest.setup.js` for test utilities:
  - Helper function to load and run example files
  - Helper function to capture console output
  - Assertion helpers for expected output comparison

- [ ] T028 Create `tests/integration/setup.test.js` to validate development environment:
  - Check Node.js version (18+)
  - Check npm packages installed
  - Verify file structure exists
  - Test that Docusaurus can start

### CI/CD Pipeline

- [ ] T029 Create `.github/workflows/test-examples.yml`:
  - Trigger: on push and pull_request to main
  - Job: Run `npm run test:examples` on Node.js 18.x, 20.x
  - Report results in PR

- [ ] T030 Create `.github/workflows/build-docs.yml`:
  - Trigger: on push and pull_request
  - Job: Run `npm run build`
  - Verify Docusaurus build succeeds
  - Upload build artifacts

- [ ] T031 Create `.github/workflows/validate-links.yml`:
  - Trigger: after build-docs.yml completes
  - Job: Run `npm run validate:links` on build/ output
  - Report broken links in PR

- [ ] T032 Update `package.json` scripts with full CI/CD command:
  - `ci: npm run test:examples && npm run build && npm run validate:links`

**Checkpoint**: Docusaurus builds successfully; all components export; test infrastructure works; CI/CD pipelines trigger on PR

---

## Phase 3: User Story 1 (P1) - Reader Learns AI Fundamentals Through Hands-On Examples

**Goal**: Create Lesson 1 with working examples, visual diagrams, and self-assessment so readers can learn core AI concepts through hands-on, runnable code.

**Independent Test**: New reader can read Lesson 1 from start to finish, run each of 3 examples without external setup, modify code per "Try This" suggestions, and answer checkpoint questions successfully (80%+ understanding).

### Lesson 1: Fundamentals - Examples Implementation

- [ ] T033 [US1] Implement `examples/chapter-1/lesson-1-example-1.js` - "Your First AI Program":
  - Simple pipeline demonstration (input → model → output)
  - Show basic parameter effect on output
  - ~35 lines, no external dependencies
  - Print input, transformation, output
  - Export { run(), expectedOutput } for testing

- [ ] T034 [US1] Implement `examples/chapter-1/lesson-1-example-2.js` - "Understanding Parameters":
  - Build on Example 1 with multiple parameters
  - Demonstrate how parameter changes affect behavior
  - ~50 lines, educational focus
  - Comment each section
  - Export test fixtures

- [ ] T035 [US1] Implement `examples/chapter-1/lesson-1-example-3.js` - "Scaling Your Model":
  - Advanced parameter configuration
  - Show practical application
  - ~65 lines, still under 100 line limit
  - Include realistic output
  - Export test fixtures

### Lesson 1: Fundamentals - Content Development

- [ ] T036 [US1] Create `docs/chapter-1-physical-ai-fundamentals/lesson-1-fundamentals.md` with full lesson content:
  - Learning Objectives section (3-5 bullets, time estimate 25 minutes)
  - Concept Overview (200-300 words on AI pipeline basics)
  - Visual Explanation (Mermaid diagram: input → model → output)
  - Example 1 section with CodeExample component (points to lesson-1-example-1.js)
  - Example 2 section with description and CodeExample component
  - Example 3 section with description and CodeExample component
  - Try This Modifications (3-5 suggestions for reader to try)
  - Key Takeaways section (3-4 bullet points)
  - Checkpoint section with 3-5 self-assessment questions

### Lesson 1: Fundamentals - Diagrams

- [ ] T037 [US1] Create Mermaid diagram for AI pipeline concept:
  - Show input, model, output flow
  - Include parameters as input to model
  - Add to lesson-1-fundamentals.md in appropriate section
  - Verify renders in Docusaurus build

- [ ] T038 [US1] [P] Create diagram for parameter effects (optional, if time):
  - Show how different parameter values produce different outputs
  - Illustrate concept visually before code examples

### Lesson 1: Fundamentals - Testing

- [ ] T039 [US1] Create `tests/examples/chapter-1-lesson-1.test.js` with tests for all 3 examples:
  - Test Example 1 runs without errors and produces expected output
  - Test Example 2 runs without errors and produces expected output
  - Test Example 3 runs without errors and produces expected output
  - Run tests: `npm run test:examples` should pass all 3 tests

**Checkpoint**: Lesson 1 complete and independently testable. Reader can learn core AI pipeline concepts through working examples.

---

## Phase 4: User Story 2 (P2) - Reader Understands Concepts Across Multiple Learning Styles

**Goal**: Ensure Lesson 2 content is accessible to visual learners (diagrams), textual learners (prose), and hands-on learners (code examples). All learning modalities must be present.

**Independent Test**: Reader accessing Lesson 2 can understand core concepts through (1) visual diagram alone, (2) prose explanation alone, or (3) code examples alone, with equal understanding level.

### Lesson 2: Core Concepts & Intuition - Examples Implementation

- [ ] T040 [US2] Implement `examples/chapter-1/lesson-2-example-1.js` - "Building Intuition":
  - Expand on Lesson 1 concepts with intermediate complexity
  - Show common patterns in AI systems
  - ~50 lines, clear educational flow
  - Demonstrate concept learned in Lesson 1 applied to new scenario
  - Export test fixtures

- [ ] T041 [US2] Implement `examples/chapter-1/lesson-2-example-2.js` - "Intermediate Patterns":
  - Build on Example 1 with additional complexity
  - Show variations and extensions
  - ~65 lines, introduce intermediate concepts
  - Comment explain patterns being demonstrated
  - Export test fixtures

- [ ] T042 [US2] Implement `examples/chapter-1/lesson-2-example-3.js` - "Applying Concepts":
  - Practical application combining Lesson 1 + 2 concepts
  - ~75 lines, show real-world scenario
  - Output demonstrates value of learned concepts
  - Export test fixtures

### Lesson 2: Core Concepts & Intuition - Content Development

- [ ] T043 [US2] Create `docs/chapter-1-physical-ai-fundamentals/lesson-2-core-concepts.md` with:
  - Learning Objectives (3-5 bullets, time estimate 30 minutes)
  - Concept Overview (200-300 words, plain language, define new terms)
  - Visual Explanation (multiple diagrams showing concept progression)
  - 3 working examples (with CodeExample components)
  - Ensure prose alone explains concepts without code
  - Try This Modifications (4-5 concrete suggestions)
  - Key Takeaways (3-4 summarizing bullets)
  - Checkpoint (4 self-assessment questions)

### Lesson 2: Core Concepts & Intuition - Diagrams (Multi-Modal)

- [ ] T044 [US2] Create Mermaid diagrams for Lesson 2 concepts:
  - Main concept flowchart (visual path through lesson)
  - Progression diagram (showing how Lesson 1 builds to Lesson 2)
  - Process diagram (visual representation of core concepts)
  - Ensure diagrams are clear, focused (5-7 elements max)

- [ ] T045 [US2] [P] Create supporting visual assets (if needed):
  - Simple SVG illustrations for complex concepts
  - Ensure alt text for all visuals

### Lesson 2: Core Concepts & Intuition - Testing

- [ ] T046 [US2] Create `tests/examples/chapter-1-lesson-2.test.js` with tests for Examples 1-3:
  - Test each example runs without errors
  - Verify expected output matches actual output
  - Run: `npm run test:examples` should pass all

**Checkpoint**: Lesson 2 complete with multi-modal content. Visual learners have diagrams; textual learners have clear prose; hands-on learners have 3 working examples.

---

## Phase 5: User Story 3 (P3) - Reader References Book and Finds Material Current and Correct

**Goal**: Ensure all code examples work on Windows/macOS/Linux, all links are valid, and setup instructions produce working environment. Book has zero broken examples and zero broken links.

**Independent Test**: Fresh reader follows setup instructions; runs all 9 examples from Lesson 1 & 2; verifies all internal/external links resolve; confirms 0 broken code, 0 broken links.

### Lesson 3: Building Your AI Intuition - Examples Implementation

- [ ] T047 [US3] Implement `examples/chapter-1/lesson-3-example-1.js` - "Practical Applications":
  - Apply Lesson 1-2 concepts to real-world scenario
  - ~60 lines, build intuition through application
  - Show value of learned concepts
  - Comments explain intuition-building steps
  - Export test fixtures

- [ ] T048 [US3] Implement `examples/chapter-1/lesson-3-example-2.js` - "Advanced Intuition":
  - Build on Example 1 with deeper complexity
  - ~75 lines, demonstrate advanced patterns
  - Show connections between concepts
  - Clear output illustrating intuition being built
  - Export test fixtures

- [ ] T049 [US3] Implement `examples/chapter-1/lesson-3-example-3.js` - "Experimentation":
  - Final example encouraging modification and experimentation
  - ~80 lines, open-ended learning
  - Include notes on how to experiment safely
  - Export test fixtures

### Lesson 3: Building Your AI Intuition - Content Development

- [ ] T050 [US3] Create `docs/chapter-1-physical-ai-fundamentals/lesson-3-building-intuition.md` with:
  - Learning Objectives (3-5 bullets, time estimate 35 minutes)
  - Concept Overview (300 words, connect Lessons 1-2, preview new applications)
  - Visual Explanation (2-3 diagrams showing intuition-building progression)
  - 3 working examples with clear educational progression
  - Try This Modifications (5 suggestions for deepening understanding)
  - Key Takeaways (3-4 bullets connecting all lessons)
  - Checkpoint (5 self-assessment questions covering all 3 lessons)

### Lesson 3: Building Your AI Intuition - Diagrams & Visuals

- [ ] T051 [US3] Create comprehensive diagrams for Lesson 3:
  - Integration diagram (how Lessons 1, 2, 3 connect)
  - Advanced concept flowchart
  - Application scenario diagram
  - Ensure all are Mermaid-rendered for consistency

### Lesson 3: Building Your AI Intuition - Testing

- [ ] T052 [US3] Create `tests/examples/chapter-1-lesson-3.test.js` with tests for Examples 1-3:
  - Test each example runs without errors
  - Test on multiple Node.js versions (18.x, 20.x in CI/CD)
  - Verify expected output matches actual
  - Run: `npm run test:examples` should pass all

### Cross-Platform Validation

- [ ] T053 [US3] Validate all 9 examples run on Windows/macOS/Linux:
  - Test in CI/CD matrix (node: [18.x, 20.x], os: [windows, ubuntu, macos])
  - Document any platform-specific requirements
  - All examples must run without modification

### Setup Instructions & Link Validation

- [ ] T054 [US3] Complete `docs/getting-started/installation.md` with step-by-step setup:
  - Node.js installation links and verification
  - npm package installation
  - Docusaurus startup command
  - Example running instructions
  - Estimated time: <5 minutes
  - Include platform-specific notes (Windows, macOS, Linux)

- [ ] T055 [US3] Complete `docs/getting-started/environment-setup.md` with environment configuration:
  - Optional tools (.nvmrc usage, nvm setup)
  - IDE setup suggestions
  - Troubleshooting common issues
  - Verification checklist (user can test setup works)

- [ ] T056 [US3] Complete `docs/getting-started/troubleshooting.md` with solutions for:
  - Node.js version issues
  - npm install failures
  - Port already in use
  - Example execution failures
  - Docusaurus build errors
  - Link validation errors

- [ ] T057 [US3] Run link validation and fix all broken links:
  - Execute: `npm run validate:links`
  - Fix any 404s or redirects in docs
  - Verify all external links are current
  - Document skipped links (dynamic links) if any

- [ ] T058 [US3] End-to-end validation test of setup instructions:
  - Follow setup instructions from clean environment
  - Run all 9 examples
  - Verify all links resolve
  - Document any issues found
  - Update instructions based on findings

**Checkpoint**: Chapter 1 complete (all 3 lessons). All examples work on Windows/macOS/Linux. All links valid. Setup <5 minutes. Zero broken code, zero broken links.

---

## Phase 6: Chapter Overview & Reference Content

**Purpose**: Create supporting content (chapter overview, glossary, resources) to complete the book.

### Chapter Overview

- [ ] T059 Complete `docs/chapter-1-physical-ai-fundamentals/index.md` with chapter-level content:
  - Chapter title and description
  - What readers will learn in this chapter
  - Time estimate (sum of lesson times: ~90 minutes)
  - Learning paths (read sequentially OR suggest optional paths)
  - Prerequisites (basic programming knowledge)
  - Link to each of 3 lessons

### Reference Content

- [ ] T060 [P] Complete `docs/reference/glossary.md` with key terms:
  - Define all technical terms from Chapter 1
  - Format: **Term**: Definition (1-2 sentences)
  - Organize alphabetically or by lesson
  - Include at least 15-20 terms

- [ ] T061 [P] Complete `docs/reference/resources.md` with:
  - Links to external learning resources (if applicable)
  - Further reading suggestions
  - Tool/library documentation links (all verified)
  - Maintain link validation (no 404s)

### Getting Started Overview

- [ ] T062 Complete `docs/getting-started/index.md` with:
  - Overview of setup process
  - Quick links to installation and troubleshooting
  - Estimated total setup time
  - What you'll be able to do after setup

### Landing Page

- [ ] T063 Complete `docs/intro.md` with:
  - Welcome message
  - Book description (for beginners/intermediate)
  - What readers will learn
  - Quick start button/link
  - Navigation guidance (where to start)

**Checkpoint**: All supporting documentation complete. Navigation structure ready.

---

## Phase 7: Documentation & Final Validation

**Purpose**: Ensure project is ready for publication with complete documentation and validation.

### Documentation Files

- [ ] T064 [P] Finalize `README.md` with:
  - Project description
  - Quick start (5 minute setup)
  - Feature list (hands-on examples, cross-platform, CI/CD tested)
  - Technology stack
  - Development workflow
  - Contributing guidelines link
  - License info

- [ ] T065 [P] Finalize `CONTRIBUTING.md` with:
  - Contribution types (reporting issues, submitting PRs, writing content)
  - PR checklist (examples tested, links valid, content reviewed)
  - Code of conduct
  - Development workflow (branch naming, commit style)
  - Contact/support info

- [ ] T066 [P] Create or update `LICENSE` file (choose and implement appropriate license)

### Content Quality Review

- [ ] T067 Review all lesson content for:
  - Clarity (plain language, defined terms, <100 char titles)
  - Completeness (all sections present per specification)
  - Consistency (lesson format, terminology, examples)
  - Correctness (concepts accurately explained, no typos)

- [ ] T068 Review all code examples for:
  - Syntax correctness (no JS/Python errors)
  - Completeness (can run standalone without modification)
  - Comments (non-obvious logic explained)
  - Platform compatibility (Windows/macOS/Linux support)
  - Test coverage (every example has a test)

- [ ] T069 Review all diagrams for:
  - Clarity (concept clearly illustrated)
  - Completeness (all key concepts have diagrams)
  - Consistency (styling, colors, fonts)
  - Rendering (verify Mermaid syntax is correct)

### Final Validation

- [ ] T070 Run complete CI/CD pipeline locally:
  - `npm run ci` (tests + build + links)
  - Verify all gates pass
  - Fix any remaining failures
  - Document any deviations

- [ ] T071 Build production output and verify:
  - `npm run build` produces build/ directory
  - All pages render correctly
  - All links work in built output
  - Page load performance acceptable (<2 sec on 3G)

- [ ] T072 Create summary document with:
  - Feature completion checklist (all spec requirements met)
  - Test results (all examples pass, all links valid)
  - Known limitations (if any)
  - Performance metrics (build time, page load, example run time)

**Checkpoint**: Project complete and validated. Ready for publication.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and optimizations affecting multiple lessons/components.

### Performance & Optimization

- [ ] T073 [P] Optimize Docusaurus build performance:
  - Minimize CSS/JS bundle sizes
  - Enable gzip compression
  - Optimize image sizes (if any)
  - Verify build time <30 seconds

- [ ] T074 [P] Optimize page load performance:
  - Verify page load <2 seconds on 3G
  - Check Core Web Vitals
  - Enable caching headers (if deploying)

### Accessibility & Testing

- [ ] T075 [P] Verify accessibility (A11y) compliance:
  - Check color contrast ratios
  - Verify alt text on all images/diagrams
  - Test keyboard navigation
  - Run axe-core or similar accessibility scanner

- [ ] T076 [P] Test on multiple browsers:
  - Chrome/Chromium
  - Firefox
  - Safari
  - Mobile browsers (iOS Safari, Chrome Android)

### Documentation Updates

- [ ] T077 [P] Update `quickstart.md` in specs/ with:
  - Final setup instructions verified to work
  - Update any paths or commands that changed
  - Add tips from troubleshooting findings

- [ ] T078 [P] Create DEPLOYMENT.md with:
  - Instructions for deploying built site
  - Supported hosting options (Netlify, Vercel, GitHub Pages)
  - Environment variables (if needed)
  - CI/CD integration (GitHub Actions)

- [ ] T079 [P] Create MAINTENANCE.md with:
  - How to update content (lesson editing)
  - How to add new examples
  - How to add new lessons (for future chapters)
  - Link checking procedure
  - Example validation procedure

### Additional Polish

- [ ] T080 [P] Verify dark mode functionality:
  - All components render correctly in dark mode
  - Text contrast sufficient
  - Code syntax highlighting correct

- [ ] T081 [P] Test search functionality (if enabled):
  - Verify Docusaurus search works
  - Test searching for concepts, examples, terms
  - Verify results are relevant

- [ ] T082 [P] Create GitHub issue templates:
  - Bug report template
  - Feature request template
  - Content issue template

**Checkpoint**: All lessons polished. Performance optimized. Accessibility verified. Documentation complete.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-5)**: All depend on Foundational phase completion
  - US1 (P1): Can start after Foundational - no story dependencies
  - US2 (P2): Can start after Foundational - builds on US1 concepts (independent implementation)
  - US3 (P3): Can start after Foundational - tests US1 + US2 (independent implementation)
  - All 3 stories can run in parallel with separate developers
- **Chapter Overview (Phase 6)**: Depends on all 3 user stories
- **Documentation (Phase 7)**: Depends on all content complete
- **Polish (Phase 8)**: Depends on Phase 7 complete

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies on other stories
- **User Story 2 (P2)**: Independent from US1 (but builds on same lesson concepts)
- **User Story 3 (P3)**: Validates US1 + US2 (independent task set)

### Within Each User Story

- Examples before content (code must exist to reference)
- Diagrams before example sections (visual context first)
- Content development includes all example references
- Tests after examples complete

### Parallel Opportunities

**Phase 1 Setup**: All [P] tasks can run in parallel (T002-T004, T010-T011)

**Phase 2 Foundational**: All [P] component tasks can run in parallel (T017-T022)

**Phase 3 User Story 1**:
- Examples can develop in parallel: T033, T034, T035
- Content + diagrams can develop in parallel: T036, T037
- All can merge into tests: T039

**Phase 4 User Story 2**:
- Examples parallel: T040, T041, T042
- Content + diagrams parallel: T043, T044
- Examples + content in parallel (different team members)
- Merge into tests: T046

**Phase 5 User Story 3**: Same parallelization as US2

**Phase 8 Polish**: All [P] optimization tasks can run in parallel (T073-T082)

---

## Parallel Example: User Story 1

```bash
# Developer A: Examples
T033: Implement lesson-1-example-1.js
T034: Implement lesson-1-example-2.js
T035: Implement lesson-1-example-3.js

# Developer B: Content & Visuals (parallel with Developer A)
T036: Write lesson-1-fundamentals.md content
T037: Create Mermaid diagrams

# When both done:
T039: Write and run tests
```

Both developers work simultaneously; examples and content developed in parallel; tests run after both complete.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

**Complete to have a working MVP**:

1. **Complete Phase 1**: Setup (T001-T014) - 2-3 hours
2. **Complete Phase 2**: Foundational (T015-T032) - 4-5 hours
3. **Complete Phase 3**: User Story 1 (T033-T039) - 3-4 hours
4. **Stop and VALIDATE**: Lesson 1 is fully functional
   - Run `npm run dev` - site loads
   - Run all 3 examples
   - Answer checkpoint questions
   - NO broken links
5. **Deploy/Demo** Lesson 1 to stakeholders

**MVP Deliverable**: Chapter with 1 complete lesson (3 examples, 3 diagrams, self-assessment). Ready for reader feedback before continuing.

**Estimated time**: 10-12 hours total (1-2 days with single developer)

### Incremental Delivery

1. **Deploy MVP** (Lesson 1)
   - Get reader feedback
   - Fix any issues

2. **Add Lesson 2** (User Story 2)
   - 3-4 hours for experienced developer (following US1 pattern)
   - Incremental improvement: 2 lessons, 6 examples
   - Deploy/demo to expand audience

3. **Add Lesson 3** (User Story 3)
   - 3-4 hours
   - Complete Chapter 1: 3 lessons, 9 examples, full book functionality
   - Final QA and link validation
   - Production deployment

4. **Polish** (Phase 8)
   - 2-3 hours optimization, accessibility, performance
   - Final documentation

**Total time**: 18-25 hours (2-3 days with single developer, 1 day with 2 developers, 1 day with 3 developers)

### Parallel Team Strategy

**With 3 developers**:

```
Day 1 AM:
  All developers together: Phases 1 & 2 setup (4-5 hours)

Day 1 PM + Day 2 AM:
  Developer A: User Story 1 (P1)
  Developer B: User Story 2 (P2)
  Developer C: User Story 3 (P3)
  (All work in parallel, 3-4 hours each)

Day 2 PM:
  All developers: Phase 6 (Chapter overview, reference content) - 1 hour
  All developers: Phase 7 (Final validation) - 1 hour
  All developers: Phase 8 (Polish, optimize) - 1-2 hours

Day 3 AM: Production deployment
```

**Total time**: 3 days with 3 developers (vs 2-3 days with 1 developer if sequential)

---

## Notes

- [P] tasks = different files, no dependencies (safe to parallelize)
- [Story] label maps task to specific user story (US1, US2, US3)
- Each user story is independently completable and testable
- Verify tests pass before marking story complete
- Stop at each checkpoint to validate independently before next phase
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Constitution requirement: All examples must pass CI/CD tests before merge (blocking gate)
- Book must achieve 0 broken examples, 0 broken links before production deployment
