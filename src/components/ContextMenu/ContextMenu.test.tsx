import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ContextMenu from './ContextMenu';

describe('ContextMenu', () => {
  const firstHandlerMock = jest.fn();
  const secondHandlerMock = jest.fn();
  const hideMenuMock = jest.fn();

  const menuItems = [
    { name: 'first button', clickHandler: firstHandlerMock },
    { name: 'second button', clickHandler: secondHandlerMock }
  ];

  const menuState = { id: 'testId', posX: 5, posY: 10, isVisible: true }

  test('has null returned when menu is not visible', () => {
    const { container } = render(<ContextMenu
      items={menuItems}
      menuState={{ ...menuState, isVisible: false }}
      hideMenu={hideMenuMock}
      />)

    expect(container).toBeEmptyDOMElement();
  });

  test('has all items passed in props rendered as buttons', () => {
    const { getByRole } = render(<ContextMenu
      items={menuItems}
      menuState={menuState}
      hideMenu={hideMenuMock}
      />)

    const ul = getByRole('context-menu')

    expect(ul.children.length).toBe(menuItems.length + 1); // close button is a child besides buttons
  });

  test('has hideMenu called when close button clicked', () => {
    const { getByRole } = render(<ContextMenu
      items={menuItems}
      menuState={menuState}
      hideMenu={hideMenuMock}
      />)

    const closeButton = getByRole('context-menu-close-button')

    fireEvent.click(closeButton);

    expect(hideMenuMock).toBeCalledTimes(1);
  });

  test('has hideMenu and item handler called when menu item clicked', () => {
    const clickedIndex = 1; // should be in range of menuItems

    const { getByRole } = render(<ContextMenu
      items={menuItems}
      menuState={menuState}
      hideMenu={hideMenuMock}
      />)

    const ul = getByRole('context-menu')

    expect(hideMenuMock).toBeCalledTimes(1);
    fireEvent.click(ul.children[clickedIndex + 1]); // li elements start after first-child with close button

    expect(hideMenuMock).toBeCalledTimes(2); // called once before click and once after click
    expect(menuItems[clickedIndex].clickHandler).toBeCalledWith(menuState.id)
  });
});
