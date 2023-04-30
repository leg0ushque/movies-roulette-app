import './App.css';
import './assets/styles/fonts.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ConfirmDialogWrapper from './components/ConfirmDialog/ConfirmDialogWrapper';
import MovieFormDialog from './components/MovieFormDialog';
import MovieDetailsHeader from './layouts/MovieDetailsHeader';
import SearchFormHeader from './layouts/SearchFormHeader';
import ErrorPage from './pages/ErrorPage';
import MovieListPage from './pages/MovieListPage';
import movieTileContentLoader from './services/movieDataLoader';
import { ADD_MOVIE_TITLE, EDIT_MOVIE_TITLE } from './shared/constants/application';

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
            element: <MovieFormDialog title={ADD_MOVIE_TITLE} />
          }
        ]
      },
      {
        path: ':movieId',
        element: <MovieDetailsHeader />,
        loader: movieTileContentLoader,
        children: [
          {
            path: 'edit',
            element: <MovieFormDialog title={EDIT_MOVIE_TITLE} />,
            loader: movieTileContentLoader
          },
          {
            path: 'confirm-delete',
            element: <ConfirmDialogWrapper/>,
            loader: movieTileContentLoader
          },
          {
            path: 'delete',
            element: <></>,
            loader: movieTileContentLoader
          }
        ]
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
