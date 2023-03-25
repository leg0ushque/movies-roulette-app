import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import GenreSelect from './GenreSelect';

describe('GenreSelect', () => {
  const testGenres = [
    {
      id: '3513',
      name: 'Action'
    },
    {
      id: '8537',
      name: 'Adventure'
    }];

  const onSelectCallbackMock = jest.fn(value => {});

  test('has all genres passed in props rendered', () => {
    const { getByRole } = render(<GenreSelect
      genres={testGenres}
      selectedGenreId={''}
      onSelect={onSelectCallbackMock}
    />)
    const ul = getByRole('genresList')

    expect(ul.children.length).toEqual(testGenres.length + 1) // genres buttons count + All button
    expect(ul.children[0]).toHaveTextContent('All')

    let index = 1;
    for (const element of testGenres) {
      expect(ul.children[index]).toHaveTextContent(element.name)
      index += 1;
    }
  })

  test('has only All button rendered when no genres passed in props', () => {
    const { getByRole } = render(<GenreSelect
      genres={[]}
      selectedGenreId={''}
      onSelect={onSelectCallbackMock}
    />)
    const ul = getByRole('genresList')

    expect(ul.children.length).toEqual(1) // only All button
    expect(ul.children[0]).toHaveTextContent('All')
    expect(ul.children[0]).toHaveClass('selected');
  })

  test('has the selected genre passed in props highlighted', () => {
    const selectedIndex = 0; // should be in bounds of testGenres array
    const { getByRole } = render(<GenreSelect
      genres={testGenres}
      selectedGenreId={testGenres[selectedIndex].id}
      onSelect={onSelectCallbackMock}
    />)
    const ul = getByRole('genresList')

    expect(ul.children[selectedIndex + 1]).toHaveClass('selected')
  })

  test('has "onSelect" called after a click event on a genre button with passing correct genreId in arguments', () => {
    const itemToSelectIndex = 1; // should be in bounds of testGenres array
    const { getByRole } = render(<GenreSelect
      genres={testGenres}
      selectedGenreId={testGenres[itemToSelectIndex].id}
      onSelect={onSelectCallbackMock}
    />)
    const ul = getByRole('genresList')

    fireEvent.click(ul.children[itemToSelectIndex + 1])

    expect(onSelectCallbackMock).toBeCalledWith(testGenres[itemToSelectIndex].id);
  })
});
