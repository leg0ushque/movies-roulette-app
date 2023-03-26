import './styles.css';

import React, { Component } from 'react';

interface ICounterProps {
  initialValue: number
}

interface ICounterState {
  value: number
}

class Counter extends Component<ICounterProps, ICounterState> {
  state = {
    value: 0
  };

  constructor (props: ICounterProps) {
    super(props);
    this.state.value = props.initialValue;
  }

  incrementCounter = (): void => {
    this.setState((state) => {
      return { value: state.value + 1 };
    });
  };

  decrementCounter = (): void => {
    this.setState((state) => {
      return { value: state.value - 1 };
    });
  };

  render (): React.DetailedReactHTMLElement<
  { key: string, className: string },
  HTMLElement
  > {
    return React.createElement(
      'div',
      { key: 'counterWrapper', className: 'counter' },
      [
        React.createElement(
          'span',
          {
            key: 'valueSpan',
            className: 'counterValue'
          },
          this.state.value.toString()
        ),
        React.createElement('div', { key: 'counterButtons' }, [
          React.createElement(
            'button',
            {
              key: 'decrementor',
              className: 'incButton',
              type: 'button',
              onClick: this.incrementCounter
            },
            '+1'
          ),
          React.createElement(
            'button',
            {
              key: 'incrementor',
              className: 'decButton',
              type: 'button',
              onClick: this.decrementCounter
            },
            '-1'
          )
        ])
      ]
    );
  }
}

export default Counter;
