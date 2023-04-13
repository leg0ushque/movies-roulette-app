import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import MovieDetails from './MovieDetails';

import type IMovieModel from '../../models/IMovieModel';
import type IGenre from '../../shared/types/IGenre';
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
    expect(genresListElement.textContent).toBe(movie.genresList.map(x => x.name).join(', '));
    expect(releaseYearElement.textContent).toBe(movie.releaseDate?.getFullYear().toString());
    expect(durationElement.textContent).toBe(movie.duration);
    expect(descriptionElement.textContent).toBe(movie.description);
  });

  test('has empty releaseYear rendered if it is not passed in props', () => {
    const movie: IMovieModel = {
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

    const { getByRole } = render(<MovieDetails movie={movie}/>)

    const releaseYearElement = getByRole('releaseYear')

    expect(releaseYearElement.textContent).toBe('');
  });
});
