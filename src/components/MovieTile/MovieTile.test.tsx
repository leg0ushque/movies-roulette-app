import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import { COMING_SOON_TEXT, EPMTY_RELEASE_YEAR, IMAGE_NOT_FOUND_SRC } from './constants';
import MovieTile from './MovieTile';

import type IMovieModel from '../../models/IMovieModel';
import type IGenre from '../../shared/types/IGenre';

describe('MovieTile', () => {
  const onClickMock = jest.fn();

  const movie = testData.movies[0];
  movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<MovieTile movie={movie} onClick={onClickMock} />)

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
    const { getByRole } = render(<MovieTile movie={movie} onClick={onClickMock} />)

    const movieTile = getByRole('movieTile')

    fireEvent.click(movieTile)

    expect(onClickMock).toBeCalledTimes(1);
    expect(onClickMock).toBeCalledWith(movie.id)
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

    const { getByRole } = render(<MovieTile movie={emptyMovie} onClick={onClickMock} />)

    const image = getByRole('image')
    const title = getByRole('title')
    const releaseYear = getByRole('releaseYear')
    const genresList = getByRole('genresList')

    expect(image).toHaveAttribute('src', IMAGE_NOT_FOUND_SRC);
    expect(title.textContent).toBe(COMING_SOON_TEXT);
    expect(releaseYear.textContent).toBe(EPMTY_RELEASE_YEAR);
    expect(genresList.textContent).toBe('')
  });

  test('has MenuTile context menu shown on three-dots-button clicked', () => {
    const { container, getByRole } = render(<MovieTile movie={movie} onClick={onClickMock} />)

    const threeDotsButton = getByRole('three-dots-button')

    fireEvent.click(threeDotsButton)

    const contextMenu = container.getElementsByClassName('menu-tile-context-menu')[0]

    expect(contextMenu).toBeInTheDocument();
  });

  test('has MenuTile context menu hidden after context menu item clicked', () => {
    const { container, getByRole } = render(<MovieTile movie={movie} onClick={onClickMock} />)

    const threeDotsButton = getByRole('three-dots-button')

    fireEvent.click(threeDotsButton)

    const contextMenu = container.getElementsByClassName('menu-tile-context-menu')[0]

    console.log(contextMenu);
    fireEvent.click(contextMenu.children[1])

    const closedContextMenu = container.getElementsByClassName('menu-tile-context-menu')[0]

    expect(closedContextMenu).toBe(undefined);
  });
});
