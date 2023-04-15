import type IContextMenuItem from '../../shared/types/IContextMenuItem';

export const EDIT_DELETE_CONTEXT_MENU_ITEMS: IContextMenuItem[] = [
  {
    name: 'Edit',
    clickHandler: (id: string) => { alert(`EDIT: ${id}`) }
  },
  {
    name: 'Delete',
    clickHandler: (id: string) => { alert(`DELETE: ${id}`) }
  }
];
