// src/pages/Quiz.js
import React, { useState } from 'react';

const Quiz = () => {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`You are passionate about: ${answer}`);
  };

  return (
    <div>
      <h2>Discover Your Passion</h2>
      <form onSubmit={handleSubmit}>
        <label>
          What cause interests you the most?
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Quiz;
