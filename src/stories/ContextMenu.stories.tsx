import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { EDIT_DELETE_CONTEXT_MENU_ITEMS } from '../components/ContextMenu/constants';
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
    items: EDIT_DELETE_CONTEXT_MENU_ITEMS
  }
};
