import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import type IGenre from '../../shared/types/IGenre';
import formatInputDate from '../../shared/utils/dateFormat';
import MovieForm from './MovieForm';

describe('MovieTile', () => {
  const onSubmitMock = jest.fn();
  const recheckGenreMock = jest.fn();

  const movie = testData.movies[0];
  movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

  test('has all items passed in props rendered', () => {
    const { container } = render(<MovieForm movie={movie}
      genres={testData.genres}
      onSubmit={onSubmitMock}
      recheckGenre={recheckGenreMock}
    />)

    const titleInput = container.querySelector('input[type=text][name=title]')
    const releaseDateInput = container.querySelector('input[type=date][name=releaseDate]')
    const movieUrlInput = container.querySelector('input[type=text][name=movieUrl]')
    const ratingInput = container.querySelector('input[type=number][name=rating]')
    const runtimeInput = container.querySelector('input[type=text][name=runtime]')
    const overviewInput = container.querySelector('textarea[name=description]')

    expect(titleInput).toHaveValue(movie.title)
    expect(releaseDateInput).toHaveValue(formatInputDate(movie.releaseDate ?? new Date()))
    expect(movieUrlInput).toHaveValue(movie.movieUrl)
    expect(ratingInput).toHaveValue(movie.rating)
    expect(runtimeInput).toHaveValue(movie.duration)
    expect(overviewInput).toHaveValue(movie.description)
  });

  test('has onSubmit callback called when submit button pressed', () => {
    const { getByRole } = render(<MovieForm movie={movie}
      genres={testData.genres}
      onSubmit={onSubmitMock}
      recheckGenre={recheckGenreMock}
    />)

    const submitButton = getByRole('submitButton')

    fireEvent.click(submitButton);

    expect(onSubmitMock).toBeCalledTimes(1)
    expect(onSubmitMock).toBeCalledWith({
      description: movie.description,
      movieUrl: movie.movieUrl,
      rating: movie.rating.toString(),
      releaseDate: formatInputDate(movie.releaseDate ?? new Date()),
      runtime: movie.duration,
      title: movie.title
    })
  });

  test('has recheckGenre callback called when dropdown-item clicked', () => {
    const testGenre = testData.genres.find(x => x.id === movie.genreIds[0])
    const itemKey = testGenre !== undefined ? `#d-item-${testGenre.name}` : '';

    const { container } = render(<MovieForm movie={movie}
      genres={testData.genres}
      onSubmit={onSubmitMock}
      recheckGenre={recheckGenreMock}
    />)

    const dropdownButton = container.querySelector('#dropdown-basic-button')
    const dropdownItem = container.querySelector(itemKey)

    if (dropdownButton !== null && dropdownItem !== null) {
      fireEvent.click(dropdownButton);
      fireEvent.click(dropdownItem);
    }

    // expect(recheckGenreMock).toBeCalledTimes(1)
    // expect(recheckGenreMock).toBeCalledWith(testGenre?.id)
  });
});
