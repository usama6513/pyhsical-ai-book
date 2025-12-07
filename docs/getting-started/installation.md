---
sidebar_position: 2
---

# Installation & Setup

Step-by-step guide to get the Physical AI Book running on your machine.

## Prerequisites

### Node.js Installation

1. Visit [nodejs.org](https://nodejs.org/)
2. Download **LTS version (18 or 20)**
3. Install following the installer prompts
4. Verify installation:

```bash
node --version
npm --version
```

You should see version numbers (e.g., `v18.18.0` and `9.8.1`).

### Clone or Download Repository

```bash
# Option 1: Clone with Git
git clone <repository-url>
cd physical-ai-book

# Option 2: Download ZIP and extract
# Download from GitHub → Extract → Open in terminal
cd /path/to/physical-ai-book
```

## Installation Steps

### Step 1: Install Dependencies (2 minutes)

```bash
npm install
```

This downloads all required packages (~200 MB). You'll see progress output ending with:
```
added XXX packages in XXs
```

**Troubleshooting**: If this fails, see [Troubleshooting](./troubleshooting.md)

### Step 2: Start Development Server (1 minute)

```bash
npm run dev
```

You should see output like:
```
[INFO] Docusaurus website is running at: http://localhost:3000
```

Your default browser should open automatically to `http://localhost:3000`.

### Step 3: Verify Setup Works (2 minutes)

In your browser:
- ✅ See "Physical AI Book" title
- ✅ Click through navigation
- ✅ Open a lesson page

Verify examples run:
```bash
# In a NEW terminal (keep the dev server running)
node examples/chapter-1/lesson-1-example-1.js
```

You should see output like:
```
Input: 10
Multiplier: 2
Output: 20
```

## Verification Checklist

- [ ] Node.js version is 18+
- [ ] `npm install` completed without errors
- [ ] `npm run dev` started successfully
- [ ] Browser opens to http://localhost:3000
- [ ] Book homepage displays
- [ ] Example runs without errors

## Next Steps

1. ✅ **Setup Complete!** Congratulations!
2. 📖 **Start Learning**: Open [Chapter 1](../chapter-1-physical-ai-fundamentals/index.md)
3. 🔍 **Explore Examples**: Run example files to see them in action

## Common Issues

### "Port 3000 is already in use"

Another process is using port 3000. Options:

**Option 1**: Kill the process using port 3000
- **macOS/Linux**: `lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9`
- **Windows**: `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`

**Option 2**: Use a different port
```bash
npm run dev -- --port 3001
```
Then visit `http://localhost:3001`

### "npm install fails"

Clear cache and retry:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### "node: command not found"

Node.js isn't installed or not in PATH. Verify:
```bash
which node          # macOS/Linux
where node          # Windows
```

If not found, [download and install Node.js](https://nodejs.org/)

## Optional: Using nvm (Node Version Manager)

For easier Node.js version management:

```bash
# Install nvm (macOS/Linux/WSL)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Use version from .nvmrc
nvm use

# Install if not yet installed
nvm install
```

## Getting Help

- ❓ Check [Troubleshooting](./troubleshooting.md) for common problems
- 🐛 [Report issues on GitHub](https://github.com/physical-ai-book/physical-ai-book/issues)
- 💬 [Ask in Discussions](https://github.com/physical-ai-book/physical-ai-book/discussions)

---

**All set!** Ready to learn? Start with [Chapter 1](../chapter-1-physical-ai-fundamentals/index.md) 🚀
