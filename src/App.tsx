import './App.css';
import './assets/styles/fonts.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MovieDetailsHeader from './components/MovieDetailsHeader';
import SearchFormHeader from './components/SearchFormHeader';
import ErrorPage from './pages/ErrorPage';
import MovieListPage from './pages/MovieListPage';
import movieDataLoader from './services/movieDataLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      {
        path: '',
        element: <SearchFormHeader />
      },
      {
        path: ':movieId',
        element: <MovieDetailsHeader />,
        loader: movieDataLoader
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;
