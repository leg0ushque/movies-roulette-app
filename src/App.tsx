import './App.css';
import './assets/styles/fonts.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MovieFormDialog from './components/MovieFormDialog';
import MovieDetailsHeader from './layouts/MovieDetailsHeader';
import SearchFormHeader from './layouts/SearchFormHeader';
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
        element: <SearchFormHeader />,
        children: [
          {
            path: 'new',
            element: <MovieFormDialog title='Add new movie' />
          }
        ]
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
