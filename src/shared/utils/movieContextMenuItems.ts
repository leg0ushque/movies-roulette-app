import { action } from '@storybook/addon-actions';

import type IContextMenuItem from '../types/IContextMenuItem';

export const movieContextMenuItems: IContextMenuItem[] = [
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
];
