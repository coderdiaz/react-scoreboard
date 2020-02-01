import React from 'react';
import { AppContext } from '../Context';

const Player = ({ name, score, index }) => {
  const context = React.useContext(AppContext);

  return (
    <div className="player grid">
      <div className="player-remove"></div>
      <div className="player-name flex justify-center">
        {context.highestScore === score ? <small style={{
          padding: '3px 5px',
          backgroundColor: '#338f66',
          borderRadius: '4px',
          color: '#fff',
          fontSize: '10px',
          marginRight: '10px',
        }}>WIN</small> : null }
        {name}
      </div>
      <div className="player-controls grid">
        <div className="decrement">
          <button
            className="btn"
            onClick={() => context.decrement(index)}
            disabled={!context.state.isRunning}>-</button>
        </div>
        <span className="score">{score}</span>
        <div className="increment">
          <button
            className="btn"
            onClick={() => context.increment(index)}
            disabled={!context.state.isRunning}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
