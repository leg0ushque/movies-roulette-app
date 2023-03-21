import React, { Component } from 'react';
import './styles.css';

interface ICounterProps {
  initialValue: number
};

interface ICounterState {
  value: number
};

class Counter extends Component<ICounterProps, ICounterState> {
  state = {
    value: 0
  }

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
      return { value: (state.value - 1) };
    });
  };

  render (): React.DetailedReactHTMLElement<{ className: string }, HTMLElement> {
    return React.createElement('div', { className: 'counter' }, [
      React.createElement(
        'span',
        { className: 'counterValue' },
        this.state.value.toString()
      ),
      React.createElement('div', {}, [
        React.createElement(
          'button',
          {
            className: 'button incButton',
            type: 'button',
            onClick: this.incrementCounter
          },
          '+1'
        ),
        React.createElement(
          'button',
          {
            className: 'button decButton',
            type: 'button',
            onClick: this.decrementCounter
          },
          '-1'
        )
      ])
    ]);
  }
}

export default Counter;
