import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ContextMenuWrapper, { type IContextMenuWrapperProps } from './ContextMenuWrapper';

import type IContextMenuItem from '../shared/types/IContextMenuItem';
const ContextMenuWrapperStory: ComponentMeta<typeof ContextMenuWrapper> = {
  title: 'Components/ContextMenu',
  component: ContextMenuWrapper
}
export default ContextMenuWrapperStory;

const Template: ComponentStory<typeof ContextMenuWrapper> = (props: IContextMenuWrapperProps) => <ContextMenuWrapper {...props} />;

const contextMenuItems: IContextMenuItem[] = [
  {
    name: 'Edit',
    clickHandler: (id: string) => {
      action('EDIT')
      alert(`EDIT: ${id}`)
    }
  },
  {
    name: 'Delete',
    clickHandler: (id: string) => { alert(`DELETE: ${id}`) }
  }
]

export const Default = {
  ...Template.bind({}),
  args: {
    items: contextMenuItems
  }
};
