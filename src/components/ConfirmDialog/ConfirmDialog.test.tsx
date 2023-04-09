import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import ConfirmDialog from './ConfirmDialog';

describe('ConfirmDialog', () => {
  const onConfirmMock = jest.fn();
  const onCloseMock = jest.fn();

  const TEST_TITLE = 'test title'
  const TEST_TEXT = 'test text'

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<ConfirmDialog
      title={TEST_TITLE}
      text={TEST_TEXT}
      onConfirm={onConfirmMock}
      onClose={onCloseMock}
      />)

    const title = getByRole('dialog-title')
    const text = getByRole('confirm-dialog-message')

    expect(title).toHaveTextContent(TEST_TITLE)
    expect(text).toHaveTextContent(TEST_TEXT)
  });

  test('has onConfirm callback called on confirm button pressed', () => {
    const { getByRole } = render(<ConfirmDialog
      title={TEST_TITLE}
      text={TEST_TEXT}
      onConfirm={onConfirmMock}
      onClose={onCloseMock}
      />)

    const confirmButton = getByRole('confirm-dialog-button')

    fireEvent.click(confirmButton);

    expect(onConfirmMock).toBeCalledTimes(1);
  });
});
