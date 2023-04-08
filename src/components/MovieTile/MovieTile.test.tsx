import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import type IGenre from '../../shared/types/IGenre';
import MovieTile from './MovieTile';

describe('MovieTile', () => {
  const onClickMock = jest.fn();
  const onContextMenu = jest.fn();

  const movie = testData.movies[0];
  movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<MovieTile movie={movie}
      onClick={onClickMock}
      onContextMenu={onContextMenu}
    />)

    const imageElement = getByRole('image')
    const titleElement = getByRole('title')
    const genresListElement = getByRole('genresList')
    const releaseYearElement = getByRole('releaseYear')

    expect((imageElement as HTMLImageElement).src).toBe(movie.imageUrl);
    expect(titleElement.textContent).toBe(movie.title);
    expect(genresListElement.textContent).toBe(movie);
    expect(releaseYearElement.textContent).toBe(movie.releaseDate.getFullYear());
  });

  test('has onClick called when clicked', () => {
    const { getByRole } = render(<MovieTile movie={movie}
      onClick={onClickMock}
      onContextMenu={onContextMenu}
    />)

    const movieTile = getByRole('movieTile')

    fireEvent.click(movieTile)

    expect(onClickMock).toBeCalledTimes(1);
    expect(onClickMock).toBeCalledWith(movie.id)
  });

  test('has onContextMenu called when right-clicked', () => {
    const { getByRole } = render(<MovieTile movie={movie}
      onClick={onClickMock}
      onContextMenu={onContextMenu}
    />)

    const movieTile = getByRole('movieTile')

    fireEvent.contextMenu(movieTile)

    expect(onContextMenu).toBeCalledTimes(1);
  });
});
