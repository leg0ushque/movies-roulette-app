import './styles.css';

import * as React from 'react';

import type IContextMenuItem from '../../shared/types/IContextMenuItem';

export interface IContextMenuProps {
  id: string
  posX: number
  posY: number
  isVisible: boolean
  items: IContextMenuItem[]
  changeVisibility: (state: boolean) => void
}

const ContextMenu: React.FC<IContextMenuProps> = (props) => {
  if (!props.isVisible) {
    return null;
  }

  const items = props.items.map((item) =>
    <li key={item.name} onClick={() => {
      props.changeVisibility(false);
      item.clickHandler(props.id)
    }}>
      {item.name}
    </li>
  );

  return (
    <ul
      className='context-menu prevent-select'
      style={{ top: props.posY, left: props.posX }}
    >
      <div key='close'>
        <span onClick={() => { props.changeVisibility(false) }}>
          ✖
        </span>
      </div>
      {items}
    </ul>
  );
}

export default ContextMenu;
