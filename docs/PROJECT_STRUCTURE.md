# LifeBalance Project Structure

## Overview

This document provides a comprehensive overview of the LifeBalance project structure, including file organization, naming conventions, and architectural decisions.

## 📁 Root Directory Structure

```
lifebalance/
├── .github/                    # GitHub-specific configurations
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   │   ├── bug_report.md      # Bug report template
│   │   ├── feature_request.md # Feature request template
│   │   └── question.md        # Question template
│   ├── workflows/             # GitHub Actions workflows
│   │   └── ci.yml            # CI/CD pipeline
│   └── pull_request_template.md # PR template
├── docs/                      # Project documentation
│   ├── ARCHITECTURE.md        # Technical architecture
│   ├── API.md                 # API documentation
│   ├── DEPLOYMENT.md          # Deployment guide
│   └── PROJECT_STRUCTURE.md   # This file
├── public/                    # Static assets
│   ├── index.html            # Main HTML file
│   ├── LifeSmart.png         # Application logo
│   ├── favicon.ico           # Favicon
│   ├── manifest.json         # PWA manifest
│   ├── robots.txt            # SEO robots file
│   └── site.webmanifest      # Web app manifest
├── src/                       # Source code
│   ├── lifebalance/          # Main application
│   │   ├── components/       # Reusable components
│   │   │   └── LifeBalanceHeader.js # Header component
│   │   ├── pages/            # Page components
│   │   │   ├── WelcomePage.js # Welcome page
│   │   │   ├── Page2.js      # Life assessment
│   │   │   ├── Page3.js      # Money impact
│   │   │   ├── Page4.js      # Time impact
│   │   │   └── Page5.js      # Results page
│   │   ├── styles/           # CSS stylesheets
│   │   │   ├── buttons.css   # Button styles
│   │   │   ├── LifeBalance.css # Main app styles
│   │   │   ├── LifeBalanceHeader.css # Header styles
│   │   │   ├── Page2.css     # Page 2 styles
│   │   │   ├── Page3.css     # Page 3 styles
│   │   │   ├── Page5.css     # Page 5 styles
│   │   │   └── WelcomePage.css # Welcome page styles
│   │   └── LifeBalance.js    # Main app component
│   ├── App.css               # App-level styles
│   ├── App.js                # Root App component
│   ├── App.test.js           # App tests
│   ├── index.css             # Global styles
│   ├── index.js              # Application entry point
│   ├── logo.svg              # Logo SVG
│   ├── reportWebVitals.js    # Performance monitoring
│   └── setupTests.js         # Test setup
├── .gitignore                # Git ignore rules
├── CHANGELOG.md              # Version history
├── CODE_OF_CONDUCT.md        # Community guidelines
├── CONTRIBUTING.md            # Contribution guidelines
├── LICENSE                    # MIT License
├── package.json              # Dependencies and scripts
├── package-lock.json         # Locked dependencies
├── README.md                 # Project overview
└── SECURITY.md               # Security policy
```

## 🏗️ Architecture Overview

### Frontend Architecture
- **Framework**: React 18.2.0 with functional components and hooks
- **Routing**: React Router DOM for single-page application navigation
- **State Management**: React hooks (useState, useEffect) for local state
- **Styling**: Custom CSS with responsive design and modern UI patterns

### Component Architecture
- **Component Hierarchy**: App → LifeBalance → Page Components
- **Component Types**: Pages, Reusable Components, Layout Components
- **State Flow**: Local component state with prop drilling for shared data
- **Event Handling**: Callback props for parent-child communication

## 📱 Component Details

### Core Components

#### App Component (`src/App.js`)
- **Purpose**: Root application container
- **Responsibilities**: 
  - Routing setup
  - Global state management
  - Page navigation logic
- **State**: Current page, assessment scores, user progress

#### LifeBalance Component (`src/lifebalance/LifeBalance.js`)
- **Purpose**: Main application wrapper
- **Responsibilities**:
  - Page rendering logic
  - Score calculation
  - Progress tracking
- **Props**: None (self-contained)

#### LifeBalanceHeader Component (`src/lifebalance/components/LifeBalanceHeader.js`)
- **Purpose**: Application header with navigation
- **Responsibilities**:
  - Brand display
  - Progress indicator
  - Page navigation
- **Props**: `currentPage`, `totalPages`

### Page Components

#### WelcomePage (`src/lifebalance/pages/WelcomePage.js`)
- **Purpose**: Application introduction
- **Features**: Welcome message, start button, app overview
- **Props**: `onStart` callback

#### Page2 - Life Assessment (`src/lifebalance/pages/Page2.js`)
- **Purpose**: Current life satisfaction assessment
- **Features**: 7 life area sliders, progressive disclosure
- **Props**: `onSubmit`, `onStepChange` callbacks
- **State**: Scores array, revealed cards count

#### Page3 - Money Impact (`src/lifebalance/pages/Page3.js`)
- **Purpose**: Money impact assessment
- **Features**: Tutorial slide, comparison sliders
- **Props**: `baseScores`, `onSubmit`, `onStepChange`
- **State**: Tutorial step, new scores, revealed cards

#### Page4 - Time Impact (`src/lifebalance/pages/Page4.js`)
- **Purpose**: Time impact assessment
- **Features**: Tutorial slide, comparison sliders
- **Props**: `baseScores`, `onFinish`, `onStepChange`
- **State**: Tutorial step, new scores, revealed cards

#### Page5 - Results (`src/lifebalance/pages/Page5.js`)
- **Purpose**: Assessment results and recommendations
- **Features**: Score averages, impact analysis, actionable advice
- **Props**: `averages`, `biggestMoney`, `biggestTime`

## 🎨 Styling Architecture

### CSS Organization
- **Component-Specific Styles**: Each component has its own CSS file
- **Global Styles**: App-level and index-level styles
- **Utility Classes**: Reusable button and layout styles
- **Responsive Design**: Mobile-first approach with breakpoints

### Design System
- **Color Palette**: Primary purple (#B79BFF), secondary blue (#97A1FF)
- **Typography**: Responsive font sizing with clamp()
- **Layout**: CSS Grid and Flexbox for flexible layouts
- **Components**: Glassmorphism design with backdrop blur

### Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

## 🔧 Configuration Files

### Package Configuration
- **package.json**: Dependencies, scripts, project metadata
- **package-lock.json**: Locked dependency versions
- **.npmrc**: npm configuration

### Build Configuration
- **Create React App**: Default build configuration
- **Webpack**: Bundling and optimization
- **Babel**: JavaScript compilation
- **PostCSS**: CSS processing

### Development Tools
- **ESLint**: Code linting and style enforcement
- **Jest**: Testing framework
- **React Testing Library**: Component testing utilities

## 📚 Documentation Structure

### User Documentation
- **README.md**: Project overview and getting started
- **CHANGELOG.md**: Version history and release notes
- **DEPLOYMENT.md**: Deployment instructions

### Developer Documentation
- **CONTRIBUTING.md**: Contribution guidelines
- **CODE_OF_CONDUCT.md**: Community standards
- **ARCHITECTURE.md**: Technical architecture details
- **API.md**: Component and function documentation

### Security Documentation
- **SECURITY.md**: Security policy and vulnerability reporting
- **SECURITY.md**: Security considerations and best practices

## 🚀 Deployment Structure

### Build Output
```
build/
├── static/
│   ├── css/          # Minified CSS bundles
│   ├── js/           # Minified JavaScript bundles
│   └── media/        # Optimized media files
├── asset-manifest.json # Asset mapping
├── favicon.ico       # Favicon
├── index.html        # Main HTML file
├── manifest.json     # PWA manifest
└── robots.txt        # SEO robots file
```

### Deployment Options
- **Netlify**: Automatic deployment from Git
- **Vercel**: Serverless deployment platform
- **GitHub Pages**: Static site hosting
- **AWS S3**: Cloud storage hosting
- **Firebase**: Google hosting platform

## 🧪 Testing Structure

### Test Organization
- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Full user journey testing
- **Accessibility Tests**: Screen reader and keyboard navigation

### Test Files
- **Component Tests**: `ComponentName.test.js`
- **Test Setup**: `setupTests.js`
- **Test Utilities**: Testing library helpers

## 🔒 Security Structure

### Security Measures
- **Input Validation**: Client-side validation for all inputs
- **XSS Prevention**: Proper content escaping
- **Data Privacy**: No external data collection
- **HTTPS**: Secure communication in production

### Security Files
- **SECURITY.md**: Security policy and reporting
- **Security Headers**: Hosting service configuration
- **Environment Variables**: Secure configuration management

## 📊 Monitoring and Analytics

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS metrics
- **Bundle Analysis**: Webpack bundle analyzer
- **Error Tracking**: Error boundary implementation

### Analytics (Future)
- **User Behavior**: Page views and interactions
- **Performance Metrics**: Load times and responsiveness
- **Error Rates**: Application error tracking

## 🔄 Version Control Structure

### Git Organization
- **Main Branch**: Production-ready code
- **Develop Branch**: Development and testing
- **Feature Branches**: Individual feature development
- **Release Branches**: Version preparation

### Branch Naming Convention
- `main`: Production branch
- `develop`: Development branch
- `feature/feature-name`: Feature development
- `fix/bug-description`: Bug fixes
- `docs/documentation-update`: Documentation changes

## 📈 Future Structure

### Planned Improvements
- **TypeScript**: Type safety and better development experience
- **State Management**: Redux Toolkit or Zustand
- **Testing**: Comprehensive test coverage
- **CI/CD**: Automated testing and deployment

### Scalability Considerations
- **Micro-frontends**: Component-based architecture
- **Service Workers**: Offline functionality
- **PWA Features**: Installable app capabilities
- **API Integration**: Backend service integration

## 📋 File Naming Conventions

### JavaScript Files
- **Components**: PascalCase (e.g., `LifeBalanceHeader.js`)
- **Pages**: PascalCase (e.g., `WelcomePage.js`)
- **Utilities**: camelCase (e.g., `utils.js`)

### CSS Files
- **Component Styles**: ComponentName.css
- **Page Styles**: PageName.css
- **Global Styles**: descriptive names (e.g., `buttons.css`)

### Documentation Files
- **README**: README.md
- **Guidelines**: UPPERCASE.md (e.g., `CONTRIBUTING.md`)
- **Technical Docs**: PascalCase.md (e.g., `Architecture.md`)

## 🎯 Best Practices

### Code Organization
- **Single Responsibility**: Each component has one clear purpose
- **Separation of Concerns**: Logic, presentation, and styling separated
- **Reusability**: Components designed for reuse
- **Maintainability**: Clear structure and documentation

### Performance
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimization**: Efficient rendering and updates
- **Caching**: Browser caching strategies

### Accessibility
- **Semantic HTML**: Proper HTML elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliance

---

## 📖 Additional Resources

- [React Best Practices](https://reactjs.org/docs/hooks-faq.html)
- [CSS Architecture](https://css-tricks.com/css-architecture/)
- [Git Workflow](https://guides.github.com/introduction/flow/)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

---

*This project structure document is maintained by the LifeBalance development team.*
