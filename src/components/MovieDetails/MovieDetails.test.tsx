import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { IMAGE_NOT_FOUND_SRC } from '../../shared/constants/movie';
import testData from '../../shared/constants/test-data';
import { type IMovie } from '../../shared/types';
import setMovieValues from '../../shared/utils/setMovieValues';
import MovieDetails from './MovieDetails';

import type IGenre from '../../shared/types/IGenre';
describe('MovieDetails', () => {
  const movie = testData.movies[0];
  const movieGenres = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<MovieDetails movie={movie} movieGenres={movieGenres}/>)

    const imageElement = getByRole('image')
    const titleElement = getByRole('title')
    const ratingElement = getByRole('rating')
    const genresListElement = getByRole('genresList')
    const releaseYearElement = getByRole('releaseYear')
    const durationElement = getByRole('duration')
    const descriptionElement = getByRole('description')

    expect((imageElement as HTMLImageElement).src).toBe(movie.imageUrl);
    expect(titleElement.textContent).toBe(movie.title);
    expect(ratingElement.textContent).toBe(movie.rating.toString());
    expect(genresListElement.textContent).toBe(movieGenres.map(x => x.name).join(', '));
    expect(releaseYearElement.textContent).toBe(movie.releaseDate?.getFullYear().toString());
    expect(durationElement.textContent).toBe(movie.duration);
    expect(descriptionElement.textContent).toBe(movie.description);
  });

  test('has empty releaseYear rendered if it is not passed in props', () => {
    const movie: IMovie = setMovieValues(undefined);

    const { getByRole } = render(<MovieDetails movieGenres={[]}/>)

    const releaseYearElement = getByRole('releaseYear')

    expect(releaseYearElement.textContent).toBe(movie.releaseDate?.getFullYear().toString());
  });

  test('has alternative image source rendered if the main source caused error', () => {
    const { getByRole } = render(<MovieDetails movie={movie} movieGenres={movieGenres}/>)

    const imageElement = getByRole('image')

    fireEvent.error(imageElement);

    expect((imageElement as HTMLImageElement).src).toBe(IMAGE_NOT_FOUND_SRC);
  });
});
