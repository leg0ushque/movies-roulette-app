import * as React from 'react';

import ContextMenu from '../components/ContextMenu';

import { useState } from 'react';
import type IContextMenuItem from '../shared/types/IContextMenuItem';
export interface IContextMenuWrapperProps {
  items: IContextMenuItem[]
}

const ContextMenuWrapper: React.FC<IContextMenuWrapperProps> = (props) => {
  const [contextItemId, setContextItemId] = useState('')
  const [contextMenuPosX, setContextMenuPosX] = useState(0)
  const [contextMenuPosY, setContextMenuPosY] = useState(0)
  const [contextMenuIsVisible, setContextMenuVisibility] = useState(false)

  const showContextMenu = (event: React.MouseEvent<HTMLLIElement>): void => {
    event.preventDefault();

    setContextMenuPosX(event.pageX)
    setContextMenuPosY(event.pageY)
    setContextMenuVisibility(true)
  }

  return (
    <>
      <ContextMenu
        id={contextItemId}
        posX={contextMenuPosX}
        posY={contextMenuPosY}
        isVisible={contextMenuIsVisible}
        changeVisibility={setContextMenuVisibility}
        items={props.items}
        />
        <span>Here is the list with context menu. Right click to test!</span>
        <ul>
          <li onContextMenu={(e) => {
            setContextItemId('item-id');
            showContextMenu(e);
          }}>
            First item of the list
          </li>
        </ul>
        <ul>
          <li onContextMenu={(e) => {
            setContextItemId('another-item-id');
            showContextMenu(e);
          }}>
            Second item of the list
          </li>
        </ul>
    </>
  );
}

export default ContextMenuWrapper;
