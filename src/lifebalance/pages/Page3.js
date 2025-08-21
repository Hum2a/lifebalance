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

  const handleNext = (e) => {
    e.preventDefault();
    if (tutorialStep === 0) {
      setTutorialStep(1);
      return;
    }
    if (revealed < LIFE_AREAS.length) {
      setRevealed(revealed + 1);
    } else {
      if (onSubmit) onSubmit(newScores);
    }
  };

  // Only show the tutorial slide if tutorialStep === 0
  if (tutorialStep === 0) {
    return (
      <form className="page2-form" onSubmit={handleNext}>
        <h2 className="page2-title" style={{marginBottom: '2.5rem'}}>
          <span style={{color: '#97A1FF'}}>Now imagine a</span> full year's salary lands in your<br/>bank account <span style={{color: '#97A1FF'}}>tomorrow.</span>
        </h2>
        <div className="page2-cards-wrapper" style={{minHeight: 'unset', margin: '0 auto 2.5rem auto', maxWidth: 500}}>
          <div className="page2-card card-dark">
            <div className="page2-slider-row" style={{margin: 0}}>
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
                  value={4}
                  disabled
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
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary-active">
          Got it
        </button>
      </form>
    );
  }

  return (
    <form className="page2-form" onSubmit={handleNext}>
      <h2 className="page2-title">For each area, ask yourself: if you put extra money into it, what score do you think you could reach?</h2>
      <p className="page2-desc">
        Now slide to rate what you think your score in each factor will be from
        <br/>
        <b style={{fontWeight: 700}}>0 (needs work) to 10 (thriving).</b>
      </p>
      <div className="page2-cards-wrapper" style={{minHeight: '340px', position: 'relative'}}>
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
                    value={newScores[idx]}
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
      {/* Show the Remember box only for the first question */}
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

export default Page3; 