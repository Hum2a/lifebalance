# LifeBalance - Life Assessment & Planning Tool

<div align="center">

![LifeBalance Logo](public/LifeSmart.png)

**A comprehensive life assessment tool that helps users evaluate and plan improvements across all life areas**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/yourusername/lifebalance)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-A%2B-brightgreen.svg)](https://github.com/yourusername/lifebalance)

[Live Demo](#) • [Report Bug](https://github.com/yourusername/lifebalance/issues) • [Request Feature](https://github.com/yourusername/lifebalance/issues)

</div>

---

## 🚀 Overview

LifeBalance is an interactive web application designed to help users assess their current life satisfaction across seven key areas and explore how additional resources (money and time) could impact their overall well-being. The tool provides personalized insights and actionable recommendations based on user responses.

### ✨ Key Features

- **Comprehensive Life Assessment**: Evaluate 7 key life areas with intuitive sliders
- **Resource Impact Analysis**: See how money and time could improve different aspects of life
- **Personalized Insights**: Get tailored recommendations based on your responses
- **Interactive UI**: Modern, responsive design with smooth animations and icons
- **Progress Tracking**: Step-by-step assessment with progress indicators
- **Actionable Results**: Practical suggestions for life improvement
- **Export Functionality**: Download your results as images or PDFs
- **Smart Navigation**: Auto-advancing cards with smart scrolling
- **Professional Icons**: Material Design icons throughout the interface

### 🎯 Life Areas Covered

1. **🏥 Health & Well-being** - Physical and mental health assessment
2. **👨‍👩‍👧‍👦 Family & Connections** - Relationships and social support
3. **💼 Career & Income** - Professional satisfaction and financial security
4. **🎉 Lifestyle, Spending & Fun** - Entertainment and quality of life
5. **🏠 Housing, Safety & Security** - Living environment and personal safety
6. **🤝 Giving & Contribution** - Community involvement and philanthropy
7. **🎓 Personal Growth & Purpose** - Learning and life direction

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **UI Components**: Custom CSS with modern design principles
- **Sliders**: React Slider for interactive input
- **Styling**: CSS3 with responsive design and animations
- **Icons**: React Icons (Material Design)
- **Export Tools**: html2canvas & jsPDF for data export
- **Build Tool**: Create React App
- **Package Manager**: npm

---

## 🎨 New Features & Improvements

### 🆕 **Export & Download System**
- **Image Export**: High-quality PNG downloads of your personal snapshot
- **PDF Export**: Professional PDF reports ready for printing or sharing
- **Smart Capture**: Ensures all data and content is properly exported
- **File Naming**: Automatic date-based file naming for organization

### 🎭 **Enhanced Animations & Effects**
- **Staggered Entrances**: Elements appear with beautiful timing sequences
- **Shimmer Effects**: Magical light sweeps across interactive elements
- **Hover Animations**: Rich hover states with transforms and shadows
- **Smooth Transitions**: Professional cubic-bezier easing throughout
- **Responsive Animations**: Optimized for different screen sizes

### 🔧 **Smart Navigation System**
- **Auto-Advance**: Cards automatically advance on slider release
- **Smart Scrolling**: Intelligent scroll positioning to newly revealed content
- **Progress Tracking**: Visual progress indicators throughout the journey
- **Completion Buttons**: Clear completion indicators for each section

### 🎯 **Professional Icon System**
- **Material Design Icons**: Consistent, professional iconography
- **Semantic Meaning**: Each icon directly relates to its content
- **Color Coordination**: Icons use the existing color palette
- **Accessibility**: Icons enhance rather than replace text content

### 📱 **Mobile-First Responsiveness**
- **Touch Optimized**: Larger slider thumbs for mobile devices
- **Responsive Layouts**: Adapts perfectly to all screen sizes
- **Performance**: Optimized animations for mobile devices
- **Safari Compatibility**: Special handling for Safari-specific behaviors

---

## 📱 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Welcome Page
![Welcome Page](docs/screenshots/welcome.png)

### Life Assessment
![Life Assessment](docs/screenshots/assessment.png)

### Results Dashboard
![Results Dashboard](docs/screenshots/results.png)

### Export Options
![Export Options](docs/screenshots/export.png)

</details>

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lifebalance.git
   cd lifebalance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App |

---

## 🏗️ Project Structure

```
lifebalance/
├── public/                 # Static assets
│   ├── index.html         # Main HTML file
│   ├── WhiteLogo.png      # Application logo
│   └── manifest.json      # PWA manifest
├── src/                   # Source code
│   ├── lifebalance/       # Main application
│   │   ├── components/    # Reusable components
│   │   │   └── LifeBalanceHeader.js  # Header with progress tracking
│   │   ├── pages/         # Page components
│   │   │   ├── WelcomePage.js        # Welcome and onboarding
│   │   │   ├── Page2.js             # Life area assessment
│   │   │   ├── Page3.js             # Money impact assessment
│   │   │   ├── Page4.js             # Time impact assessment
│   │   │   └── Page5.js             # Results and export
│   │   └── styles/        # CSS stylesheets
│   ├── App.js            # Main App component
│   └── index.js          # Application entry point
├── docs/                  # Documentation
├── .github/               # GitHub-specific files
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary**: #B79BFF (Purple)
- **Secondary**: #97A1FF (Blue)
- **Accent**: #64FFD0 (Green), #FF9264 (Orange)
- **Background**: Dark theme with gradients
- **Text**: White and light gray for readability

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body Text**: Readable sans-serif fonts
- **Responsive**: Font sizes scale with viewport

### Components
- **Cards**: Glassmorphism design with backdrop blur
- **Sliders**: Custom-styled range inputs with enhanced thumbs
- **Buttons**: Consistent primary and secondary styles
- **Forms**: Clean, accessible form elements
- **Icons**: Material Design icon system throughout

### Animation System
- **Entrance Animations**: Staggered fade-in effects
- **Hover States**: Rich interactive feedback
- **Shimmer Effects**: Light sweeps across elements
- **Transitions**: Smooth cubic-bezier easing
- **Responsive**: Optimized for different devices

---

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full feature set with enhanced animations)
- **Tablet**: 768px - 1199px (Adapted layout with touch optimization)
- **Mobile**: 320px - 767px (Mobile-first design with larger touch targets)

### Mobile Optimizations
- **Larger Slider Thumbs**: Easier touch interaction
- **Touch-Friendly Buttons**: Optimized button sizes
- **Smooth Scrolling**: Native-like mobile experience
- **Safari Compatibility**: Special handling for iOS devices

---

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
```bash
npm run test:coverage
```

---

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `build` folder to S3

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **LifeSmart Team** - For the vision and concept
- **React Community** - For the amazing framework
- **Material Design** - For the comprehensive icon system
- **Open Source Contributors** - For the tools and libraries

---

## 📞 Support

- **Email**: support@lifesmart.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/lifebalance/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/lifebalance/wiki)

---

<div align="center">

**Made with ❤️ by the LifeSmart Team**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/lifebalance?style=social)](https://github.com/yourusername/lifebalance)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/lifebalance?style=social)](https://github.com/yourusername/lifebalance)
[![GitHub watchers](https://img.shields.io/github/watchers/yourusername/lifebalance?style=social)](https://github.com/yourusername/lifebalance)

</div>
