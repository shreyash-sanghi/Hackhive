import React, { useState, useEffect } from 'react';
import '../index.css'

const MeditationApp = () => {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [strokeColor, setStrokeColor] = useState('#0088cc'); // Initial color

  const handleChange = (e) => {
    setInputMinutes(parseInt(e.target.value, 10)); // Parse the input value as an integer
  };

  useEffect(() => {
    if (timerOn) {
      const timer = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(prevTime => prevTime - 1);
          // Adjust the stroke color based on time remaining
          if (timeLeft <= (inputMinutes * 60) / 2) {
            setStrokeColor('#f5a623'); // Change color halfway through the timer
          }
        } else {
          setTimerOn(false);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timerOn, timeLeft, inputMinutes]);

  const startTimer = () => {
    setTimeLeft(inputMinutes * 60); // Convert minutes to seconds
    setStrokeColor('#0088cc'); // Reset stroke color
    setTimerOn(true);
  };

  const pauseTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTimeLeft(0);
    setStrokeColor('#0088cc'); // Reset stroke color
    setTimerOn(false);
  };

  return (
    <>
    <div className="App text-center">
      <img className='mix-blend-darken' src="https://gifdb.com/images/high/goal-levitating-during-meditation-ahqaz1p74isjjpna.gif" alt="" />
      {/* Input field for time */}
      <input type="number" value={inputMinutes} onChange={handleChange} placeholder="Enter time in minutes" />

      {/* Start, Pause, and Reset buttons */}
      {!timerOn ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}
      <button onClick={resetTimer}>Reset</button>

      {/* Show countdown timer with circular progress bar */}
      <div className="progress-bar">
        <div className="progress" style={{ strokeDashoffset: `${((inputMinutes * 60 - timeLeft) / (inputMinutes * 60)) * 283}%`, stroke: strokeColor }}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
          </svg>
        </div>
        <div className="countdown">{`${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`}</div>
      </div>
    </div>
    
    </>
    
    
  );
};

export default MeditationApp;
