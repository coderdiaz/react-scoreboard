import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Player from './Player';
import { AppContext } from '../Context';

const renderWithContext = (component, context) => {
  return render(
    <AppContext.Provider value={context}>
      {component}
    </AppContext.Provider>
  )
}

describe('Player.js', () => {
  test('Booooooom!!!', () => {
    const context = {
      highestScore: null,
      state: {
        isRunning: false,
      },
      decrement: jest.fn(),
      increment: jest.fn(),
    };

    const { getByTestId } = renderWithContext(
      <Player />,
      context,
    );
    expect(getByTestId('score').textContent).toBe('0');
  });

  test('score will be zero', () => {
    const context = {
      highestScore: null,
      state: {
        isRunning: false,
      },
      decrement: jest.fn(),
      increment: jest.fn(),
    };

    const { getByTestId } = renderWithContext(
      <Player name="John Doe" score="0" index="0" />,
      context,
    );
    expect(getByTestId('score').textContent).toBe('0');
  });

  test('player show WIN if the score is equal', () => {
    const context = {
      highestScore: '10',
      state: {
        isRunning: false,
      },
      decrement: jest.fn(),
      increment: jest.fn(),
    };

    const { getByTestId } = renderWithContext(
      <Player name="John Doe" score="10" index="0" />,
      context,
    );
    expect(getByTestId('player-badge').textContent).toBe('WIN');
  });

  test('cannot click over decrement button if the game is not running', () => {
    const context = {
      highestScore: '10',
      state: {
        isRunning: false,
      },
      decrement: jest.fn(),
      increment: jest.fn(),
    };

    const { getByTestId } = renderWithContext(
      <Player name="John Doe" score="10" index="0" />,
      context,
    );

    expect(getByTestId('btn-decrement').disabled).toBeTruthy();
  });
});