import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppContext } from '../Context';
import PlayerForm from './PlayerForm';

const renderWithContext = (component, context) => {
  return render(
    <AppContext.Provider value={context}>
      {component}
    </AppContext.Provider>
  )
};


describe('PlayerForm.js', () => {
  test('Will be rendered', () => {
    const context = {
      addPlayer: jest.fn(),
    };
  
    renderWithContext(
      <PlayerForm />,
      context,
    );
  });

  test('Cannot set a new player if the input value is empty', () => {
    const context = {
      addPlayer: jest.fn(),
    };
  
    const { getByTestId } = renderWithContext(
      <PlayerForm />,
      context,
    );

    expect(getByTestId('input-player').value).toBe('');
    fireEvent.click(getByTestId('button-player'));

    expect(context.addPlayer).not.toBeCalled();
  });

  test('set a new player if the input value is not empty', () => {
    const context = {
      addPlayer: jest.fn(),
    };
  
    const { getByTestId } = renderWithContext(
      <PlayerForm />,
      context,
    );

    fireEvent.change(getByTestId('input-player'), { target: { value: 'New Player' } });

    expect(getByTestId('input-player').value).toBe('New Player');
    fireEvent.click(getByTestId('button-player'));

    expect(context.addPlayer).toBeCalled();
  });
});