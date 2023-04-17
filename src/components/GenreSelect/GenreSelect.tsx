/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css';

import React from 'react';

import { DEFAULT_SELECTED_GENRE_ID } from '../../shared/constants/genre';

import type IGenre from '../../shared/types/IGenre';

const OTHER_GENRE_BUTTON_TEXT = 'Other'

const allGenre: IGenre = {
  id: DEFAULT_SELECTED_GENRE_ID,
  name: 'All'
};

export interface IGenreSelectProps {
  genres: IGenre[]
  selectedGenreId?: string
  onSelect: (genreId: string) => void
}

const MAX_GENRES_VISIBLE = 6;

const GenreSelect: React.FC<IGenreSelectProps> = (props) => {
  const selectGenre = (genreId: string): void => {
    props.onSelect(genreId);
  };

  const createGenreButton = (genre: IGenre, isSelected: boolean, extraClass?: string): JSX.Element => {
    return (
      <li
          key={genre.id}
          className={`${isSelected ? 'selected ' : ''}${extraClass ? `${extraClass} ` : ''}prevent-select`}
          onClick={() => { selectGenre(genre.id); }}
      >
          {genre.name}
      </li>
    );
  }

  const selectedGenreId = (props.selectedGenreId?.length && props.genres?.length
    ? props.selectedGenreId
    : DEFAULT_SELECTED_GENRE_ID)

  const generateContent = (): JSX.Element => {
    if (props.genres.length <= MAX_GENRES_VISIBLE) {
      const genresButtons = [allGenre, ...props.genres].map((genre: IGenre) =>
        createGenreButton(genre, selectedGenreId === genre.id));

      return (<>{genresButtons}</>);
    } else {
      const visibleGenres = props.genres.slice(0, MAX_GENRES_VISIBLE);
      const dropdownGenres = props.genres.slice(MAX_GENRES_VISIBLE);
      const isDropdownSelected = dropdownGenres.some(x => x.id === props.selectedGenreId)

      const genresButtons = [allGenre, ...visibleGenres].map((genre: IGenre) =>
        createGenreButton(genre, selectedGenreId === genre.id));

      const dropdownGenresButtons = dropdownGenres.map((genre: IGenre) =>
        createGenreButton(genre, selectedGenreId === genre.id, 'in-dropdown'));

      return (
        <>
          {genresButtons}
          <li key='other-genre' className={`other-genres ${isDropdownSelected ? 'selected ' : ''}prevent-select`}>
            {OTHER_GENRE_BUTTON_TEXT}
          </li>
          <div className='genres-dropdown'>
            {dropdownGenresButtons}
          </div>
        </>
      )
    }
  }

  return (
    <ul className="genresList" role="genresList">
      {generateContent()}
    </ul>
  )
}

export default GenreSelect;
