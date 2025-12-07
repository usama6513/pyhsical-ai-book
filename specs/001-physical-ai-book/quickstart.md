# Quick Start: Physical AI Book Development

**Date**: 2025-12-07
**Feature**: Physical AI Book (001-physical-ai-book)
**Estimated Setup Time**: 5 minutes
**Target Audience**: Developers getting started with book development; readers wanting to run examples locally

---

## For Readers: Run the Book Locally

### Prerequisites
- Node.js 18+ LTS ([download here](https://nodejs.org/))
- npm (comes with Node.js)
- Git (optional, for cloning)

### Setup (5 minutes)

```bash
# 1. Clone the repository
git clone <repo-url> physical-ai-book
cd physical-ai-book

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The book will open automatically at `http://localhost:3000`. Hot-reload enabled: changes appear immediately as you edit.

### Run Examples Locally

```bash
# Run a single example
node examples/chapter-1/lesson-1-example-1.js

# Run all examples with tests
npm run test:examples
```

### Stop the Server

Press `Ctrl+C` in the terminal.

---

## For Developers: Build & Validate

### Build for Production

```bash
npm run build
```

Output: `build/` directory (static HTML ready for deployment)

### Validate Everything

```bash
# Run all validation gates (this is what CI/CD runs)
npm run ci
```

This runs:
1. Example tests (Jest)
2. Documentation build (Docusaurus)
3. Link validation (linkinator)

### Common Tasks

| Task | Command | Notes |
|------|---------|-------|
| **Start local dev** | `npm run dev` | Hot-reload enabled |
| **Build production** | `npm run build` | Creates `build/` folder |
| **Serve production build** | `npm run serve` | Preview build locally |
| **Run example tests** | `npm run test:examples` | Jest on all examples |
| **Run setup validation** | `npm run test:setup` | Node.js version, npm packages |
| **Check links** | `npm run validate:links` | Broken link detection |
| **Run full CI pipeline** | `npm run ci` | All tests + build + links |
| **Format code** | `npm run format` | Prettier (optional) |
| **Lint code** | `npm run lint` | ESLint (optional) |

---

## Project Structure Overview

```
physical-ai-book/
├── docs/                          # Docusaurus documentation source
│   ├── intro.md                   # Landing page
│   ├── chapter-1-physical-ai-fundamentals/
│   │   ├── index.md               # Chapter overview
│   │   ├── lesson-1-fundamentals.md
│   │   ├── lesson-2-core-concepts.md
│   │   └── lesson-3-building-intuition.md
│   ├── getting-started/           # Setup guides
│   └── reference/                 # Glossary, resources
│
├── examples/                      # Runnable code examples
│   ├── chapter-1/
│   │   ├── lesson-1-example-1.js
│   │   ├── lesson-1-example-2.js
│   │   ├── lesson-1-example-3.js
│   │   └── ... (9 examples total)
│   └── shared/
│
├── tests/                         # Example validation & integration tests
│   ├── examples/
│   │   ├── chapter-1-lesson-1.test.js
│   │   ├── chapter-1-lesson-2.test.js
│   │   └── chapter-1-lesson-3.test.js
│   └── integration/
│       ├── setup.test.js
│       └── links.test.js
│
├── src/                           # Docusaurus custom components
│   └── components/
│       ├── CodeExample.jsx
│       ├── Diagram.jsx
│       ├── LearningObjectives.jsx
│       ├── TryThis.jsx
│       ├── KeyTakeaways.jsx
│       └── Checkpoint.jsx
│
├── specs/                         # Feature specs (development process docs)
│   └── 001-physical-ai-book/
│       ├── spec.md                # Feature specification
│       ├── plan.md                # Implementation plan
│       ├── research.md            # Technical research
│       ├── data-model.md          # Content structure
│       ├── quickstart.md          # This file
│       └── tasks.md               # Development tasks (via /sp.tasks)
│
├── .github/
│   └── workflows/                 # CI/CD pipelines
│       ├── test-examples.yml
│       ├── validate-links.yml
│       └── build-docs.yml
│
├── docusaurus.config.js           # Docusaurus configuration
├── sidebars.js                    # Navigation structure
├── package.json                   # Dependencies and scripts
├── .nvmrc                         # Node.js version (18)
└── README.md                      # Project overview
```

---

## Writing a New Lesson

### Lesson Template (Copy & Customize)

Create file: `docs/chapter-1-physical-ai-fundamentals/lesson-X-<title>.md`

```mdx
---
title: "<Lesson Title>"
---

# <Lesson Title>

<LearningObjectives
  objectives={[
    "First objective",
    "Second objective",
    "Third objective"
  ]}
  timeEstimate="30 minutes"
/>

## Concept Overview

[2-3 paragraph plain-language explanation of the concept]

## Visual Explanation

<Diagram
  type="mermaid"
  diagram={`graph LR
    A[Input] --> B[Process]
    B --> C[Output]
  `}
  caption="Brief caption explaining the diagram"
/>

## Example 1: <Example Title>

<CodeExample
  title="<Short Description>"
  file="lesson-X-example-1.js"
  language="javascript"
/>

## Example 2: <Example Title>

[Second example...]

## Example 3: <Example Title>

[Third example...]

## Try This Modifications

<TryThis
  suggestions={[
    "Change parameter X to value Y and observe...",
    "Modify line N to do...",
    "Experiment with..."
  ]}
/>

## Key Takeaways

<KeyTakeaways
  bullets={[
    "Main concept 1",
    "Main concept 2",
    "Main concept 3"
  ]}
/>

## Check Your Understanding

<Checkpoint
  questions={[
    {
      q: "Question 1?",
      a: "Answer 1"
    },
    {
      q: "Question 2?",
      a: "Answer 2"
    },
    {
      q: "Question 3?",
      a: "Answer 3"
    }
  ]}
/>
```

### Creating Example Code

Create file: `examples/chapter-1/lesson-X-example-Y.js`

**Requirements**:
- Syntactically valid JavaScript
- Under 100 lines
- No external dependencies (or list in data-model.md)
- Runnable without modification: `node examples/chapter-1/lesson-X-example-Y.js`
- Include inline comments explaining non-obvious logic
- Works on Windows, macOS, and Linux

**Example Template**:

```javascript
// Lesson X, Example Y: <Description>
// This example demonstrates [key concept]

// Setup: Define variables
const input = 10;
const multiplier = 2;

// Process: Apply transformation
const output = input * multiplier;

// Output: Display results
console.log(`Input: ${input}`);
console.log(`Multiplier: ${multiplier}`);
console.log(`Output: ${output}`);

// Make it testable (optional)
module.exports = { run: () => output, expectedOutput: 20 };
```

### Writing Tests

Create file: `tests/examples/chapter-1-lesson-X.test.js`

```javascript
describe('Lesson X: <Title>', () => {
  test('Example Y runs without errors', () => {
    const result = require('../../examples/chapter-1/lesson-X-example-Y.js');
    expect(result).toBeDefined();
    expect(result.run()).toBe(result.expectedOutput);
  });
});
```

Run tests: `npm run test:examples`

---

## Troubleshooting

### "Node.js is not installed"
- Download from https://nodejs.org/ (choose LTS)
- Verify: `node --version` (should be 18+)

### "npm install fails"
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again

### "Port 3000 is in use"
- Kill the process using port 3000:
  - **macOS/Linux**: `lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9`
  - **Windows**: `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`
- Or change port: `npm run dev -- --port 3001`

### "Examples fail to run"
- Check Node.js version: `node --version` (must be 18+)
- Check file exists: `ls examples/chapter-1/lesson-X-example-Y.js`
- Check syntax: `node examples/chapter-1/lesson-X-example-Y.js` (should produce output or error message)
- Run tests: `npm run test:examples` (shows which examples fail)

### "Docusaurus build fails"
- Check for MDX syntax errors: Look at error message from `npm run build`
- Common issues:
  - Unmatched braces in JSX code blocks
  - Missing import statements for components
  - Unclosed tags
- Verify: `npm run build` (shows line numbers for errors)

### "Links fail validation"
- Run: `npm run validate:links`
- Check for:
  - Typos in URLs
  - File paths that don't exist
  - Links to deleted pages
- Fix: Correct URLs in MDX files, rebuild, validate again

---

## CI/CD Pipeline

**What happens when you create a PR**:

1. **GitHub Actions runs automatically**:
   - ✅ Example tests pass (Jest on all examples)
   - ✅ Docusaurus builds successfully
   - ✅ Links are valid (no 404s)

2. **If any gate fails**:
   - PR is blocked from merging
   - Error messages show which test failed
   - Fix and push to same branch (PR auto-updates)

3. **If all gates pass**:
   - PR is approved and merged to main
   - Main branch always has working code/docs

**Running CI locally** (before pushing):

```bash
npm run ci  # Runs all validation gates
```

---

## Next Steps

1. **Read the Feature Spec**: `specs/001-physical-ai-book/spec.md` (understand user stories & requirements)
2. **Review the Implementation Plan**: `specs/001-physical-ai-book/plan.md` (architecture & structure)
3. **Check the Data Model**: `specs/001-physical-ai-book/data-model.md` (content entities & validation)
4. **View Development Tasks**: `specs/001-physical-ai-book/tasks.md` (what to build next)

---

## Getting Help

- **Setup issues**: Check "Troubleshooting" section above
- **Code questions**: See `README.md` or `CONTRIBUTING.md`
- **Feature questions**: Review specs in `specs/001-physical-ai-book/`
- **API/Component docs**: Run `npm run dev` and visit `/reference/`

---

**Happy learning! 🚀**
