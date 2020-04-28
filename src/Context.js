import React from 'react';

// Creating React Context
export const AppContext = React.createContext();

class Context extends React.Component {
  state = {
    isRunning: false,
    players: [],
  };

  // Function to set the status game
  statusGame = (status) => {
    this.setState({ isRunning: status });
  }

  // Function to add new player
  addPlayer = (name) => {
    const player = { name, points: 0 };
    this.setState({
      players: [...this.state.players, player],
    });
  }

  increment = (playerIndex) => {
    const players = this.state.players;
    players[playerIndex].points += 1;
    this.setState({
      players: [...players],
    });
  }

  decrement = (playerIndex) => {
    const players = this.state.players;
    if (players[playerIndex].points > 0) {
      players[playerIndex].points -= 1;
      this.setState({
        players: [...players],
      });
    }
  }

  render() {
    const totalPoints = this.state.players.reduce((total, player) => total + player.points, 0);
    const highestScore = () => {
      const scores = this.state.players.map(p => p.points);
      const maxScore = Math.max(...scores);
      if (maxScore) {
        return maxScore;
      }
      return null;
    };
    const context = {
      state: this.state,
      statusGame: this.statusGame,
      addPlayer: this.addPlayer,
      increment: this.increment,
      decrement: this.decrement,
      totalPoints,
      highestScore: highestScore(),
    };

    return <AppContext.Provider value={context}>
      {this.props.children}
    </AppContext.Provider>
  }
};

export default Context;
