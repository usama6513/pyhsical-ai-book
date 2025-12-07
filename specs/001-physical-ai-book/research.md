# Research: Physical AI Book Implementation

**Date**: 2025-12-07
**Feature**: Physical AI Book (001-physical-ai-book)
**Status**: Complete (no NEEDS CLARIFICATION items)

## 1. Docusaurus v3 Setup & Configuration

**Decision**: Use Docusaurus v3 (current stable LTS) with preset-classic and MDX 2.x

**Rationale**:
- Constitution mandates Docusaurus v3+
- v3 includes native MDX 2.x support (better performance than Docusaurus v2)
- preset-classic provides sensible defaults (theme, plugins, structure)
- Large ecosystem of plugins for our use case (mermaid, math, custom components)

**Alternatives Considered**:
- Docusaurus v2: Older, more legacy ecosystem; v3 is drop-in improvement
- Static site generators (Hugo, Jekyll, Next.js): Would require custom MDX setup; Docusaurus has out-of-box support

**Best Practices Identified**:
- Use monorepo structure if multiple projects needed (not applicable here; single project)
- Enable MDX in docusaurus.config.js with `markdown: { mermaid: true }`
- Use sidebars.js for auto-generated navigation (supports nested categories, auto-linking)
- Place custom components in src/components/ (Docusaurus resolves @site/ aliases)
- Use docusaurus.config.js baseUrl for deployment path flexibility

**Implementation Approach**:
- Initialize via `npx create-docusaurus@latest physical-ai-book classic`
- Customize docusaurus.config.js for: site title, navigation, MDX plugins, custom CSS
- Add @docusaurus/plugin-mermaid-diagram for diagram rendering
- Configure TypeScript or JSX for custom components (src/components/)

---

## 2. MDX Components Architecture

**Decision**: Build 6 reusable React components for lesson formatting (CodeExample, Diagram, LearningObjectives, TryThis, KeyTakeaways, Checkpoint)

**Rationale**:
- Constitution requires "Documentation as Code" (examples tested, structure mirrored)
- Specification requires consistent lesson format across all lessons
- Components ensure consistent styling, validation, and user experience
- Props-based approach allows lesson authors to specify content without worrying about HTML/CSS

**Alternatives Considered**:
- Hardcode HTML/CSS in lesson files: Leads to inconsistency, maintenance burden, duplication
- Use Docusaurus admonitions only: Too limited; can't embed interactive code elements

**Best Practices Identified**:
- Export components from src/components/index.js for single import
- Use PropTypes for validation (TypeScript optional)
- Use CSS Modules for scoped styling (no global CSS conflicts)
- Make components responsive (mobile-first design)
- Support both inline (MDX) and external file (require) code examples

**Implementation Approach**:
```
src/components/
├── CodeExample.jsx          # Syntax highlighting + copy button + file reference
├── Diagram.jsx              # Mermaid rendering + caption
├── LearningObjectives.jsx   # Bulleted list + time estimate
├── TryThis.jsx              # Styled box with modification suggestions
├── KeyTakeaways.jsx         # Summary bullets
├── Checkpoint.jsx           # Self-assessment (Q&A with expandable answers)
├── index.js                 # Export all components
└── styles/
    └── components.module.css # Shared styling
```

Each component:
- Accepts props for content (title, text, code, etc.)
- Validates props with PropTypes
- Renders with semantic HTML + accessibility attributes (aria-labels, role)
- Uses CSS variables for theme colors (light/dark mode support)

---

## 3. Example Testing & CI/CD Validation

**Decision**: Use Jest for testing code examples; validate syntax + execution output

**Rationale**:
- Constitution (Non-Negotiable Principle V): "All executable examples must be automatically tested in CI/CD"
- Jest is standard for Node.js/JavaScript testing; supports both CommonJS and ES modules
- Can test examples as-is without modification (each example must be runnable)

**Alternatives Considered**:
- ESLint only: Catches syntax errors, not logic errors or output correctness
- Manual testing: Violates non-negotiable testing principle; not reproducible

**Best Practices Identified**:
- Each example file is independent module; tests require() and execute
- Capture console.output or return values for comparison against expected output
- Test structure: describe("Lesson N", () => { test("Example N runs", () => { ... }) })
- Use test matrix to validate on Node.js LTS versions (18.x, 20.x)
- Include setup tests to validate development environment is correct

**Implementation Approach**:
```
tests/examples/
├── chapter-1-lesson-1.test.js   # Tests for lesson-1 examples (1, 2, 3)
├── chapter-1-lesson-2.test.js   # Tests for lesson-2 examples
└── chapter-1-lesson-3.test.js   # Tests for lesson-3 examples

tests/integration/
├── setup.test.js                # Validates Node.js version, npm packages
└── links.test.js                # Validates links in published output (post-build)

Test Example:
describe('Lesson 1: Fundamentals', () => {
  test('Example 1 runs without errors', () => {
    const result = require('../../examples/chapter-1/lesson-1-example-1.js');
    expect(result).toBeDefined();
    expect(result.output).toMatch(/expected pattern/);
  });
});
```

---

## 4. Cross-Platform Code Examples

**Decision**: Use platform-detection pattern with fallbacks; avoid OS-specific commands in examples

**Rationale**:
- Constitution: "Support multiple platforms and operating systems in examples (Windows, macOS, Linux)"
- Specification: "Examples must support multiple platforms (Windows, macOS, Linux) or explicitly document platform-specific requirements"
- JavaScript examples can be written to be platform-agnostic

**Alternatives Considered**:
- Separate examples per OS: Violates DRY principle; maintenance burden
- Require bash/shell for all examples: Not available on Windows (requires WSL or Git Bash)

**Best Practices Identified**:
- Use Node.js APIs instead of shell commands (e.g., fs module instead of `cat` or `type`)
- Use path.join() for file paths (handles / vs \ automatically)
- Use process.platform check if OS-specific logic needed: `if (process.platform === 'win32') { ... }`
- Test examples on all three platforms in CI/CD (matrix testing)
- For Python examples: Use pathlib (cross-platform paths) and subprocess (instead of shell commands)

**Implementation Approach**:
```javascript
// ✅ Cross-platform example
const fs = require('fs').promises;
const path = require('path');

async function readConfig() {
  const configPath = path.join(__dirname, 'config.json');
  const data = await fs.readFile(configPath, 'utf-8');
  return JSON.parse(data);
}

// ❌ Platform-specific (avoid)
// const data = require('child_process').execSync('cat config.json');
```

---

## 5. Link Validation & Broken Link Prevention

**Decision**: Automated link validation in CI/CD; block merge if broken links detected

**Rationale**:
- Constitution: "Zero broken links in published book"
- Specification: Success Criterion SC-003: "0% of external links... return 404 or redirect to different content"
- Links can break over time as external resources move/disappear

**Alternatives Considered**:
- Manual review: Not reproducible; easy to miss in large documents
- Post-deployment testing only: Broken links already published to users

**Best Practices Identified**:
- Use linkinator for fast, offline link checking (checks for file references, http requests)
- Run on built output (build/ directory after `docusaurus build`)
- Test both internal links (markdown references) and external links (http/https)
- Allow ignore list for dynamic links or known false positives
- Run in CI/CD on every PR before merge

**Implementation Approach**:
```bash
# .github/workflows/validate-links.yml
- name: Validate Links
  run: npx linkinator build/ --markdown --silent
```

---

## 6. Development Workflow & Local Setup

**Decision**: Streamlined npm scripts for development; setup time under 5 minutes

**Rationale**:
- Constitution: "Examples must be runnable in under 5 minutes of setup"
- Specification: "Setup instructions can be followed by a fresh user in under 5 minutes"
- Low friction encourages reader engagement and contribution

**Alternatives Considered**:
- Docker container setup: Adds 10-15 minutes (image download/build); overkill for simple npm project
- Complex installation guide: Users give up before trying

**Best Practices Identified**:
- Provide .nvmrc file for Node.js version pinning (developers use nvm)
- Document single-command setup: `npm install && npm run dev`
- Include troubleshooting guide (npm cache, Node.js version issues)
- Validate setup end-to-end with integration tests

**Implementation Approach**:
```json
"scripts": {
  "dev": "docusaurus start",
  "build": "docusaurus build",
  "serve": "docusaurus serve",
  "test": "jest",
  "test:examples": "jest tests/examples/",
  "test:setup": "jest tests/integration/setup.test.js",
  "validate:links": "linkinator build/",
  "ci": "npm run test:examples && npm run build && npm run validate:links"
}
```

---

## 7. Diagram & Visualization Strategy

**Decision**: Use Mermaid for all architecture/concept diagrams; SVG for custom illustrations

**Rationale**:
- Mermaid: Native Docusaurus support, version-controlled (text-based), consistent with code-first philosophy
- SVG: For complex custom illustrations (Mermaid has limitations)
- Constitution: "Use diagrams, flowcharts, and visualizations liberally"

**Alternatives Considered**:
- PNG/JPG images: No version control; hard to maintain; bloated file size
- Only code, no diagrams: Violates specification requirement (SC-007: "100% of major concepts have diagrams")

**Best Practices Identified**:
- Use Mermaid for: flowcharts, state diagrams, class diagrams, sequence diagrams
- Use SVG for: custom UI illustrations, complex spatial diagrams
- Include alt text for accessibility
- Embed Mermaid inline in MDX (no separate files needed)
- Use consistent colors, fonts, styling across all diagrams

**Implementation Approach**:
```mdx
<Diagram
  type="mermaid"
  diagram={`graph LR
    Input[Input Data] --> Model[AI Model]
    Model --> Output[Prediction]
  `}
  caption="Basic AI pipeline: input, model, output"
/>
```

---

## 8. Docusaurus Deployment & Hosting Options

**Decision**: Static HTML output (build/) deployable to any CDN (Netlify, Vercel, GitHub Pages)

**Rationale**:
- Docusaurus outputs static HTML (zero dependencies at runtime)
- Fast, cheap, scalable hosting options
- No database or backend needed
- Constitution: Simple, maintainable infrastructure

**Alternatives Considered**:
- Self-hosted server: More complexity, infrastructure overhead
- Serverless platform: Unnecessary for static content

**Implementation Approach**:
- Deploy build/ directory to Netlify via GitHub push (automatic)
- Set build command: `npm run build`
- Custom domain configuration via Netlify DNS

---

## Summary: Technical Decisions Finalized

| Component | Decision | Rationale |
|-----------|----------|-----------|
| **Documentation Engine** | Docusaurus v3 + MDX 2.x | Constitution requirement; modern, stable |
| **Custom Components** | 6 React components in src/components/ | Consistent formatting; maintainable |
| **Example Testing** | Jest on Node.js LTS | Non-negotiable testing principle; reproducible |
| **Cross-Platform** | platform-detection pattern + path.join() | Support Windows/macOS/Linux equally |
| **Link Validation** | linkinator in CI/CD (blocks merge) | Zero broken links guarantee |
| **Diagrams** | Mermaid (inline) + SVG (custom) | Version-controlled; consistent |
| **Development Setup** | npm + Node.js 18+ LTS; <5 min setup | Low friction; beginner-friendly |
| **Hosting** | Static HTML to CDN (Netlify/Vercel) | Simple, scalable, cheap |

**All NEEDS CLARIFICATION items resolved. Ready for Phase 1 design completion.**
