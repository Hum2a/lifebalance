import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../styles/Page2.css';
import '../styles/buttons.css';

const LIFE_AREAS = [
  {
    label: 'Health & Well-being',
    prompt: 'How am I doing mentally and physically?'
  },
  {
    label: 'Family & Connections',
    prompt: 'Do I have people I rely on and who rely on me?'
  },
  {
    label: 'Career & Income',
    prompt: 'Do I earn enough for the life I want, in a career that feels right?'
  },
  {
    label: 'Lifestyle, Spending & Fun',
    prompt: 'Do I spend intentionally on joy, or just impulse?'
  },
  {
    label: 'Housing, Safety & Security',
    prompt: 'Does my living situation support or stress me?'
  },
  {
    label: 'Giving & Contribution',
    prompt: 'Do I give time or money to causes I care about?'
  },
  {
    label: 'Personal Growth & Purpose',
    prompt: 'Am I learning and moving toward my purpose?'
  }
];

const CARD_COLORS = [
  'card-blue',
  'card-blue',
  'card-brown',
  'card-blue',
  'card-green',
  'card-brown',
  'card-blue',
];

const Page2 = ({ onSubmit, onStepChange }) => {
  const [scores, setScores] = useState(Array(LIFE_AREAS.length).fill(5));
  const [revealed, setRevealed] = useState(1);
  const [newlyRevealedCard, setNewlyRevealedCard] = useState(null);

  React.useEffect(() => {
    if (onStepChange) onStepChange(revealed);
  }, [revealed, onStepChange]);

  // Clear the newly revealed card after animation completes
  React.useEffect(() => {
    if (newlyRevealedCard !== null) {
      const timer = setTimeout(() => {
        setNewlyRevealedCard(null);
      }, 800); // Match the animation duration (0.8s)
      return () => clearTimeout(timer);
    }
  }, [newlyRevealedCard]);

  const handleSliderChange = (idx, value) => {
    const newScores = [...scores];
    newScores[idx] = value;
    setScores(newScores);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (revealed < LIFE_AREAS.length) {
      const nextRevealed = revealed + 1;
      setRevealed(nextRevealed);
      // Set the newly revealed card index
      setNewlyRevealedCard(nextRevealed - 1);
      // Smooth scroll to bottom after revealing new card
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100); // Small delay to ensure the new card is rendered
    } else {
      if (onSubmit) onSubmit(scores);
    }
  };

  return (
    <form className="page2-form" onSubmit={handleNext}>
      <h2 className="page2-title">How are you really doing - right now?</h2>
      <p className="page2-desc">
        Slide to rate each part of your life from<br/>
        <span className="page2-desc-em">0 <i>(needs attention)</i> to 10 <i>(doing great)</i>.</span>
      </p>
      <div className="page2-cards-wrapper" style={{minHeight: '340px', position: 'relative'}}>
        {LIFE_AREAS.slice(0, revealed).map((area, idx) => {
          const colorClass = idx % 3 === 0 ? 'card-dark' : idx % 3 === 1 ? 'card-green' : 'card-pink';
          const isNewlyRevealed = idx === newlyRevealedCard; // Use the tracked newly revealed card
          return (
            <div 
              key={area.label} 
              className={`page2-card ${colorClass} ${isNewlyRevealed ? 'newly-revealed' : ''}`}
            >
              <div className="page2-card-label">{area.label}</div>
              <div className="page2-card-prompt">{area.prompt}</div>
              <div className="page2-slider-row">
                <div className="page2-slider-arrows">
                  <div className="page2-slider-arrow left">
                    <div className="page2-slider-arrow-line"></div>
                    <div className="page2-slider-arrow-down"></div>
                  </div>
                  <div className="page2-slider-arrow right">
                    <div className="page2-slider-arrow-line"></div>
                    <div className="page2-slider-arrow-down"></div>
                  </div>
                </div>
                <div style={{position: 'relative', width: '100%', height: '44px'}}>
                  <ReactSlider
                    min={0}
                    max={10}
                    value={scores[idx]}
                    onChange={(value) => handleSliderChange(idx, value)}
                    className="page2-slider"
                    thumbClassName="page2-slider-thumb"
                    trackClassName="page2-slider-track"
                    renderThumb={(props, state) => (
                      <div {...props} className="page2-slider-thumb">
                        <span className="page2-slider-value-inside">{state.valueNow}</span>
                      </div>
                    )}
                    renderTrack={(props, state) => (
                      <div {...props} className={`page2-slider-track ${state.index === 0 ? 'filled' : 'unfilled'}`}></div>
                    )}
                  />
                </div>
                <div className="page2-slider-labels">
                  <span className="page2-slider-label">Needs work (0)</span>
                  <span className="page2-slider-label">Thriving (10)</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button type="submit" className="btn btn-primary-active page2-next-btn page2-next-btn-absolute">
        {revealed < LIFE_AREAS.length ? 'Next' : 'Complete'}
      </button>
      {revealed === 1 && (
        <div className="page2-remember">
          <b>Remember</b><br/>
          Let the question under each heading guide your reflection<br/>
          <span className="page2-desc-em">There are no right answers here.</span>
        </div>
      )}
    </form>
  );
};

export default Page2; 