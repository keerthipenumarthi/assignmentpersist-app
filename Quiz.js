import React, { useState } from 'react';

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [interests, setInterests] = useState('');
  const [skills, setSkills] = useState('');
  const [values, setValues] = useState('');
  const [result, setResult] = useState('');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simple logic to generate a result
      let finalResult = 'Creative Explorer';

      if (interests.trim().toLowerCase().includes('tech') || skills.trim().toLowerCase().includes('coding')) {
        finalResult = 'Tech Trailblazer';
      } else if (values.trim().toLowerCase().includes('empathy') || interests.trim().toLowerCase().includes('help')) {
        finalResult = 'Mindful Mentor';
      } else if (skills.trim().toLowerCase().includes('lead') || interests.trim().toLowerCase().includes('startup')) {
        finalResult = 'Business Dreamer';
      }

      const resultText = `🔥 You’re passionate about using your skill in **${skills}**, driven by your interest in **${interests}**, and guided by your value of **${values}**.`;

      setResult(resultText);
      setStep(4);  // This will trigger the result to show
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setInterests('');
    setSkills('');
    setValues('');
    setResult('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fefefe' }}>
      <h2 style={{ textAlign: 'center', color: 'black' }}>🌟 Discover Your Passion</h2>

      {step < 4 && (
        <form onKeyDown={handleEnter}>
          {step === 1 && (
            <label>
              <strong style= {{color: 'black'}}>1. What are you most interested in?</strong>
              <input
                type="text"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', margin: '1rem 0' }}
                placeholder="e.g. Technology, Art, Helping others"
              />
            </label>
          )}
          {step === 2 && (
            <label>
              <strong style = {{color: 'black'}}>2. What are your strongest skills?</strong>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', margin: '1rem 0' }}
                placeholder="e.g. Coding, Leading, Writing"
              />
            </label>
          )}
          {step === 3 && (
            <label>
              <strong style = {{color: 'black'}}>3. What values matter most to you?</strong>
              <input
                type="text"
                value={values}
                onChange={(e) => setValues(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', margin: '1rem 0', color: 'black' }}
                placeholder="e.g. Creativity, Empathy, Freedom"
              />
            </label>
          )}

          <div>
            {step > 1 && (
              <button type="button" onClick={handlePrev} style={{ padding: '0.5rem 1rem', backgroundColor: '#6c757d', color: '#fff', marginRight: '10px' }}>
                ⬅ Previous
              </button>
            )}
            <button type="button" onClick={handleNext} style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff' }}>
              {step === 3 ? 'See Result' : 'Next ➡'}
            </button>
            <button type="button" onClick={handleReset} style={{ padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: '#fff' }}>
              Reset 🔁
            </button>
          </div>
        </form>
      )}

      {step === 4 && (
        <div>
          {/* Updated Result Text Color to Black */}
          <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.1rem', color: 'black' }}>
            {result}
          </p>
          <button type="button" onClick={handleReset} style={{ padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: '#fff' }}>
            Take Again 🔄
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
