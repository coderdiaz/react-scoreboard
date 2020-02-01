import React from 'react';
import { AppContext } from '../Context';

const Statistics = () => {
  const context = React.useContext(AppContext);

  return <table className="statistics">
    <tbody>
      <tr>
        <td className="row-label">Players:</td>
        <td>{context.state.players.length}</td>
      </tr>
      <tr>
        <td className="row-label">Total points:</td>
        <td>{context.totalPoints}</td>
      </tr>
    </tbody>
  </table>;
}

export default Statistics;
