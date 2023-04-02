import * as React from 'react';

import ContextMenu from '../components/ContextMenu';

import type IContextMenuState from '../shared/types/IContextMenuState';

import { useState } from 'react';
import type IContextMenuItem from '../shared/types/IContextMenuItem';
export interface IContextMenuWrapperProps {
  items: IContextMenuItem[]
}

const ContextMenuWrapper: React.FC<IContextMenuWrapperProps> = (props) => {
  const [contextMenuState, setContextMenuState] = useState<IContextMenuState>({ id: '', posX: 0, posY: 0, isVisible: false });

  const showContextMenu = (event: React.MouseEvent<HTMLLIElement>, id: string): void => {
    event.preventDefault();
    setContextMenuState(() => {
      return {
        id,
        posX: event.pageX,
        posY: event.pageY,
        isVisible: true
      }
    })
  }

  const hideContextMenu = (): void => {
    setContextMenuState((state) => {
      return {
        ...state,
        isVisible: false
      }
    })
  }

  return (
    <>
      <ContextMenu
        menuState={contextMenuState}
        hideMenu={hideContextMenu}
        items={props.items}
        />
        <span>Here is the list with context menu. Right click to test!</span>
        <ul>
          <li onContextMenu={(e) => {
            showContextMenu(e, 'item-id');
          }}>
            First item of the list
          </li>
        </ul>
        <ul>
          <li onContextMenu={(e) => {
            showContextMenu(e, 'another-item-id');
          }}>
            Second item of the list
          </li>
        </ul>
    </>
  );
}

export default ContextMenuWrapper;
