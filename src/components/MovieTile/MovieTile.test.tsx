import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import { type IContextMenuItem } from '../../shared/types';
import setMovieValues from '../../shared/utils/setMovieValues';
import MovieTile from './MovieTile';

import type IGenre from '../../shared/types/IGenre';

describe('MovieTile', () => {
  const firstMenuItemHandlerMock = jest.fn()
  const secondMenuItemHandlerMock = jest.fn()

  const MENU_ITEMS: IContextMenuItem[] = [
    { name: 'Edit', clickHandler: firstMenuItemHandlerMock },
    { name: 'Delete', clickHandler: secondMenuItemHandlerMock }
  ];

  const onClickMock = jest.fn();

  const movie = testData.movies[0];
  const movieGenres = movie.genreIds
    .map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[]

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<MovieTile movie={movie} movieGenres={movieGenres} clickMenuItems={MENU_ITEMS} onClick={onClickMock} />)

    const imageElement = getByRole('image')
    const titleElement = getByRole('title')
    const genresListElement = getByRole('genresList')
    const releaseYearElement = getByRole('releaseYear')

    expect(imageElement).toHaveAttribute('src', movie.imageUrl);
    expect(titleElement.textContent).toBe(movie.title);
    expect(genresListElement.textContent).toBe(movieGenres.map(x => x.name).join(', '));
    expect(releaseYearElement.textContent).toBe(movie.releaseDate?.getFullYear().toString());
  });

  test('has onClick called when clicked', () => {
    const { getByRole } = render(<MovieTile movie={movie} clickMenuItems={MENU_ITEMS} onClick={onClickMock} />)

    const movieTile = getByRole('movieTile')

    fireEvent.click(movieTile)

    expect(onClickMock).toBeCalledTimes(1);
    expect(onClickMock).toBeCalledWith(movie.id)
  });

  test('has default values if no data provided', () => {
    const emptyMovie = setMovieValues(undefined);

    const { getByRole } = render(<MovieTile clickMenuItems={MENU_ITEMS} onClick={onClickMock} />)

    const image = getByRole('image')
    const title = getByRole('title')
    const releaseYear = getByRole('releaseYear')
    const genresList = getByRole('genresList')

    expect(image).toHaveAttribute('src', emptyMovie.imageUrl);
    expect(title.textContent).toBe(emptyMovie.title);
    expect(releaseYear.textContent).toBe(emptyMovie.releaseDate?.getFullYear().toString());
    expect(genresList.textContent).toBe('')
  });

  test('has MenuTile context menu shown on three-dots-button clicked', () => {
    const { container, getByRole } = render(<MovieTile movie={movie} clickMenuItems={MENU_ITEMS} onClick={onClickMock} />)

    const threeDotsButton = getByRole('three-dots-button')

    fireEvent.click(threeDotsButton)

    const contextMenu = container.getElementsByClassName('menu-tile-context-menu')[0]

    expect(contextMenu).toBeInTheDocument();
  });

  test('has MenuTile context menu hidden on context menu item clicked', () => {
    const { container, getByRole } = render(<MovieTile movie={movie} clickMenuItems={MENU_ITEMS} onClick={onClickMock} />)

    const threeDotsButton = getByRole('three-dots-button')

    fireEvent.click(threeDotsButton)

    const contextMenu = container.getElementsByClassName('menu-tile-context-menu')[0]

    fireEvent.click(contextMenu.children[1])

    const closedContextMenu = container.getElementsByClassName('menu-tile-context-menu')[0]

    expect(closedContextMenu).toBe(undefined);
  });

  test('has MenuTile context menu item handler called on context menu item clicked', () => {
    const { container, getByRole } = render(<MovieTile movie={movie} clickMenuItems={MENU_ITEMS} onClick={onClickMock} />)

    const threeDotsButton = getByRole('three-dots-button')

    fireEvent.click(threeDotsButton)

    const contextMenu = container.getElementsByClassName('menu-tile-context-menu')[0]

    fireEvent.click(contextMenu.children[1])

    expect(firstMenuItemHandlerMock).toBeCalledTimes(1 + 1); // strict-mode adds 1
    expect(firstMenuItemHandlerMock).toBeCalledWith(movie.id);
  });
});
