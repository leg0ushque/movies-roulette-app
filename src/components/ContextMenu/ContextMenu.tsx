import './styles.css';

import * as React from 'react';

import type IContextMenuState from '../../shared/types/IContextMenuState';

import type IContextMenuItem from '../../shared/types/IContextMenuItem';
export interface IContextMenuProps {
  menuState: IContextMenuState
  items: IContextMenuItem[]
  hideMenu: () => void
}

const ContextMenu: React.FC<IContextMenuProps> = (props) => {
  if (!props.menuState.isVisible) {
    return null;
  }

  const items = props.items.map((item) =>
    <li key={item.name} onClick={() => {
      props.hideMenu();
      item.clickHandler(props.menuState.id)
    }}>
      {item.name}
    </li>
  );

  return (
    <ul
      className='context-menu prevent-select'
      style={{ top: props.menuState.posY, left: props.menuState.posX }}
    >
      <div key='close'>
        <span onClick={() => { props.hideMenu() }}>
          ✖
        </span>
      </div>
      {items}
    </ul>
  );
}

export default ContextMenu;
