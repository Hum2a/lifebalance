# LifeBalance API Documentation

## Overview

This document provides comprehensive documentation for the LifeBalance application's components, functions, and APIs. LifeBalance is a React-based application that helps users assess their life satisfaction across multiple dimensions.

## 🧩 Component API Reference

### App Component

The main application component that manages routing and global state.

#### Props
None (root component)

#### State
```javascript
{
  currentPage: number,        // Current page number (1-5)
  currentScores: number[],    // Current life assessment scores
  moneyScores: number[],      // Money impact assessment scores
  timeScores: number[]        // Time impact assessment scores
}
```

#### Methods
- `handlePageChange(pageNumber)`: Updates the current page
- `handleCurrentScores(scores)`: Updates current life assessment scores
- `handleMoneyScores(scores)`: Updates money impact assessment scores
- `handleTimeScores(scores)`: Updates time impact assessment scores

#### Example Usage
```javascript
<App />
```

---

### LifeBalanceHeader Component

Header component displaying the application logo and progress indicator.

#### Props
```javascript
{
  currentPage: number,        // Current page number
  totalPages: number          // Total number of pages
}
```

#### State
None

#### Methods
None

#### Example Usage
```javascript
<LifeBalanceHeader 
  currentPage={2} 
  totalPages={5} 
/>
```

---

### WelcomePage Component

Introduction page explaining the application purpose and functionality.

#### Props
```javascript
{
  onStart: function           // Callback when user starts assessment
}
```

#### State
None

#### Methods
- `handleStart()`: Triggers the onStart callback

#### Example Usage
```javascript
<WelcomePage onStart={() => handlePageChange(2)} />
```

---

### Page2 Component (Life Assessment)

Component for assessing current life satisfaction across 7 life areas.

#### Props
```javascript
{
  onSubmit: function(scores), // Callback with assessment scores
  onStepChange: function(step) // Callback when step changes
}
```

#### State
```javascript
{
  scores: number[],           // Array of 7 scores (0-10)
  revealed: number,           // Number of revealed assessment cards
  newlyRevealedCard: number  // Index of newly revealed card
}
```

#### Methods
- `handleSliderChange(idx, value)`: Updates score for specific life area
- `handleNext()`: Advances to next step or completes assessment
- `scrollToNewCard()`: Scrolls to newly revealed assessment card

#### Life Areas
1. **Health & Well-being**: Physical and mental health assessment
2. **Family & Connections**: Relationships and social support
3. **Career & Income**: Professional satisfaction and financial security
4. **Lifestyle, Spending & Fun**: Entertainment and quality of life
5. **Housing, Safety & Security**: Living environment and personal safety
6. **Giving & Contribution**: Community involvement and philanthropy
7. **Personal Growth & Purpose**: Learning and life direction

#### Example Usage
```javascript
<Page2 
  onSubmit={(scores) => handleCurrentScores(scores)}
  onStepChange={(step) => console.log(`Step ${step}`)}
/>
```

---

### Page3 Component (Money Impact)

Component for assessing how additional money would impact life areas.

#### Props
```javascript
{
  baseScores: number[],       // Previous assessment scores
  onSubmit: function(scores), // Callback with money impact scores
  onStepChange: function(step) // Callback when step changes
}
```

#### State
```javascript
{
  tutorialStep: number,       // Tutorial step (0 or 1)
  newScores: number[],        // New assessment scores
  revealed: number            // Number of revealed assessment cards
}
```

#### Methods
- `handleSliderChange(idx, value)`: Updates score for specific life area
- `handleNext()`: Advances tutorial or assessment
- `scrollToNewCard()`: Scrolls to newly revealed assessment card

#### Example Usage
```javascript
<Page3 
  baseScores={[5, 6, 7, 4, 8, 6, 5]}
  onSubmit={(scores) => handleMoneyScores(scores)}
  onStepChange={(step) => console.log(`Step ${step}`)}
/>
```

---

### Page4 Component (Time Impact)

Component for assessing how additional time would impact life areas.

#### Props
```javascript
{
  baseScores: number[],       // Previous assessment scores
  onFinish: function(scores), // Callback with time impact scores
  onStepChange: function(step) // Callback when step changes
}
```

#### State
```javascript
{
  tutorialStep: number,       // Tutorial step (0 or 1)
  newScores: number[],        // New assessment scores
  revealed: number            // Number of revealed assessment cards
}
```

#### Methods
- `handleSliderChange(idx, value)`: Updates score for specific life area
- `handleNext()`: Advances tutorial or assessment
- `scrollToNewCard()`: Scrolls to newly revealed assessment card

#### Example Usage
```javascript
<Page4 
  baseScores={[5, 6, 7, 4, 8, 6, 5]}
  onFinish={(scores) => handleTimeScores(scores)}
  onStepChange={(step) => console.log(`Step ${step}`)}
/>
```

---

### Page5 Component (Results)

Component displaying assessment results and personalized recommendations.

#### Props
```javascript
{
  averages: object,           // Average scores object
  biggestMoney: object,       // Biggest money impact area
  biggestTime: object         // Biggest time impact area
}
```

#### Props Structure
```javascript
{
  averages: {
    now: number,              // Current average score
    money: number,            // Money impact average score
    time: number              // Time impact average score
  },
  biggestMoney: {
    area: string,             // Life area with biggest money impact
    value: number             // Impact value
  },
  biggestTime: {
    area: string,             // Life area with biggest time impact
    value: number             // Impact value
  }
}
```

#### State
None

#### Methods
None

#### Example Usage
```javascript
<Page5 
  averages={{ now: 6.1, money: 7.8, time: 7.3 }}
  biggestMoney={{ area: 'Health & Well-being', value: 3.0 }}
  biggestTime={{ area: 'Health & Well-being', value: 2.5 }}
/>
```

---

## 🔧 Utility Functions

### Score Calculations

#### calculateAverages(scores)
Calculates average scores from assessment arrays.

**Parameters:**
- `scores` (object): Object containing currentScores, moneyScores, timeScores

**Returns:**
```javascript
{
  now: number,      // Average of current scores
  money: number,    // Average of money impact scores
  time: number      // Average of time impact scores
}
```

**Example:**
```javascript
const averages = calculateAverages({
  currentScores: [5, 6, 7, 4, 8, 6, 5],
  moneyScores: [7, 8, 9, 6, 8, 7, 7],
  timeScores: [6, 7, 8, 5, 7, 6, 6]
});
// Returns: { now: 5.86, money: 7.43, time: 6.43 }
```

#### findBiggestImpact(currentScores, impactScores)
Finds the life area with the biggest improvement from additional resources.

**Parameters:**
- `currentScores` (number[]): Current assessment scores
- `impactScores` (number[]): Impact assessment scores

**Returns:**
```javascript
{
  area: string,     // Life area name
  value: number     // Improvement value
}
```

**Example:**
```javascript
const biggestMoney = findBiggestImpact(
  [5, 6, 7, 4, 8, 6, 5],
  [7, 8, 9, 6, 8, 7, 7]
);
// Returns: { area: 'Career & Income', value: 2.0 }
```

---

## 🎨 Styling API

### CSS Classes

#### Component-Specific Classes
- `.page2-form`: Form container for Page2
- `.page2-card`: Assessment card styling
- `.page2-slider`: Slider component styling
- `.page3-prev-slider`: Previous selection slider styling
- `.page5-container`: Results page container
- `.snapshot-*`: Results display styling

#### Utility Classes
- `.btn`: Base button styling
- `.btn-primary`: Primary button variant
- `.btn-primary-active`: Active primary button
- `.card-*`: Card color variants (dark, green, pink)

#### Responsive Classes
- Mobile-first approach with breakpoints
- Fluid typography using clamp()
- Flexible layouts with CSS Grid and Flexbox

---

## 📱 Responsive Design API

### Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### Viewport Units
- `vw`: Viewport width for responsive sizing
- `vh`: Viewport height for responsive spacing
- `clamp()`: Fluid typography and spacing

---

## 🔒 Security Considerations

### Input Validation
- Slider values are constrained to 0-10 range
- No user input is stored permanently
- All data processing happens client-side

### Data Privacy
- No external API calls
- No user data collection
- Local storage only for session data

---

## 🧪 Testing API

### Component Testing
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Page2 from '../Page2';

test('renders life assessment form', () => {
  render(<Page2 onSubmit={jest.fn()} onStepChange={jest.fn()} />);
  expect(screen.getByText('How are you really doing - right now?')).toBeInTheDocument();
});
```

### Function Testing
```javascript
import { calculateAverages } from '../utils';

test('calculates averages correctly', () => {
  const result = calculateAverages({
    currentScores: [5, 5, 5],
    moneyScores: [7, 7, 7],
    timeScores: [6, 6, 6]
  });
  expect(result.now).toBe(5);
  expect(result.money).toBe(7);
  expect(result.time).toBe(6);
});
```

---

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [CSS Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🔄 Version History

- **v1.0.0**: Initial API documentation
- **v0.2.0**: Added component testing examples
- **v0.1.0**: Basic component documentation

---

*This API documentation is maintained by the LifeBalance development team.*
