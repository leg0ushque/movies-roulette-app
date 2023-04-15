import '../components/ThreeDotsButton/styles.css';

import React from 'react';
import styled from 'styled-components';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ThreeDotsButton, { type IThreeDotsButtonProps } from '../components/ThreeDotsButton';

const ThreeDotsButtonStory: ComponentMeta<typeof ThreeDotsButton> = {
  title: 'Components/ThreeDotsButton',
  component: ThreeDotsButton
}
export default ThreeDotsButtonStory;

const Template: ComponentStory<typeof ThreeDotsButton> = (props: IThreeDotsButtonProps) => <ThreeDotsButton {...props} />;

const WIDE_DIV = styled.div`
  background: var(--color1);
  height: 300px;
  width: 300px;
  position:relative;
  `;

const NARROW_DIV = styled.div`
  background: var(--color5);
  height: 100px;
  width: 290px;
  `;

export const Default = {
  ...Template.bind({}),
  args: {
    onClick: action('ThreeDotsButton has called onClick callback')
  }
};

Default.decorators = [
  (Story) => (
    <WIDE_DIV>
      this button is inside parent div
      <Story />
      <NARROW_DIV></NARROW_DIV>
    </WIDE_DIV>
  )
]
