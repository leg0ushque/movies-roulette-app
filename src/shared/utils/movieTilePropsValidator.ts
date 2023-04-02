import { type IMovieTileProps } from '../../components/MovieTile';

import type IMovie from '../types/IMovie';

const COMING_SOON_TEXT = 'Coming soon'
const IMAGE_NOT_FOUND_SRC = '/images/image-not-found.png'
const EPMTY_RELEASE_YEAR = '----'

const stringCheckIfEmpty = (value: string | null): string | null => {
  return value != null && value?.length > 0 ? value : null
}

const movieTilePropsValidator = (props: IMovieTileProps): IMovie => {
  const movie = {
    id: props.id,
    title: stringCheckIfEmpty(props.title) ?? COMING_SOON_TEXT,
    imageUrl: stringCheckIfEmpty(props.imageUrl) ?? IMAGE_NOT_FOUND_SRC,
    releaseYear: stringCheckIfEmpty(props.releaseYear) ?? EPMTY_RELEASE_YEAR,
    genresList: props.genresList?.length > 0 ? props.genresList.join(', ') : new Array<string>(),
    onClick: props.onClick
  };

  return movie as IMovie;
};

export default movieTilePropsValidator;
