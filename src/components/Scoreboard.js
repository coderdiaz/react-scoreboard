import React from 'react';
import Statistics from './Statistics';
import Stopwatch from './Stopwatch';
import Player from './Player';
import PlayerForm from './PlayerForm';
import { AppContext } from '../Context';

const Scoreboard = () => {
  const context = React.useContext(AppContext);

  return (
    <div className="scoreboard">
      <h1 className="scoreboard-title">Scoreboard</h1>
      <h2 className="scoreboard-subtitle">
        A board for publicly displaying the score in a game
      </h2>
      <div className="scoreboard-wrapper">
        <div className="scoreboard-header grid">
          <Statistics />
          <Stopwatch />
        </div>
        <div className="scoreboard-content">
          {
            context.state.players
              .map((player, index) =>
                <Player
                  key={index}
                  index={index}
                  name={player.name}
                  score={player.points} />
              )
          }
        </div>
        <div className="scoreboard-footer">
          <PlayerForm />
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
