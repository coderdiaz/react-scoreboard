import React from 'react';

const PlayerForm = () => {
  return (
    <form className="player-form">
      <input
        type="text"
        className="player-input"
        placeholder="Enter a player's name" />
      <button type="submit" className="submit-button">Add player</button>
    </form>
  );
};

export default PlayerForm;
