import './styles.css';

import React from 'react';

import type IContextMenuItem from '../../shared/types/IContextMenuItem';

export interface IMovieTileContextMenuProps {
  id: string
  menuIsVisible: boolean
  items: IContextMenuItem[]
  hideMenu: () => void
}

const MovieTileContextMenu: React.FC<IMovieTileContextMenuProps> = ({ id, menuIsVisible, items, hideMenu }) => {
  if (!menuIsVisible) {
    return null;
  }

  const menuItems = items.map((item) =>
    <li key={item.name} onClick={(event) => {
      hideMenu();
      event.stopPropagation();
      item.clickHandler(id)
    }}>
      {item.name}
    </li>
  );

  return (
    <>
      <ul
        className='movie-tile-context-menu prevent-select' role='movie-tile-context-menu'
      >
        <div key='close'>
          <span onClick={(event) => {
            event.stopPropagation();
            hideMenu()
          }} role='movie-tile-context-menu-close-button'>
            &#10006;
          </span>
        </div>
        {menuItems}
      </ul>
    </>
  );
}

export default MovieTileContextMenu;
