import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Counter from '../components/Counter';

const CounterStory: ComponentMeta<typeof Counter> = {
    title: "Components/Counter",
    component: Counter,
}
export default CounterStory;

export const InitialNumber = () => <Counter initialValue={321}/>