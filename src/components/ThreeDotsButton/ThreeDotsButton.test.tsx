import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ThreeDotsButton from './ThreeDotsButton';

describe('ThreeDotsButton', () => {
  const onClickMock = jest.fn();

  test('has onClick callback called on being clicked', () => {
    const { getByRole } = render(<ThreeDotsButton onClick={onClickMock}/>)

    const button = getByRole('three-dots-button')

    fireEvent.click(button)

    expect(onClickMock).toBeCalledTimes(1);
  });

  // test('has onClick called when clicked', () => {
  //   const { getByRole } = render(<MovieTile movie={movie}
  //     onClick={onClickMock}
  //     onContextMenu={onContextMenu}
  //   />)

  //   const movieTile = getByRole('movieTile')

  //   fireEvent.click(movieTile)

  //   expect(onClickMock).toBeCalledTimes(1);
  //   expect(onClickMock).toBeCalledWith(movie.id)
  // });

  // test('has onContextMenu called when right-clicked', () => {
  //   const { getByRole } = render(<MovieTile movie={movie}
  //     onClick={onClickMock}
  //     onContextMenu={onContextMenu}
  //   />)

  //   const movieTile = getByRole('movieTile')

  //   fireEvent.contextMenu(movieTile)

  //   expect(onContextMenu).toBeCalledTimes(1);
  // });

  // test('has default values if no data provided', () => {
  //   const emptyMovie: IMovieModel = {
  //     id: '',
  //     imageUrl: '',
  //     title: '',
  //     releaseDate: null,
  //     genreIds: [],
  //     genresList: [],
  //     rating: 0,
  //     movieUrl: '',
  //     duration: '',
  //     description: ''
  //   }

  //   const { getByRole } = render(<MovieTile movie={emptyMovie}
  //     onClick={onClickMock}
  //     onContextMenu={onContextMenu}
  //   />)

  //   const image = getByRole('image')
  //   const title = getByRole('title')
  //   const releaseYear = getByRole('releaseYear')
  //   const genresList = getByRole('genresList')

  //   expect(image).toHaveAttribute('src', IMAGE_NOT_FOUND_SRC);
  //   expect(title.textContent).toBe(COMING_SOON_TEXT);
  //   expect(releaseYear.textContent).toBe(EPMTY_RELEASE_YEAR);
  //   expect(genresList.textContent).toBe('')
  // });

  // test('has empty genres list rendered if the empty genres list passed into props', () => {
  //   const { getByRole } = render(<MovieTile movie={movie}
  //     onClick={onClickMock}
  //     onContextMenu={onContextMenu}
  //   />)

  //   const movieTile = getByRole('genresList')

  //   fireEvent.contextMenu(movieTile)

  //   expect(onContextMenu).toBeCalledTimes(1);
  // });
});
