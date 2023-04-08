import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import type IGenre from '../../shared/types/IGenre';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  const movie = testData.movies[0];
  movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<MovieDetails movie={movie}/>)

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
    expect(genresListElement.textContent).toBe(movie.genresList);
    expect(releaseYearElement.textContent).toBe(movie.releaseDate.getFullYear());
    expect(durationElement.textContent).toBe(movie.duration);
    expect(descriptionElement.textContent).toBe(movie.description);
  });
});
