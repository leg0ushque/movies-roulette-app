import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Counter from './Counter';

describe('Counter', () => {
  const testInitialValue: number = 132;

  beforeEach(() => {
    render(<Counter initialValue={testInitialValue} />)
  });

  test('has initial value rendered', () => {
    const counterValueElement = screen.getByText(testInitialValue);

    expect(counterValueElement).toHaveTextContent(testInitialValue.toString());
  })

  test('has "increment" button with a click event incrementing the displayed value', () => {
    const counterValueElement = screen.getByText(testInitialValue);

    fireEvent.click(screen.getByText('+1'));

    expect(counterValueElement).toHaveTextContent((testInitialValue + 1).toString());
  })

  test('has "decrement" button with a click event decrementing the displayed value', () => {
    const counterValueElement = screen.getByText(testInitialValue);

    fireEvent.click(screen.getByText('-1'));

    expect(counterValueElement).toHaveTextContent((testInitialValue - 1).toString());
  })
});
