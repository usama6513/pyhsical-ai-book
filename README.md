# Physical AI Book

An interactive, hands-on learning book about Physical AI using Docusaurus. Learn AI concepts through working code examples you can run, modify, and experiment with.

## Quick Start

Get the book running in 5 minutes:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser
# The book will open automatically at http://localhost:3000
```

## What's Included

- 📚 **Chapter 1: Physical AI Fundamentals** - 3 progressive lessons
- 💻 **9 Working Examples** - 3 per lesson, all tested and runnable
- 📊 **Visual Diagrams** - Mermaid diagrams for every concept
- ✅ **Self-Assessment** - Checkpoint questions after each lesson
- 🖥️ **Cross-Platform** - Works on Windows, macOS, and Linux

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Basic programming knowledge

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server (hot reload enabled) |
| `npm run build` | Build production-ready static site |
| `npm run serve` | Serve the production build locally |
| `npm run test:examples` | Run all code example tests |
| `npm run validate:links` | Check for broken links |
| `npm run ci` | Run full CI pipeline (tests + build + links) |

## Project Structure

```
physical-ai-book/
├── docs/                 # Docusaurus documentation source
│   ├── intro.md
│   ├── chapter-1-physical-ai-fundamentals/
│   ├── getting-started/
│   └── reference/
├── examples/             # Runnable code examples
│   ├── chapter-1/        # 9 example files
│   └── shared/
├── tests/                # Jest tests for examples
├── src/
│   ├── components/       # Custom MDX components
│   └── css/
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

## Development Workflow

1. **Run locally**: `npm run dev`
2. **Edit files**: Changes to docs/ auto-reload in browser
3. **Run examples**: `node examples/chapter-1/lesson-1-example-1.js`
4. **Test examples**: `npm run test:examples`

## Features

✅ **Hands-On Learning** - Working code examples for every concept
✅ **Progressive Complexity** - Lessons build on each other
✅ **Cross-Platform** - All examples work on Windows, macOS, Linux
✅ **Tested Code** - Examples validated in CI/CD
✅ **Multiple Learning Styles** - Diagrams, prose, and code
✅ **Zero Broken Links** - Automated link validation

## Documentation

- [Installation & Setup](./docs/getting-started/installation.md)
- [Contributing](./CONTRIBUTING.md)
- [Troubleshooting](./docs/getting-started/troubleshooting.md)

## Technology Stack

- **Docusaurus v3** - Static site generator
- **MDX** - Markdown with JSX components
- **Mermaid** - Diagram rendering
- **Jest** - Example validation
- **Node.js 18+** - Runtime environment

## License

See LICENSE file for details.

## Support

- 📖 [Read the Documentation](http://localhost:3000) (after running `npm run dev`)
- 🐛 [Report Issues](https://github.com/physical-ai-book/physical-ai-book/issues)
- 💬 [Discussions](https://github.com/physical-ai-book/physical-ai-book/discussions)

---

**Happy learning!** 🚀
