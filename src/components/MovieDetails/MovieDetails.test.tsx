import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render } from '@testing-library/react';

import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  const genres = ['Action, Comedy'];
  const genresRendered = genres.join(', ');

  const movieDetails = {
    id: '654',
    title: 'test movie title',
    description: 'test movie description',
    releaseYear: '9876',
    rating: 5.2,
    duration: '1h 23m',
    imageUrl: 'https://test-image-url.com/item.png',
    genresList: genres
  };

  test('has all items passed in props rendered', () => {
    const { getByRole } = render(<MovieDetails
      id={movieDetails.id}
      title={movieDetails.title}
      description={movieDetails.description}
      releaseYear={movieDetails.releaseYear}
      rating={movieDetails.rating}
      duration={movieDetails.duration}
      imageUrl={movieDetails.imageUrl}
      genresList={movieDetails.genresList}
      />)

    const imageElement = getByRole('image')
    const titleElement = getByRole('title')
    const ratingElement = getByRole('rating')
    const genresListElement = getByRole('genresList')
    const releaseYearElement = getByRole('releaseYear')
    const durationElement = getByRole('duration')
    const descriptionElement = getByRole('description')

    expect((imageElement as HTMLImageElement).src).toBe(movieDetails.imageUrl);
    expect(titleElement.textContent).toBe(movieDetails.title);
    expect(ratingElement.textContent).toBe(movieDetails.rating.toString());
    expect(genresListElement.textContent).toBe(genresRendered);
    expect(releaseYearElement.textContent).toBe(movieDetails.releaseYear);
    expect(durationElement.textContent).toBe(movieDetails.duration);
    expect(descriptionElement.textContent).toBe(movieDetails.description);
  });
});
