import React from 'react';
import { AppContext } from '../Context';

const Statistics = () => {
  const context = React.useContext(AppContext);

  return <table className="statistics">
    <tbody>
      <tr>
        <td className="row-label">Players:</td>
        <td data-testid="players">{context.state.players.length}</td>
      </tr>
      <tr>
        <td className="row-label">Total points:</td>
        <td data-testid="total-points">{context.totalPoints}</td>
      </tr>
    </tbody>
  </table>;
}

export default Statistics;
