import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MovieTileContextMenu from './MovieTileContextMenu';

describe('MovieTileContextMenu', () => {
  const firstHandlerMock = jest.fn();
  const secondHandlerMock = jest.fn();
  const hideMenuMock = jest.fn();

  const MENU_ITEMS = [
    { name: 'first button', clickHandler: firstHandlerMock },
    { name: 'second button', clickHandler: secondHandlerMock }
  ];

  const TEST_ID = 'testId';

  test('has null returned when menu is not visible', () => {
    const { container } = render(<MovieTileContextMenu
      id={TEST_ID}
      menuIsVisible={false}
      items={MENU_ITEMS}
      hideMenu={hideMenuMock}
      />)

    expect(container).toBeEmptyDOMElement();
  });

  test('has all items passed in props rendered as buttons', () => {
    const { getByRole } = render(<MovieTileContextMenu
      id={TEST_ID}
      menuIsVisible={true}
      items={MENU_ITEMS}
      hideMenu={hideMenuMock}
      />)

    const ul = getByRole('movie-tile-context-menu')

    expect(ul.children.length).toBe(MENU_ITEMS.length + 1); // close button is a child besides buttons
  });

  test('has hideMenu called when close button clicked', () => {
    const { getByRole } = render(<MovieTileContextMenu
      id={TEST_ID}
      menuIsVisible={true}
      items={MENU_ITEMS}
      hideMenu={hideMenuMock}
      />)

    const closeButton = getByRole('movie-tile-context-menu-close-button')

    fireEvent.click(closeButton);

    expect(hideMenuMock).toBeCalledTimes(1);
  });

  test('has hideMenu and item handler called when menu item clicked', () => {
    const clickedIndex = 1; // should be in range of menuItems

    const { getByRole } = render(<MovieTileContextMenu
      id={TEST_ID}
      menuIsVisible={true}
      items={MENU_ITEMS}
      hideMenu={hideMenuMock}
      />)

    const ul = getByRole('movie-tile-context-menu')

    expect(hideMenuMock).toBeCalledTimes(1);
    fireEvent.click(ul.children[clickedIndex + 1]); // li elements start after first-child with close button

    expect(hideMenuMock).toBeCalledTimes(2); // called once before click and once after click
    expect(MENU_ITEMS[clickedIndex].clickHandler).toBeCalledWith(TEST_ID)
  });
});
