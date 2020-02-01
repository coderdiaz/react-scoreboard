import React from 'react';

const Player = () => {
  return (
    <div className="player grid">
      <div className="player-remove"></div>
      <div className="player-name">
        Player One
      </div>
      <div className="player-controls grid">
        <div className="decrement">
          <button className="btn">-</button>
        </div>
        <span className="score">0</span>
        <div className="increment">
          <button className="btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
