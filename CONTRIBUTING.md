# Contributing to Physical AI Book

Thank you for your interest in contributing! This document provides guidelines for contributing.

## How to Contribute

### Reporting Issues

Found a bug or have a suggestion? Please open an issue with:
- Clear description of the problem
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Your environment (OS, Node.js version)

### Contributing Content

#### Before Starting

1. Open an issue to discuss your proposed changes
2. Get approval from maintainers
3. Fork the repository and create a feature branch

#### Content Guidelines

All contributions must follow the Constitution principles:

1. **Hands-On Learning First** - Include working, tested examples
2. **Progressive Complexity** - Build on existing concepts
3. **Clarity Over Completeness** - Use plain language, define terms
4. **Documentation as Code** - Examples are actual files, tested in CI/CD
5. **Testing & Validation** - All code must pass tests
6. **Accessibility & Inclusivity** - Multiple learning modalities

#### Lesson Structure

Every lesson must include:
```
- Learning Objectives (3-5 bullets + time estimate)
- Concept Overview (plain language, 200-300 words)
- Visual Diagram (Mermaid or SVG)
- Example 1 (basic, 30-50 lines)
- Example 2 (intermediate, 50-75 lines)
- Example 3 (advanced, up to 100 lines)
- Try This Modifications (3-5 suggestions)
- Key Takeaways (3-4 bullets)
- Checkpoint Questions (3-5 self-assessment)
```

#### Code Example Requirements

- ✅ Syntactically correct and runnable
- ✅ Works on Windows, macOS, Linux
- ✅ Under 100 lines
- ✅ Clear comments on non-obvious logic
- ✅ Independent, no external setup needed
- ✅ Passes Jest tests

### PR Checklist

Before submitting a PR, ensure:

- [ ] All examples run without modification (`node examples/chapter-1/lesson-X-example-Y.js`)
- [ ] All tests pass (`npm run test:examples`)
- [ ] No broken links (`npm run validate:links` on built output)
- [ ] Documentation builds successfully (`npm run build`)
- [ ] Content follows lesson structure
- [ ] Spelling and grammar checked
- [ ] Files follow naming conventions
- [ ] Code formatted with `npm run format`

### Development Setup

```bash
# Clone and setup
git clone <repo>
cd physical-ai-book
npm install

# Start development
npm run dev

# Run tests
npm run test:examples

# Format code
npm run format
```

### Naming Conventions

**Lesson files**: `lesson-<number>-<kebab-case-title>.md`
- Example: `lesson-1-fundamentals.md`

**Example files**: `lesson-<number>-example-<sequence>.js`
- Example: `lesson-1-example-1.js`, `lesson-2-example-3.js`

**Test files**: `chapter-<number>-lesson-<number>.test.js`
- Example: `chapter-1-lesson-1.test.js`

**Diagrams**: Inline Mermaid in MDX or `lesson-<number>-diagram-<name>.svg`
- Example: `lesson-1-diagram-pipeline.svg`

### Commit Messages

Follow conventional commits:

```
feat: add lesson 2 examples
fix: correct broken link in lesson 1
docs: update getting started guide
test: add tests for new examples
```

## Code of Conduct

- Be respectful and inclusive
- Welcome diverse perspectives
- Focus on the work, not the person
- Help others learn

## Questions?

- 📖 Check [README](./README.md) for setup
- 🐛 Open an issue for problems
- 💬 Use Discussions for questions

---

Thank you for helping make Physical AI Book better! 🙏
