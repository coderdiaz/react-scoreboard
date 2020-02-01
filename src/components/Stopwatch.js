import React from 'react';

const Stopwatch = () => {
  return (
    <div className="stopwatch">
      <h2 className="title">Stopwatch</h2>
      <span className="stopwatch-time">0</span>
      <div className="stopwatch-controls">
        <button className="btn handler">Start</button>
        <button className="btn">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;