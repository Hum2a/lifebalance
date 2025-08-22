import React from 'react';
import { MdAssessment } from 'react-icons/md';
import '../styles/LifeBalanceHeader.css';

const LifeBalanceHeader = ({ currentStep, totalSteps }) => {
  return (
    <div className="life-balance-header">
      <div className="logo-container">
        <img src="/WhiteLogo.png" alt="LifeSmart Logo" className="logo-icon" />
      </div>
      {currentStep && totalSteps && (
        <div className="question-progress">
          <MdAssessment style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Q {currentStep}/{totalSteps}
        </div>
      )}
    </div>
  );
};

export default LifeBalanceHeader; 