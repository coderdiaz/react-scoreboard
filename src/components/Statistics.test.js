import React from 'react';
import { render } from '@testing-library/react';
import { AppContext } from '../Context';
import Statistics from './Statistics';

const renderWithContext = (component, context) => {
  return render(
    <AppContext.Provider value={context}>
      {component}
    </AppContext.Provider>
  )
}


describe('Statistics.js', () => {
  test('statistics show with initial points in zero', () => {
    const context = {
      totalPoints: 0,
      state: {
        players: [],
      },
    };
  
    const { getByTestId } = renderWithContext(
      <Statistics />,
      context,
    );
  
    expect(getByTestId('players').textContent).toBe('0');
    expect(getByTestId('total-points').textContent).toBe('0');
  });

  test('statistics show with 5 players and 100 points', () => {
    const context = {
      totalPoints: 100,
      state: {
        players: [{},{},{},{},{}],
      },
    };
  
    const { getByTestId } = renderWithContext(
      <Statistics />,
      context,
    );
  
    expect(getByTestId('players').textContent).toBe('5');
    expect(getByTestId('total-points').textContent).toBe('100');
  });
});