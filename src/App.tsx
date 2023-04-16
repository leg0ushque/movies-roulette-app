import './App.css';
import './assets/styles/fonts.css';

import React from 'react';

import MovieListPage from './pages/MovieListPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <MovieListPage />
    </div>
  );
}

export default App;
