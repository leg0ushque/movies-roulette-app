
// Write unit tests for MovieDetailsHeader component using Jest and React Testing Library (RTL) and check the coverage

import React from 'react';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router-dom';

// Path: src\components\MovieDetailsHeader\MovieDetailsHe
import { render, screen } from '@testing-library/react';

import testData from '../../shared/constants/test-data';
import { type IGenre, type IMovieTileContent } from '../../shared/types';
import MovieDetailsHeader from './MovieDetailsHeader';

describe('MovieDetailsHeader component', () => {
  const movie = testData.movies[0];
  const genres = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

  const loaderData: IMovieTileContent = { movie, genres };

  test('should render fetched movie data', async () => {
    const routes = [{
      path: '',
      element: <MovieDetailsHeader />,
      loader: () => loaderData
    }];

    const router = createMemoryRouter(routes, { initialEntries: ['/'] });

    const { getByRole } = render(<RouterProvider router={router} />);

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
    expect(genresListElement.textContent).toBe(genres.map(x => x.name).join(', '));
    expect(releaseYearElement.textContent).toBe(movie.releaseDate?.getFullYear().toString());
    expect(durationElement.textContent).toBe(movie.duration);
    expect(descriptionElement.textContent).toBe(movie.description);
  })

  test('should render MovieDetailsHeader component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MovieDetailsHeader />
      </MemoryRouter>
    );

    expect(screen.getByTestId('movie-details-header')).toBeInTheDocument();
  });

  test('should render AppName component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MovieDetailsHeader />
      </MemoryRouter>
    );

    expect(screen.getByTestId('app-name')).toBeInTheDocument();
  });

  test('should render MovieDetails component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MovieDetailsHeader />
      </MemoryRouter>
    );

    expect(screen.getByTestId('movie-details')).toBeInTheDocument();
  });
});
