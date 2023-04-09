import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import type IMovieModel from '../../models/IMovieModel';
import testData from '../../shared/constants/test-data';
import type IGenre from '../../shared/types/IGenre';
import MovieTile from './MovieTile';
import { COMING_SOON_TEXT, EPMTY_RELEASE_YEAR, IMAGE_NOT_FOUND_SRC } from './constants';

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

    expect(imageElement).toHaveAttribute('src', movie.imageUrl);
    expect(titleElement.textContent).toBe(movie.title);
    expect(genresListElement.textContent).toBe(movie.genresList.map(x => x.name).join(', '));
    expect(releaseYearElement.textContent).toBe(movie.releaseDate?.getFullYear().toString());
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

  test('has default values if no data provided', () => {
    const emptyMovie: IMovieModel = {
      id: '',
      imageUrl: '',
      title: '',
      releaseDate: null,
      genreIds: [],
      genresList: [],
      rating: 0,
      movieUrl: '',
      duration: '',
      description: ''
    }

    const { getByRole } = render(<MovieTile movie={emptyMovie}
      onClick={onClickMock}
      onContextMenu={onContextMenu}
    />)

    const image = getByRole('image')
    const title = getByRole('title')
    const releaseYear = getByRole('releaseYear')
    const genresList = getByRole('genresList')

    expect(image).toHaveAttribute('src', IMAGE_NOT_FOUND_SRC);
    expect(title.textContent).toBe(COMING_SOON_TEXT);
    expect(releaseYear.textContent).toBe(EPMTY_RELEASE_YEAR);
    expect(genresList.textContent).toBe('')
  });
});
