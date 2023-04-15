import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import SearchForm, { DEFAULT_VALUE, INPUT_PLACEHOLDER_TEXT, INPUT_SUBMIT_TEXT } from './SearchForm';

describe('SearchForm', () => {
  const testInitialValue = 'test initial value';
  const inputValue = 'input value';

  const onSearchCallbackMock = jest.fn(value => {});

  let inputElement: HTMLElement;
  let submitButton: HTMLElement;

  test('has an input rendered with the value equal to initial value passed in props', () => {
    render(<SearchForm
      initialValue={testInitialValue}
      onSearch={onSearchCallbackMock}
    />)
    inputElement = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);
    submitButton = screen.getByDisplayValue(INPUT_SUBMIT_TEXT);

    expect(inputElement).toHaveValue(testInitialValue.toString());
  })

  test('has the "onSearch" prop called with proper value after typing to the input and a "click" event on the Submit button', () => {
    render(<SearchForm
      initialValue={testInitialValue}
      onSearch={onSearchCallbackMock}
    />)
    inputElement = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);
    submitButton = screen.getByDisplayValue(INPUT_SUBMIT_TEXT);

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.click(submitButton)

    expect(onSearchCallbackMock).toBeCalledWith(inputValue);
  })

  test('has the "onSearch" prop called with proper value after typing to the input and pressing Enter key', () => {
    render(<SearchForm
      initialValue={testInitialValue}
      onSearch={onSearchCallbackMock}
    />)
    inputElement = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);
    submitButton = screen.getByDisplayValue(INPUT_SUBMIT_TEXT);

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    expect(onSearchCallbackMock).toBeCalledWith(inputValue);
  })

  test('has default value if initial value wasn\'t provided', () => {
    render(<SearchForm
      onSearch={onSearchCallbackMock}
    />)

    inputElement = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);
    submitButton = screen.getByDisplayValue(INPUT_SUBMIT_TEXT);

    expect(inputElement).toHaveValue(DEFAULT_VALUE);
  })
});
