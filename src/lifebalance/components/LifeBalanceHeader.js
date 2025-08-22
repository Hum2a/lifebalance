import React from 'react';
import '../styles/LifeBalanceHeader.css';

const LifeBalanceHeader = ({ currentStep, totalSteps }) => {
  return (
    <div className="life-balance-header">
      <div className="logo-container">
        <img src="/WhiteLogo.png" alt="LifeSmart Logo" className="logo-icon" />
      </div>
      {currentStep && totalSteps && (
        <div className="question-progress">
          Q {currentStep}/{totalSteps}
        </div>
      )}
    </div>
  );
};

export default LifeBalanceHeader; 