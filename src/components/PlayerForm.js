import React from 'react';
import { AppContext } from '../Context';

const PlayerForm = () => {
  const context = React.useContext(AppContext);
  const [playerName, setPlayerName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName !== '') {
      context.addPlayer(playerName);
      setPlayerName('');
    }
  }

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }
  
  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="player-input"
        placeholder="Enter a player's name"
        onChange={(e) => handleChange(e)}
        value={playerName} />
      <button type="submit" className="submit-button">Add player</button>
    </form>
  );
};

export default PlayerForm;
