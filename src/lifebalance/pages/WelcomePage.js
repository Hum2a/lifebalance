import React, { useState } from 'react';
import { 
  MdPlayArrow, 
  MdTrendingUp, 
  MdLightbulb, 
  MdAssessment, 
  MdAccessTime, 
  MdAttachMoney,
  MdCheckCircle,
  MdStar
} from 'react-icons/md';
import '../styles/WelcomePage.css';

const WelcomePage = ({ onNext }) => {
  const [showJourneyScreen, setShowJourneyScreen] = useState(false);

  if (showJourneyScreen) {
    return (
      <div className="welcome-page journey-screen">
        <h1 className="journey-title">
          <MdCheckCircle style={{ marginRight: '15px', verticalAlign: 'middle', color: '#64FFD0' }} />
          Are you ready?
        </h1>
        <p className="journey-description">
          This takes less than 3 minutes. No right answers.
          <br />
          Just honest reflection.
        </p>
        <button 
          className="btn btn-primary-active"
          onClick={onNext}
        >
          <MdPlayArrow style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Start my journey
        </button>
      </div>
    );
  }

  return (
    <div className="welcome-page">
      <h1 className="welcome-title">
        <MdStar style={{ marginRight: '15px', verticalAlign: 'middle', color: '#B79BFF' }} />
        Welcome to Life Balance
      </h1>
      
      <div className="welcome-content">
        <p className="welcome-description">
          In just a few minutes, you'll map the key areas of your life, and discover how your <span className="highlight-text">time and money</span> influence each one.
        </p>

        <div className="welcome-section-container">
          <div className="welcome-section matters">
            <h2>
              <MdTrendingUp style={{ marginRight: '10px', verticalAlign: 'middle', color: '#64FFD0' }} />
              Why it matters
            </h2>
            <p>Clearer picture = smarter financial decisions</p>
          </div>

          <div className="welcome-section get">
            <h2>
              <MdAssessment style={{ marginRight: '10px', verticalAlign: 'middle', color: '#B79BFF' }} />
              What you'll get
            </h2>
            <p>A personalized LifeBalance Snapshot to guide your financial-literacy journey and build a life that reflects your values.</p>
          </div>
        </div>

        <button 
          className="btn btn-primary-inactive"
          onClick={() => setShowJourneyScreen(true)}
        >
          <MdPlayArrow style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Lets Begin
        </button>
      </div>
    </div>
  );
};

export default WelcomePage; 