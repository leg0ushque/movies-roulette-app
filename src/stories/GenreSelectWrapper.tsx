
import React, { useState } from 'react';

import GenreSelect from '../components/GenreSelect';

import type Genre from '../shared/types/IGenre';

export interface IGenreSelectWrapperProps {
  genres: Genre[]
  selectedGenreId: string
  onSelect: (genreId: string) => void
}

const GenreSelectWrapper: React.FC<IGenreSelectWrapperProps> = (props) => {
  const [selectedGenreId, setSelectedGenreId] = useState(props.selectedGenreId);

  return (
        <GenreSelect
          genres={props.genres}
          selectedGenreId={selectedGenreId}
          onSelect={(value: string) => {
            setSelectedGenreId(value);
            props.onSelect(value);
          }}
        ></GenreSelect>
  );
}

export default GenreSelectWrapper;
