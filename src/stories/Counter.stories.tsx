import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import Counter, { type ICounterProps } from '../components/Counter';

const CounterStory: ComponentMeta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter
}
export default CounterStory;

const Template: ComponentStory<typeof Counter> = (props: ICounterProps) => <Counter {...props} />;

export const Default = {
  ...Template.bind({}),
  args: {
    initialValue: 555
  }
};
