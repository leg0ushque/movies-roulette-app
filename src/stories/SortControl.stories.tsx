import '../components/SortControl/styles.css';

import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import SortControl, { type ISortControlProps } from '../components/SortControl';
import sortWays from '../components/SortControl/sortWays';

const SortControlStory: ComponentMeta<typeof SortControl> = {
  title: 'Components/SortControl',
  component: SortControl
}
export default SortControlStory;

const Template: ComponentStory<typeof SortControl> = (props: ISortControlProps) => <SortControl {...props} />;

export const Default = {
  ...Template.bind({}),
  args: {
    selectedSortId: sortWays[1].id,
    sortWays,
    onChange: action('SortControl has sort way changed to id:')
  }
};
