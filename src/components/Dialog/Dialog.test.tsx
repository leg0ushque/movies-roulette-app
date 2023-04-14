import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { Logo } from '../DialogLogo';
import Dialog from './Dialog';

describe('Dialog', () => {
  const onCloseMock = jest.fn();

  const TEST_TITLE: JSX.Element = (<h2>test title</h2>)
  const TEST_TITLE_TEXT = '<h2>test title</h2>'
  const TEST_BODY: JSX.Element = (<div><span>test body</span></div>)
  const TEST_BODY_TEXT = '<div><span>test body</span></div>'

  test('has all items passed in props rendered', () => {
    const { container } = render(
      <Dialog
        logo={Logo.Check}
        title={TEST_TITLE}
        isWide={true}
        isCentered={false}
        onClose={onCloseMock}
      >
        {TEST_BODY}
      </Dialog>)

    const dialogTitle = container.querySelector('.dialog-title')
    const dialogBody = container.querySelector('.dialog-body')

    expect(dialogTitle).toContainHTML(TEST_TITLE_TEXT);
    expect(dialogBody).toContainHTML(TEST_BODY_TEXT);
  });

  test('has to be centered when proper value passed in props', () => {
    const { container } = render(
      <Dialog
        title={TEST_TITLE}
        isWide={true}
        isCentered={true}
        onClose={onCloseMock}
      >
        {TEST_BODY}
      </Dialog>)

    const dialog = container.querySelector('.dialog.centered')

    expect(dialog).not.toBeNull();
  });

  test('has onClose callback called on close button pressed', () => {
    const { getByRole } = render(
      <Dialog
        title={TEST_TITLE}
        isWide={true}
        isCentered={false}
        onClose={onCloseMock}
      >
        {TEST_BODY}
      </Dialog>)

    const closeButton = getByRole('dialog-close-button')

    fireEvent.click(closeButton);

    expect(onCloseMock).toBeCalledTimes(1);
  });

  test('has no logo rendered when it\'s not passed in props', () => {
    const { container } = render(
      <Dialog
        title={TEST_TITLE}
        isWide={true}
        isCentered={false}
        onClose={onCloseMock}
      >
        {TEST_BODY}
      </Dialog>)

    const dialogLogo = container.querySelector('.dialog-logo')

    expect(dialogLogo).toBeNull();
  });
});
