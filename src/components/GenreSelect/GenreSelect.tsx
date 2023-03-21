import React from 'react';
import type Genre from '../../shared/types/IGenre';
import './styles.css';

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
    const genresButtons = this.props.genres.map((genre: Genre) =>
      this.createGenreButton(genre,
        this.props.selectedGenreId === genre.id));

    return <ul className="genresList">{genresButtons}</ul>;
  }
}

export default GenreSelect;
