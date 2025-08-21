# Contributing to LifeBalance

Thank you for your interest in contributing to LifeBalance! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

We welcome contributions from the community! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (version 8 or higher)
- Git

### Setting Up Your Development Environment

1. **Fork the repository**
   - Click the "Fork" button on the GitHub repository page
   - This creates a copy of the repository in your GitHub account

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/lifebalance.git
   cd lifebalance
   ```

3. **Add the upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/lifebalance.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

## 🔧 Development Workflow

### 1. Create a Feature Branch
Always work on a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes
- Write clean, readable code
- Follow the existing code style and conventions
- Add comments where necessary
- Update documentation if needed

### 3. Test Your Changes
```bash
npm test          # Run tests
npm run build     # Ensure build works
npm start         # Test locally
```

### 4. Commit Your Changes
Use conventional commit messages:
```bash
git commit -m "feat: add new life assessment feature"
git commit -m "fix: resolve slider responsiveness issue"
git commit -m "docs: update README with new features"
```

### 5. Push and Create a Pull Request
```bash
git push origin feature/your-feature-name
```
Then create a Pull Request on GitHub.

## 📝 Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Follow ESLint rules
- Use meaningful variable and function names
- Add PropTypes for component props
- Keep components focused and single-purpose

### CSS
- Use consistent naming conventions
- Follow BEM methodology where appropriate
- Use CSS custom properties for theming
- Ensure responsive design principles

### File Naming
- Components: PascalCase (e.g., `LifeBalanceHeader.js`)
- Files: camelCase (e.g., `pageStyles.css`)
- Folders: lowercase with hyphens (e.g., `life-balance`)

## 🧪 Testing

### Writing Tests
- Write tests for new features
- Ensure existing tests pass
- Use descriptive test names
- Test edge cases and error conditions

### Running Tests
```bash
npm test                 # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
npm run test:ci         # Run tests once (for CI)
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions
- Document complex logic
- Update README for new features
- Include usage examples

### API Documentation
- Document component props
- Explain component behavior
- Provide usage examples
- Update component stories if using Storybook

## 🐛 Reporting Bugs

### Before Reporting
- Check if the bug has already been reported
- Try to reproduce the issue
- Check the console for error messages

### Bug Report Template
```markdown
**Bug Description**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.0.0]

**Additional Context**
Any other context about the problem.
```

## 💡 Suggesting Features

### Feature Request Template
```markdown
**Feature Description**
A clear description of the feature you'd like to see.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How would you like to see this implemented?

**Alternative Solutions**
Any alternative solutions you've considered?

**Additional Context**
Any other context or screenshots about the feature request.
```

## 🔄 Pull Request Process

### Before Submitting
- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] No console errors
- [ ] Responsive design works on all screen sizes

### Pull Request Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Cross-browser testing done

## Screenshots
If applicable, add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have made corresponding changes to documentation
- [ ] My changes generate no new warnings
```

## 🏷️ Version Control

### Branch Naming Convention
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/component-name` - Code refactoring
- `test/test-description` - Adding or updating tests

### Commit Message Format
Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 🚫 What Not to Do

- Don't commit directly to main/master branch
- Don't submit PRs without testing
- Don't ignore code review feedback
- Don't commit large files or dependencies
- Don't ignore linting errors

## 🆘 Getting Help

### Questions and Discussions
- Use GitHub Discussions for questions
- Join our community chat (if available)
- Check existing issues and PRs

### Code Review Process
- All PRs require review
- Address feedback promptly
- Be open to suggestions and improvements
- Ask questions if something isn't clear

## 📜 License

By contributing to LifeBalance, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

---

Thank you for contributing to LifeBalance! 🎉

If you have any questions about contributing, please open an issue or reach out to the maintainers.
