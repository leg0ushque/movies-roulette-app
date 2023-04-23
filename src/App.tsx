import './App.css';
import './assets/styles/fonts.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import MovieListPage from './pages/MovieListPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieListPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
