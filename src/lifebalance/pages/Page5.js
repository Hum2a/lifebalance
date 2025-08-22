import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
  MdDownload, 
  MdPictureAsPdf, 
  MdBugReport,
  MdAssessment,
  MdTrendingUp,
  MdAccessTime,
  MdAttachMoney,
  MdLightbulb,
  MdSave
} from 'react-icons/md';
import '../styles/Page5.css';

const MONEY_ACTIONS = [
  { area: 'Health & Wellbeing', action: 'See if you can set aside some money within your budget to spend on better nutrition and exercise.' },
  { area: 'Family & Connections', action: 'Create a "relationship fund" for trips, shared meals or meaningful gifts. Schedule one experience this month and pay for it upfront so it really happens.' },
  { area: 'Career & Income', action: 'Invest in a skill course, mentor or certification that advances you toward a role you truly want. Treat it as a high-return asset, not an expense.' },
  { area: 'Lifestyle, Spending & Fun', action: 'Pre-plan fun experiences (concert, adventure day) instead of impulse buys to ensure lasting happiness.' },
  { area: 'Housing, Safety & Security', action: 'Build or top-up an emergency fund (3-6 months expenses) or pay down high-interest debt. This single move reduces financial anxiety quickly.' },
  { area: 'Giving & Contribution', action: 'Automate a monthly donation or set up a giving-pot for spontaneous causes. Align with values so generosity becomes a habit, not an after-thought.' },
  { area: 'Growth & Purpose', action: 'Allocate a "growth pot" for books, courses or retreats that stretch your mind. Commit to one paid learning experience in the next quarter.' },
];

const TIME_ACTIONS = [
  { area: 'Health & Wellbeing', action: 'Block 3×30-minute exercise or meditation sessions into your calendar this week. Protect them like appointments.' },
  { area: 'Family & Connections', action: 'Schedule a weekly device-free meal or call with loved ones. Consistency matters more than extravagant plans.' },
  { area: 'Career & Income', action: 'Dedicate one evening a week to career reflection, networking or portfolio projects that align with long-term goals.' },
  { area: 'Lifestyle, Spending & Fun', action: 'Reserve at least half a day each month for a low-cost hobby or local adventure you keep postponing.' },
  { area: 'Housing, Safety & Security', action: 'Use a weekend block to review insurance, create a household emergency plan, or declutter to make your home feel safer.' },
  { area: 'Giving & Contribution', action: 'Pledge two hours a month to a cause you care about (mentoring, community clean-up). Put the first date in your calendar now.' },
  { area: 'Growth & Purpose', action: 'Book a regular "learning hour" each week for reading, journaling or an online course to keep purpose front-of-mind.' },
];

// Fallback actions for when no specific time action is found
const getFallbackTimeAction = (averages, biggestTime) => {
  // If the user's current score is already high (8+), they're doing well
  if (averages.now >= 8) {
    return 'You\'re already doing great! Consider this a reminder to maintain your current time management habits and maybe share your wisdom with others who could benefit from your approach.';
  }
  
  // If the biggest time jump is small (less than 2 points), they're relatively balanced
  if (biggestTime.value < 2) {
    return 'Your life areas are quite balanced! Focus on maintaining this equilibrium rather than making big changes. Small, consistent improvements in any area will compound over time.';
  }
  
  // If their current score is moderate (6-7), suggest general time optimization
  if (averages.now >= 6) {
    return 'You\'re on the right track! Look for small pockets of time in your day (commute, waiting rooms, meal prep) to invest in activities that align with your values and goals.';
  }
  
  // Default fallback for lower scores
  return 'Start with small, manageable time commitments. Even 15 minutes daily in areas that matter to you can create meaningful change over time. Remember, consistency beats intensity.';
};

// Fallback actions for when no specific money action is found
const getFallbackMoneyAction = (averages, biggestMoney) => {
  // If the user's current score is already high (8+), they're doing well
  if (averages.now >= 8) {
    return 'You\'re already in a great financial position! Consider this a reminder to maintain your current spending habits and maybe help others develop similar financial discipline.';
  }
  
  // If the biggest money jump is small (less than 2 points), they're relatively balanced
  if (biggestMoney.value < 2) {
    return 'Your financial priorities are quite balanced! Focus on maintaining this equilibrium rather than making big changes. Small, consistent financial habits will compound over time.';
  }
  
  // If their current score is moderate (6-7), suggest general financial optimization
  if (averages.now >= 6) {
    return 'You\'re on the right track! Look for small ways to optimize your spending and saving. Even small adjustments to daily habits can create meaningful financial change over time.';
  }
  
  // Default fallback for lower scores
  return 'Start with small, manageable financial commitments. Even setting aside a small amount regularly can create meaningful change over time. Remember, consistency beats intensity.';
};

const Page5 = ({
  averages = { now: 6.1, money: 7.8, time: 7.3 },
  biggestMoney = { area: 'Health & Wellbeing', value: 3.0 },
  biggestTime = { area: 'Health & Wellbeing', value: 2.5 },
}) => {
  const pageRef = useRef(null);

  // Find the recommended action for the biggest jump area
  const moneyAction = MONEY_ACTIONS.find(a => a.area === biggestMoney.area)?.action || getFallbackMoneyAction(averages, biggestMoney);
  const timeAction = TIME_ACTIONS.find(a => a.area === biggestTime.area)?.action || getFallbackTimeAction(averages, biggestTime);

  const downloadAsImage = async () => {
    if (!pageRef.current) return;
    
    try {
      // Force a re-render to ensure all data is visible
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Temporarily add export attribute for better styling
      pageRef.current.setAttribute('data-exporting', 'true');
      
      // Force all content to be visible and rendered
      const allElements = pageRef.current.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.style.display === 'none') el.style.display = 'block';
        if (el.style.visibility === 'hidden') el.style.visibility = 'visible';
        if (el.style.opacity === '0') el.style.opacity = '1';
      });
      
      const canvas = await html2canvas(pageRef.current, {
        backgroundColor: '#0D0C20',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: true, // Enable logging temporarily for debugging
        width: undefined,
        height: undefined,
        scrollX: 0,
        scrollY: 0,
        windowWidth: undefined,
        windowHeight: undefined,
        foreignObjectRendering: false,
        removeContainer: false,
        ignoreElements: (element) => {
          // Don't ignore any elements - capture everything
          return false;
        },
        onclone: (clonedDoc) => {
          // Ensure the cloned element maintains proper styling
          const clonedElement = clonedDoc.querySelector('.page5-container');
          if (clonedElement) {
            clonedElement.style.width = '100%';
            clonedElement.style.height = 'auto';
            clonedElement.style.position = 'relative';
            clonedElement.style.overflow = 'visible';
            clonedElement.style.display = 'flex';
            clonedElement.style.flexDirection = 'column';
            clonedElement.style.alignItems = 'center';
          }
          
          // Ensure all text content is visible
          const allTextElements = clonedDoc.querySelectorAll('*');
          allTextElements.forEach(el => {
            if (el.style.display === 'none') el.style.display = 'block';
            if (el.style.visibility === 'hidden') el.style.visibility = 'visible';
            if (el.style.opacity === '0') el.style.opacity = '1';
          });
        }
      });
      
      // Remove export attribute
      pageRef.current.removeAttribute('data-exporting');
      
      const link = document.createElement('a');
      link.download = `life-balance-snapshot-${new Date().toISOString().split('T')[0]}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      // Ensure export attribute is removed even on error
      if (pageRef.current) {
        pageRef.current.removeAttribute('data-exporting');
      }
      alert('Failed to generate image. Please try again.');
    }
  };

  const downloadAsPDF = async () => {
    if (!pageRef.current) return;
    
    try {
      // Force a re-render to ensure all data is visible
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Temporarily add export attribute for better styling
      pageRef.current.setAttribute('data-exporting', 'true');
      
      // Force all content to be visible and rendered
      const allElements = pageRef.current.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.style.display === 'none') el.style.display = 'block';
        if (el.style.visibility === 'hidden') el.style.visibility = 'visible';
        if (el.style.opacity === '0') el.style.opacity = '1';
      });
      
      const canvas = await html2canvas(pageRef.current, {
        backgroundColor: '#0D0C20',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: true, // Enable logging temporarily for debugging
        width: undefined,
        height: undefined,
        scrollX: 0,
        scrollY: 0,
        windowWidth: undefined,
        windowHeight: undefined,
        foreignObjectRendering: false,
        removeContainer: false,
        ignoreElements: (element) => {
          // Don't ignore any elements - capture everything
          return false;
        },
        onclone: (clonedDoc) => {
          // Ensure the cloned element maintains proper styling
          const clonedElement = clonedDoc.querySelector('.page5-container');
          if (clonedElement) {
            clonedElement.style.width = '100%';
            clonedElement.style.height = 'auto';
            clonedElement.style.position = 'relative';
            clonedElement.style.overflow = 'visible';
            clonedElement.style.display = 'flex';
            clonedElement.style.flexDirection = 'column';
            clonedElement.style.alignItems = 'center';
          }
          
          // Ensure all text content is visible
          const allTextElements = clonedDoc.querySelectorAll('*');
          allTextElements.forEach(el => {
            if (el.style.display === 'none') el.style.display = 'block';
            if (el.style.visibility === 'hidden') el.style.visibility = 'visible';
            if (el.style.opacity === '0') el.style.opacity = '1';
          });
        }
      });
      
      // Remove export attribute
      pageRef.current.removeAttribute('data-exporting');
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`life-balance-snapshot-${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Ensure export attribute is removed even on error
      if (pageRef.current) {
        pageRef.current.removeAttribute('data-exporting');
      }
      alert('Failed to generate PDF. Please try again.');
    }
  };

  // Debug function to check what data is being rendered
  const debugExport = () => {
    console.log('Page5 Debug Info:');
    console.log('Page Ref:', pageRef.current);
    console.log('Averages:', averages);
    console.log('Biggest Money:', biggestMoney);
    console.log('Biggest Time:', biggestTime);
    console.log('Money Action:', moneyAction);
    console.log('Time Action:', timeAction);
    console.log('Page Dimensions:', {
      scrollWidth: pageRef.current?.scrollWidth,
      scrollHeight: pageRef.current?.scrollHeight,
      clientWidth: pageRef.current?.clientWidth,
      clientHeight: pageRef.current?.clientHeight
    });
  };

  return (
    <div className="page5-container custom-layout" ref={pageRef}>
      <h2 className="page5-title snapshot-title">
        Here's your <span className="snapshot-accent">Personal Snapshot</span>
      </h2>
      <p className="page5-desc snapshot-subtitle">
        On an average, here's how you rate your life
      </p>

      {/* Three-column average score box */}
      <div className="snapshot-averages-row">
        <div className="snapshot-average-col">
          <div className="snapshot-average-label">
            <MdAssessment style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Now
          </div>
          <div className="snapshot-average-value">{averages.now}/10</div>
        </div>
        <div className="snapshot-average-col">
          <div className="snapshot-average-label">
            <MdAttachMoney style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            with $$$
          </div>
          <div className="snapshot-average-value">{averages.money}/10</div>
        </div>
        <div className="snapshot-average-col">
          <div className="snapshot-average-label">
            <MdAccessTime style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            with Time
          </div>
          <div className="snapshot-average-value">{averages.time}/10</div>
        </div>
      </div>

      {/* Two horizontally aligned jump boxes */}
      <div className="snapshot-jumps-row">
        <div className="snapshot-jump-box">
          <div className="snapshot-jump-label">
            <MdTrendingUp style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Biggest jump with <span className="money-accent">money</span>
          </div>
          <div className="snapshot-jump-area">{biggestMoney.area}</div>
        </div>
        <div className="snapshot-jump-box">
          <div className="snapshot-jump-label">
            <MdTrendingUp style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Biggest jump with <span className="time-accent">time</span>
          </div>
          <div className="snapshot-jump-area">{biggestTime.area}</div>
        </div>
      </div>

      {/* What can you do now? section */}
      <div className="snapshot-section-divider">
        <span className="snapshot-section-title">
          <MdLightbulb style={{ marginRight: '10px', verticalAlign: 'middle' }} />
          What can you do now?
        </span>
      </div>
      <div className="snapshot-actions-row">
        <div className="snapshot-action-card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <MdAttachMoney style={{ marginRight: '8px', color: '#64FFD0' }} />
            <strong>Money Action:</strong>
          </div>
          {moneyAction}
        </div>
        <div className="snapshot-action-card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <MdAccessTime style={{ marginRight: '8px', color: '#FF9264' }} />
            <strong>Time Action:</strong>
          </div>
          {timeAction}
        </div>
      </div>

      {/* Key Takeaway section */}
      <div className="snapshot-section-divider">
        <span className="snapshot-section-title">
          <MdAssessment style={{ marginRight: '10px', verticalAlign: 'middle' }} />
          Key Takeaway
        </span>
      </div>
      <div className="snapshot-key-takeaway">
        Money is only a tool – its real power is the freedom and security it can buy. Yet time is a resource you can never earn back. This exercise shows where extra cash or extra hours would truly change your life, so you can aim for independence and contentment instead of simply chasing more money at the cost of other things.
      </div>

      {/* Download/Export Section */}
      <div className="snapshot-section-divider">
        <span className="snapshot-section-title">
          <MdSave style={{ marginRight: '10px', verticalAlign: 'middle' }} />
          Save Your Snapshot
        </span>
      </div>
      <div className="snapshot-download-row">
        <button 
          className="snapshot-download-btn snapshot-download-image"
          onClick={downloadAsImage}
        >
          <MdDownload /> Download as Image
        </button>
        <button 
          className="snapshot-download-btn snapshot-download-pdf"
          onClick={downloadAsPDF}
        >
          <MdPictureAsPdf /> Download as PDF
        </button>
        <button 
          className="snapshot-download-btn snapshot-download-debug"
          onClick={debugExport}
        >
          <MdBugReport /> Debug Export
        </button>
      </div>
    </div>
  );
};

export default Page5; 