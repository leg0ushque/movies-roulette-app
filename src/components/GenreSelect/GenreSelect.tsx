import './styles.css';

import React from 'react';

import type IGenre from '../../shared/types/IGenre';

const DEFAULT_SELECTED_GENRE_ID: string = '0';

const allGenre: IGenre = {
  id: DEFAULT_SELECTED_GENRE_ID,
  name: 'All'
};

export interface IGenreSelectProps {
  genres: IGenre[]
  selectedGenreId?: string
  onSelect: (genreId: string) => void
}

const GenreSelect: React.FC<IGenreSelectProps> = (props) => {
  const selectGenre = (genreId: string): void => {
    props.onSelect(genreId);
  };

  const createGenreButton = (genre: IGenre, isSelected: boolean): JSX.Element => {
    return (
      <li
          key={genre.id}
          className={`${isSelected ? 'selected ' : ''}prevent-select`}
          onClick={() => { selectGenre(genre.id); }}
      >
          {genre.name}
      </li>
    );
  }

  const genresButtons = [allGenre, ...props.genres].map((genre: IGenre) =>
    createGenreButton(genre,
      (props.selectedGenreId?.length && props.genres?.length
        ? props.selectedGenreId
        : DEFAULT_SELECTED_GENRE_ID) === genre.id));

  return <ul className="genresList" role="genresList">{genresButtons}</ul>;
}

export default GenreSelect;
