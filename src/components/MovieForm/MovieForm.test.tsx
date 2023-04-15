import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import formatInputDate from '../../shared/utils/dateFormat';
import MovieForm from './MovieForm';

describe('MovieForm', () => {
  const onSubmitMock = jest.fn();

  const movie = testData.movies[0];

  test('has all items passed in props rendered', () => {
    const { container } = render(
      <MovieForm movie={movie}
        genres={testData.genres}
        onSubmit={onSubmitMock}
      />
    )

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
    const { getByRole } = render(
      <MovieForm movie={movie}
        genres={testData.genres}
        onSubmit={onSubmitMock}
      />
    )

    const submitButton = getByRole('submitButton')

    fireEvent.click(submitButton);

    expect(onSubmitMock).toBeCalledTimes(1)
    expect(onSubmitMock).toBeCalledWith({
      description: movie.description,
      movieUrl: movie.movieUrl,
      genreIds: movie.genreIds,
      rating: movie.rating.toString(),
      releaseDate: formatInputDate(movie.releaseDate ?? new Date()),
      runtime: movie.duration,
      title: movie.title
    })
  });

  test('has dropdown-shown state changed on dropdown button clicked', () => {
    const { getByRole, container } = render(
      <MovieForm movie={movie}
        genres={testData.genres}
        onSubmit={onSubmitMock}
      />
    )

    const dropdownElement = container.getElementsByClassName('genresList')[0]
    expect(dropdownElement).not.toHaveClass('shown')

    const genresDropdownButton = getByRole('dropdown-button')

    fireEvent.click(genresDropdownButton);

    expect(dropdownElement).toHaveClass('shown')
  });
});
