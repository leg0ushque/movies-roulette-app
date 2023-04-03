import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MovieTile from './MovieTile';

describe('MovieTile', () => {
  const onClickMock = jest.fn();
  const onContextMenu = jest.fn();

  const genres = ['Action, Comedy'];
  const genresRendered = genres.join(', ');

  const movieDetails = {
    id: '654',
    title: 'test movie title',
    releaseYear: '9876',
    imageUrl: 'https://test-image-url.com/item.png',
    genresList: genres
  };

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<MovieTile
      id={movieDetails.id}
      title={movieDetails.title}
      releaseYear={movieDetails.releaseYear}
      imageUrl={movieDetails.imageUrl}
      genresList={movieDetails.genresList}
      onClick={onClickMock}
      onContextMenu={onContextMenu}
    />)

    const imageElement = getByRole('image')
    const titleElement = getByRole('title')
    const genresListElement = getByRole('genresList')
    const releaseYearElement = getByRole('releaseYear')

    expect((imageElement as HTMLImageElement).src).toBe(movieDetails.imageUrl);
    expect(titleElement.textContent).toBe(movieDetails.title);
    expect(genresListElement.textContent).toBe(genresRendered);
    expect(releaseYearElement.textContent).toBe(movieDetails.releaseYear);
  });

  test('has onClick called when clicked', () => {
    const { getByRole } = render(<MovieTile
      id={movieDetails.id}
      title={movieDetails.title}
      releaseYear={movieDetails.releaseYear}
      imageUrl={movieDetails.imageUrl}
      genresList={movieDetails.genresList}
      onClick={onClickMock}
      onContextMenu={onContextMenu}
    />)

    const movieTile = getByRole('movieTile')

    fireEvent.click(movieTile)

    expect(onClickMock).toBeCalledTimes(1);
    expect(onClickMock).toBeCalledWith(movieDetails.id)
  });

  test('has onContextMenu called when right-clicked', () => {
    const { getByRole } = render(<MovieTile
      id={movieDetails.id}
      title={movieDetails.title}
      releaseYear={movieDetails.releaseYear}
      imageUrl={movieDetails.imageUrl}
      genresList={movieDetails.genresList}
      onClick={onClickMock}
      onContextMenu={onContextMenu}
    />)

    const movieTile = getByRole('movieTile')

    fireEvent.contextMenu(movieTile)

    expect(onContextMenu).toBeCalledTimes(1);
  });
});
