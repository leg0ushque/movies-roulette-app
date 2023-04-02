import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { movieContextMenuItems } from '../shared/utils/movieContextMenuItems';
import ContextMenuWrapper, { type IContextMenuWrapperProps } from './ContextMenuWrapper';

const ContextMenuWrapperStory: ComponentMeta<typeof ContextMenuWrapper> = {
  title: 'Components/ContextMenu',
  component: ContextMenuWrapper
}
export default ContextMenuWrapperStory;

const Template: ComponentStory<typeof ContextMenuWrapper> = (props: IContextMenuWrapperProps) => <ContextMenuWrapper {...props} />;

export const Default = {
  ...Template.bind({}),
  args: {
    items: movieContextMenuItems
  }
};
