import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import AppName from './AppName';

describe('AppName', () => {
  const onClickMock = jest.fn();

  test('has onClick called on being clicked', () => {
    const { container } = render(<AppName onClick={onClickMock}/>)

    const appName = container.getElementsByClassName('app-name')[0]

    fireEvent.click(appName)

    expect(onClickMock).toBeCalledTimes(1)
  });
});
