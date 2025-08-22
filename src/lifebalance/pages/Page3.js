import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import '../styles/Page3.css';
import '../styles/buttons.css';

const TUTORIAL_SLIDE = {
  title: "Now imagine a full year's salary lands in your bank account tomorrow.",
};

const LIFE_AREAS = [
  {
    label: 'Health & Well-being',
    prompt: 'Better nutrition, gym/therapy, medical checks, or more harmful activities?'
  },
  {
    label: 'Family & Connections',
    prompt: 'Fun visits, shared trips, thoughtful gifts or higher expectations?'
  },
  {
    label: 'Career & Income',
    prompt: 'More likely to move towards the right career for you?'
  },
  {
    label: 'Lifestyle, Spending & Fun',
    prompt: 'Budget for meaningful hobbies & travel, or just more spending?'
  },
  {
    label: 'Housing, Safety & Security',
    prompt: 'Ability to build emergency fund, clear debt, improve home safety?'
  },
  {
    label: 'Giving & Contribution',
    prompt: 'Would your giving increase either in money, time or impact?'
  },
  {
    label: 'Growth & Purpose',
    prompt: 'Coaching, retreats, further study, purpose projects or less motivation?'
  }
];

const Page3 = ({ baseScores = [], onSubmit, onStepChange }) => {
  const [tutorialStep, setTutorialStep] = useState(0);
  const [newScores, setNewScores] = useState(Array(LIFE_AREAS.length).fill(5));
  const [revealed, setRevealed] = useState(1);

  useEffect(() => {
    if (onStepChange && tutorialStep > 0) onStepChange(revealed);
  }, [revealed, onStepChange, tutorialStep]);

  const handleSliderChange = (idx, value) => {
    const updated = [...newScores];
    updated[idx] = value;
    setNewScores(updated);
  };

  const handleSliderRelease = (idx, value) => {
    // Auto-advance to next card when slider is released
    if (idx === revealed - 1 && revealed < LIFE_AREAS.length) {
      const nextRevealed = revealed + 1;
      setRevealed(nextRevealed);
      
      // Smart scroll to show the newly revealed card
      setTimeout(() => {
        const cards = document.querySelectorAll('.page2-card');
        if (cards.length > 0) {
          const lastVisibleCard = cards[nextRevealed - 1]; // Index of the newly revealed card
          if (lastVisibleCard) {
            // Calculate position to show the card with some padding
            const cardTop = lastVisibleCard.offsetTop;
            const cardHeight = lastVisibleCard.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollTarget = cardTop - (viewportHeight / 2) + (cardHeight / 2);
            
            // Ensure we don't scroll past the top
            const finalScrollTarget = Math.max(0, scrollTarget);
            
            window.scrollTo({
              top: finalScrollTarget,
              behavior: 'smooth'
            });
          }
        }
      }, 100); // Small delay to ensure the new card is rendered
    }
    
    // If this was the last card and all are completed, submit the form
    if (idx === LIFE_AREAS.length - 1 && revealed === LIFE_AREAS.length) {
      if (onSubmit) onSubmit(newScores);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (tutorialStep === 0) {
      setTutorialStep(1);
      return;
    }
    if (revealed < LIFE_AREAS.length) {
      setRevealed(revealed + 1);
      // Smart scroll to show the newly revealed card
      setTimeout(() => {
        const cards = document.querySelectorAll('.page2-card');
        if (cards.length > 0) {
          const lastVisibleCard = cards[revealed]; // Index of the newly revealed card
          if (lastVisibleCard) {
            // Calculate position to show the card with some padding
            const cardTop = lastVisibleCard.offsetTop;
            const cardHeight = lastVisibleCard.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollTarget = cardTop - (viewportHeight / 2) + (cardHeight / 2);
            
            // Ensure we don't scroll past the top
            const finalScrollTarget = Math.max(0, scrollTarget);
            
            window.scrollTo({
              top: finalScrollTarget,
              behavior: 'smooth'
            });
          }
        }
      }, 100); // Small delay to ensure the new card is rendered
    } else {
      if (onSubmit) onSubmit(newScores);
    }
  };

  // Only show the tutorial slide if tutorialStep === 0
  if (tutorialStep === 0) {
    return (
      <div className="page2-form">
        <h2 className="page2-title" style={{marginBottom: '2.5rem'}}>
          <span style={{color: '#97A1FF'}}>Now imagine a</span> full year's salary lands in your<br/>bank account <span style={{color: '#97A1FF'}}>tomorrow.</span>
        </h2>
        <div className="tutorial-visual" style={{
          background: 'linear-gradient(135deg, rgba(183, 155, 255, 0.1), rgba(97, 161, 255, 0.1))',
          border: '1px solid rgba(183, 155, 255, 0.3)',
          borderRadius: '20px',
          padding: '2rem',
          margin: '2rem auto',
          maxWidth: '500px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated background elements */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(183, 155, 255, 0.1) 0%, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '60px',
            height: '60px',
            background: 'rgba(183, 155, 255, 0.2)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '15%',
            width: '40px',
            height: '40px',
            background: 'rgba(97, 161, 255, 0.2)',
            borderRadius: '50%',
            animation: 'float 5s ease-in-out infinite reverse'
          }}></div>
          
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            animation: 'bounce 2s ease-in-out infinite'
          }}>💰</div>
          
          <h3 style={{
            color: '#B79BFF',
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>What would change?</h3>
          
          <p style={{
            color: '#E0E0E0',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '0'
          }}>
            Think about how this windfall could transform<br/>
            different areas of your life...
          </p>
        </div>
        <button type="button" className="btn btn-primary-active" onClick={() => setTutorialStep(1)}>
          Got it
        </button>
      </div>
    );
  }

  return (
    <div className="page2-form">
      <h2 className="page2-title">For each area, ask yourself: if you put extra money into it, what score do you think you could reach?</h2>
      <p className="page2-desc">
        Now slide to rate what you think your score in each factor will be from
        <br/>
        <b style={{fontWeight: 700}}>0 (needs work) to 10 (thriving).</b>
      </p>
      <div className="page2-cards-wrapper" style={{position: 'relative'}}>
        {LIFE_AREAS.slice(0, revealed).map((area, idx) => {
          const colorClass = idx % 3 === 0 ? 'card-dark' : idx % 3 === 1 ? 'card-green' : 'card-pink';
          return (
            <div key={area.label} className={`page2-card ${colorClass}`} style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'all 0.4s ease'
            }}>
              <div className="page2-card-label">{area.label}</div>
              <div className="page2-card-prompt">{area.prompt}</div>
              <div className="page3-prev-label">Previous Selection</div>
              <div className="page2-slider-row">
                <div style={{position: 'relative', width: '100%', height: '44px'}}>
                  <ReactSlider
                    min={0}
                    max={10}
                    value={typeof baseScores[idx] === 'number' ? baseScores[idx] : 0}
                    disabled
                    className="page2-slider page3-prev-slider"
                    thumbClassName="page2-slider-thumb page3-prev-thumb"
                    trackClassName="page2-slider-track"
                    renderThumb={(props, state) => (
                      <div {...props} className="page2-slider-thumb page3-prev-thumb">
                        <span className="page2-slider-value-inside page3-prev-value">{state.valueNow}</span>
                      </div>
                    )}
                    renderTrack={(props, state) => (
                      <div {...props} className={`page2-slider-track ${state.index === 0 ? 'filled' : 'unfilled'} page3-prev-track`}></div>
                    )}
                  />
                </div>
                <div className="page2-slider-labels">
                  <span className="page2-slider-label">Needs work (0)</span>
                  <span className="page2-slider-label">Thriving (10)</span>
                </div>
              </div>
              <div className="page2-slider-row">
                <div style={{position: 'relative', width: '100%', height: '44px'}}>
                  <ReactSlider
                    min={0}
                    max={10}
                    value={newScores[idx]}
                    onChange={(value) => handleSliderChange(idx, value)}
                    onAfterChange={(value) => handleSliderRelease(idx, value)}
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
      {/* <button type="submit" className="btn btn-primary-active page2-next-btn page2-next-btn-absolute">
        {revealed < LIFE_AREAS.length ? 'Next' : 'Complete'}
      </button> */}
      {/* Show the Remember box only for the first question */}
      {revealed === 1 && (
        <div className="page2-remember">
          <b>Remember</b><br/>
          Let the question under each heading guide your reflection<br/>
          <span className="page2-desc-em">There are no right answers here.</span>
        </div>
      )}
    </div>
  );
};

export default Page3; 