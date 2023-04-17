import { IMAGE_NOT_FOUND_SRC } from '../constants/movie';
import { type IMovie } from '../types';

const setValue = (defaultValue: string, value?: string): string => {
  return value?.length ? value : defaultValue
}

const setMovieValues = (movie?: IMovie): IMovie => {
  return {
    id: setValue('', movie?.id),
    title: setValue('', movie?.title),
    description: setValue('', movie?.description),
    duration: setValue('0 min', movie?.duration),
    releaseDate: movie?.releaseDate ? movie?.releaseDate : new Date(),
    rating: movie?.rating ? movie.rating : 0.0,
    genreIds: movie?.genreIds ? movie.genreIds : [],
    movieUrl: setValue('', movie?.movieUrl),
    imageUrl: setValue(IMAGE_NOT_FOUND_SRC, movie?.imageUrl)
  }
};

export default setMovieValues
