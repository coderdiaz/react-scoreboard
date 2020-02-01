import './scoreboard.css';
import React from 'react';
import Context from './Context';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <Context>
      <div className="App">
        <Scoreboard />
      </div>
    </Context>
  );
}

export default App;
