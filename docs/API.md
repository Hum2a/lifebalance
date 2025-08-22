# LifeBalance API Documentation

## Overview

LifeBalance is a React-based life assessment application that provides a comprehensive interface for users to evaluate their life satisfaction across multiple areas and explore the impact of additional resources.

## Core Components

### LifeBalanceHeader
**Location**: `src/lifebalance/components/LifeBalanceHeader.js`

**Props**:
- `currentStep` (number): Current step in the assessment process
- `totalSteps` (number): Total number of steps in the assessment

**Features**:
- Logo display with WhiteLogo.png
- Progress indicator with Material Design icon
- Responsive design for all screen sizes

**Example**:
```jsx
<LifeBalanceHeader currentStep={3} totalSteps={7} />
```

### WelcomePage
**Location**: `src/lifebalance/pages/WelcomePage.js`

**Props**:
- `onNext` (function): Callback when user proceeds to assessment

**Features**:
- Welcome message with star icon
- Two information sections with trending and assessment icons
- Journey screen with checkmark icon
- Play arrow icons for action buttons

**State**:
- `showJourneyScreen` (boolean): Controls display of journey screen

### Page2 (Life Assessment)
**Location**: `src/lifebalance/pages/Page2.js`

**Props**:
- `onSubmit` (function): Callback with assessment scores
- `onStepChange` (function): Callback for step progression

**Features**:
- 7 life areas with Material Design icons
- Interactive sliders with enhanced thumbs
- Auto-advancing cards on slider release
- Smart scrolling to newly revealed content
- Complete button with checkmark icon

**Life Areas**:
```javascript
const LIFE_AREAS = [
  { label: 'Health & Well-being', icon: MdHealthAndSafety, prompt: '...' },
  { label: 'Family & Connections', icon: MdFamilyRestroom, prompt: '...' },
  { label: 'Career & Income', icon: MdWork, prompt: '...' },
  { label: 'Lifestyle, Spending & Fun', icon: MdCelebration, prompt: '...' },
  { label: 'Housing, Safety & Security', icon: MdHome, prompt: '...' },
  { label: 'Giving & Contribution', icon: MdVolunteerActivism, prompt: '...' },
  { label: 'Personal Growth & Purpose', icon: MdSchool, prompt: '...' }
];
```

### Page3 (Money Impact Assessment)
**Location**: `src/lifebalance/pages/Page3.js`

**Props**:
- `baseScores` (array): Scores from Page2 assessment
- `onSubmit` (function): Callback with money impact scores
- `onStepChange` (function): Callback for step progression

**Features**:
- Tutorial slide with money icon and animations
- Same life areas with icons as Page2
- Previous selection display
- New slider for money impact assessment
- Auto-advancing functionality

### Page4 (Time Impact Assessment)
**Location**: `src/lifebalance/pages/Page4.js`

**Props**:
- `baseScores` (array): Scores from Page2 assessment
- `onFinish` (function): Callback with time impact scores
- `onStepChange` (function): Callback for step progression

**Features**:
- Tutorial slide with clock icon and animations
- Same life areas with icons as Page2
- Previous selection display
- New slider for time impact assessment
- Auto-advancing functionality

### Page5 (Results & Export)
**Location**: `src/lifebalance/pages/Page5.js`

**Props**:
- `averages` (object): Average scores for now, money, and time
- `biggestMoney` (object): Area with biggest money impact
- `biggestTime` (object): Area with biggest time impact
- `onSubmit` (function): Callback when user finishes

**Features**:
- Personal snapshot with comprehensive data display
- Action recommendations with money and time icons
- Key takeaway section with assessment icon
- Export functionality with multiple options
- Debug tools for troubleshooting

**Export Functions**:
```javascript
const downloadAsImage = async () => {
  // Generates high-quality PNG of current page
  // Uses html2canvas with optimized settings
};

const downloadAsPDF = async () => {
  // Generates professional PDF report
  // Uses jsPDF with A4 formatting
};
```

## Data Flow

### Assessment Flow
1. **WelcomePage** → User starts assessment
2. **Page2** → User rates current life satisfaction (7 areas)
3. **Page3** → User rates potential money impact (7 areas)
4. **Page4** → User rates potential time impact (7 areas)
5. **Page5** → Results display and export options

### Score Calculation
```javascript
// Averages calculation
const avg = arr => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) : '-';

// Biggest jump calculation
let biggestMoney = { area: '', value: 0 };
if (baseScores.length && cashScores.length) {
  let maxDiff = -Infinity;
  LIFE_AREAS.forEach((area, i) => {
    const diff = cashScores[i] - baseScores[i];
    if (diff > maxDiff) {
      maxDiff = diff;
      biggestMoney = { area, value: +(diff.toFixed(1)) };
    }
  });
}
```

## Icon System

### Material Design Icons
All icons are imported from `react-icons/md` and provide semantic meaning:

- **MdHealthAndSafety**: Health & Well-being
- **MdFamilyRestroom**: Family & Connections
- **MdWork**: Career & Income
- **MdCelebration**: Lifestyle & Fun
- **MdHome**: Housing & Security
- **MdVolunteerActivism**: Giving & Contribution
- **MdSchool**: Growth & Purpose
- **MdCheckCircle**: Completion actions
- **MdTrendingUp**: Progress and improvement
- **MdStar**: Important information
- **MdPlayArrow**: Start actions
- **MdDownload**: Export actions
- **MdPictureAsPdf**: PDF export
- **MdBugReport**: Debug tools

### Icon Implementation
```jsx
<IconComponent 
  style={{ 
    marginRight: '10px', 
    verticalAlign: 'middle' 
  }} 
/>
```

## Animation System

### Entrance Animations
- **Staggered Timing**: Elements appear with 0.2s intervals
- **Fade-in Effects**: Smooth opacity and transform transitions
- **Responsive**: Faster animations on mobile devices

### Hover Effects
- **Shimmer**: Light sweeps across interactive elements
- **Transform**: Subtle lift and scale effects
- **Shadow**: Enhanced depth on interaction

### CSS Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
```

## Export System

### Image Export
- **Format**: High-quality PNG
- **Resolution**: 2x scale for crisp output
- **Background**: Maintains dark theme
- **Content**: Captures all dynamic data and styling

### PDF Export
- **Format**: A4 PDF with multiple pages if needed
- **Quality**: High-resolution image embedding
- **Layout**: Professional formatting for printing
- **File Naming**: Automatic date-based naming

### Export Configuration
```javascript
const exportConfig = {
  backgroundColor: '#0D0C20',
  scale: 2,
  useCORS: true,
  allowTaint: true,
  foreignObjectRendering: false,
  onclone: (clonedDoc) => {
    // Ensure proper styling during capture
  }
};
```

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

### Mobile Optimizations
- **Larger Touch Targets**: Enhanced slider thumbs
- **Touch-Friendly**: Optimized button sizes
- **Smooth Scrolling**: Native-like experience
- **Safari Compatibility**: Special handling for iOS

### CSS Responsiveness
```css
@media (max-width: 768px) {
  .page2-slider-thumb {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 769px) {
  .page2-slider-thumb {
    width: 32px;
    height: 32px;
  }
}
```

## Performance Optimizations

### Animation Performance
- **Hardware Acceleration**: Uses transform and opacity
- **Reduced Motion**: Respects user preferences
- **Efficient Transitions**: Cubic-bezier easing
- **Mobile Optimization**: Faster animations on small screens

### Export Performance
- **Async Processing**: Non-blocking export operations
- **Memory Management**: Proper cleanup of temporary elements
- **Error Handling**: Graceful fallbacks for failed exports
- **Progress Feedback**: User feedback during export process

## Browser Compatibility

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Safari-Specific Features
- **Touch Handling**: Optimized for iOS Safari
- **Animation Support**: Hardware-accelerated animations
- **Export Compatibility**: Special handling for Safari rendering

## Error Handling

### Export Errors
```javascript
try {
  const canvas = await html2canvas(element, config);
  // Process export
} catch (error) {
  console.error('Export failed:', error);
  // Show user-friendly error message
  // Clean up any temporary state
}
```

### Navigation Errors
- **Fallback Scrolling**: Manual scroll if smart scroll fails
- **State Recovery**: Maintains user progress on errors
- **User Feedback**: Clear error messages and recovery options

## Future Enhancements

### Planned Features
- **Data Persistence**: Save progress locally
- **Social Sharing**: Share results on social media
- **Progress Tracking**: Historical assessment comparison
- **Customization**: User-defined life areas
- **Analytics**: Usage and improvement insights

### Technical Improvements
- **PWA Support**: Offline functionality
- **Performance**: Further animation optimizations
- **Accessibility**: Enhanced screen reader support
- **Internationalization**: Multi-language support
