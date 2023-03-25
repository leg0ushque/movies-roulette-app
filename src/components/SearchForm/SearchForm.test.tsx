import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import SearchForm, { INPUT_PLACEHOLDER_TEXT, INPUT_SUBMIT_TEXT } from './SearchForm';

describe('SearchForm', () => {
  const testInitialValue = 'test initial value';
  const inputValue = 'input value';

  const onSearchCallbackMock = jest.fn(value => {});

  let inputElement: HTMLElement;
  let submitButton: HTMLElement;

  beforeEach(() => {
    render(<SearchForm
            initialValue={testInitialValue}
            onSearch={onSearchCallbackMock}
          />)
    inputElement = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);
    submitButton = screen.getByDisplayValue(INPUT_SUBMIT_TEXT);
  });

  test('has an input rendered with the value equal to initial value passed in props', () => {
    expect(inputElement).toHaveValue(testInitialValue.toString());
  })

  test('has the "onSearch" prop called with proper value after typing to the input and a "click" event on the Submit button', () => {
    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.click(submitButton)

    expect(onSearchCallbackMock).toBeCalledWith(inputValue);
  })

  test('has the "onSearch" prop called with proper value after typing to the input and pressing Enter key', () => {
    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    expect(onSearchCallbackMock).toBeCalledWith(inputValue);
  })
});
