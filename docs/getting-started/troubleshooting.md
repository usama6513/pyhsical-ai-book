---
sidebar_position: 4
---

# Troubleshooting

Common issues and solutions when setting up or using Physical AI Book.

## Setup Issues

### "npm install fails" or "npm ERR!"

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Remove existing installations
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**If still failing**:
- Check internet connection
- Try again in a few minutes (server might be down)
- Check disk space (needs ~500 MB)

### "Node.js is not installed" or "node: command not found"

**Solution**:
1. Download Node.js 18+ from [nodejs.org](https://nodejs.org/)
2. Install following the installer prompts
3. Restart your terminal
4. Verify: `node --version`

### "Port 3000 is already in use"

**Solution 1 - Find and kill the process**:

**macOS/Linux**:
```bash
lsof -i :3000 | grep LISTEN
# Find the PID and kill it
kill -9 <PID>
```

**Windows (PowerShell)**:
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Solution 2 - Use a different port**:
```bash
npm run dev -- --port 3001
# Then visit http://localhost:3001
```

## Development Issues

### Docusaurus won't start: "Error: ENOENT: no such file or directory"

**Solution**:
1. Ensure you're in the project directory: `cd physical-ai-book`
2. Verify `docusaurus.config.js` exists
3. Try: `npm run build` first to check for configuration errors

### Browser shows "Cannot GET /"

**Solution**:
1. Ensure dev server is running (you should see "Docusaurus website is running")
2. Check URL is `http://localhost:3000` (not `localhost:3000` without `http://`)
3. Refresh page in browser (Ctrl+R or Cmd+R)
4. Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)

### Changes don't appear when I edit files

**Solution**:
1. Check dev server is still running
2. Save the file (Ctrl+S or Cmd+S)
3. Wait 2-3 seconds for rebuild
4. Refresh browser (Ctrl+R or Cmd+R)
5. If still not working, restart dev server:
   - Press Ctrl+C to stop
   - Run `npm run dev` again

## Example Issues

### "Examples fail to run" or "node: command not found"

**Solution**:
```bash
# Verify Node.js is installed
node --version

# Run example with full path
node examples/chapter-1/lesson-1-example-1.js

# Or use npm script
npm run test:examples
```

### "Example produces no output"

**Solution**:
1. Check file exists: `ls examples/chapter-1/lesson-1-example-1.js`
2. Open file and check it has `console.log()` statements
3. Try: `node examples/chapter-1/lesson-1-example-1.js 2>&1`

### "Error: Cannot find module"

**Solution**:
1. Ensure `npm install` completed successfully
2. Try: `npm install` again
3. Check for typos in require statements in the example file

## Tests Issues

### "npm run test:examples fails"

**Solution**:
```bash
# Check that Jest is installed
npm list jest

# Clear Jest cache
npx jest --clearCache

# Run tests with verbose output
npm run test:examples -- --verbose
```

### "Tests timeout"

**Solution**:
1. Check if example takes a long time to run
2. Increase Jest timeout (if you're modifying test config):
   ```javascript
   jest.setTimeout(10000); // 10 seconds
   ```

## Build Issues

### "npm run build fails"

**Solution**:
```bash
# Clear build cache
rm -rf build/ .docusaurus/

# Rebuild
npm run build
```

**If specific error appears**: Read the error message carefully - usually points to the file with the problem

### "Build succeeds but site looks broken"

**Solution**:
```bash
# Serve the production build locally
npm run serve

# Visit http://localhost:3000
```

Then check:
1. All links work
2. Images/diagrams display
3. Code examples show correctly

## Link Validation Issues

### "npm run validate:links shows broken links"

**Solution**:
1. Build the site first: `npm run build`
2. Run: `npm run validate:links`
3. Note broken links from output
4. Find and fix in docs:
   - Typo in URL
   - File path doesn't exist
   - External link moved/deprecated
5. Commit and rebuild

## Performance Issues

### "Site loads slowly"

**Solution**:
1. Check internet connection
2. Disable browser extensions temporarily
3. Clear browser cache
4. Try different browser

### "npm run dev is slow to start"

**Solution**:
1. Close other applications to free memory
2. Check disk space (needs 1+ GB free)
3. Try fresh `npm install`:
   ```bash
   rm -rf node_modules
   npm install
   ```

## Still Having Issues?

1. **Check Documentation**: [README](../../README.md), [Installation](./installation.md)
2. **Search Issues**: [GitHub Issues](https://github.com/physical-ai-book/physical-ai-book/issues)
3. **Ask for Help**: [GitHub Discussions](https://github.com/physical-ai-book/physical-ai-book/discussions)

---

**Not finding your issue?** Let us know by opening a GitHub issue! 🤝
