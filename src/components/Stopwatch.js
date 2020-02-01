import React from 'react';
import { AppContext } from '../Context';

class Stopwatch extends React.Component {
  static contextType = AppContext;

  state = {
    elapsedTime: 0,
    previousTime: 0,
    intervalId: null,
  };

  // Mounted
  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => this.tick(), 100),
    });
  }

  // Destroy
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  tick = () => {
    if (this.context.state.isRunning) {
      console.log('start');
      const now = Date.now();
      const time = this.state.elapsedTime;

      this.setState({
        elapsedTime: time + (now - this.state.previousTime),
        previousTime: now,
      });
    }
  }

  toogleHandler = () => {
    const status = this.context.state.isRunning;
    this.context.statusGame(!status);
    this.setState({ previousTime: Date.now() });
  }

  reset = () => {
    this.setState({
      elapsedTime: 0,
    });
  }

  render() {
    return (
      <div className="stopwatch">
        <h2 className="title">Stopwatch</h2>
        <span className="stopwatch-time">{Math.floor(this.state.elapsedTime / 1000)}</span>
        <div className="stopwatch-controls">
          <button
            className="btn handler" onClick={this.toogleHandler}>
              {this.context.state.isRunning ? 'Stop' : 'Start'}
            </button>
          <button className="btn" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
};

export default Stopwatch;