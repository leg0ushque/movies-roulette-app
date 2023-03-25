import './styles.css';

import React from 'react';

import type Genre from '../../shared/types/IGenre';

const DEFAULT_SELECTED_GENRE_ID: string = '';

export interface IGenreSelectProps {
  genres: Genre[]
  selectedGenreId: string
  onSelect: (genreId: string) => void
}

class GenreSelect extends React.Component<IGenreSelectProps> {
  select (genreId: string): void {
    if (genreId.length > 0) {
      this.props.onSelect(genreId);
    }
  };

  createGenreButton (genre: Genre, isSelected: boolean): JSX.Element {
    return (
            <li
                key={genre.id}
                className={isSelected ? 'selected' : ''}
                onClick={() => { this.select(genre.id); }}
            >
                {genre.name}
            </li>
    );
  }

  render (): JSX.Element {
    const allGenre: Genre = {
      id: DEFAULT_SELECTED_GENRE_ID,
      name: 'All'
    };

    const genresButtons = [allGenre, ...this.props.genres].map((genre: Genre) =>
      this.createGenreButton(genre,
        this.props.selectedGenreId === genre.id));

    return <ul className="genresList" role="genresList">{genresButtons}</ul>;
  }
}

export default GenreSelect;
