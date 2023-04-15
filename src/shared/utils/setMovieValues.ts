import { IMAGE_NOT_FOUND_SRC } from '../constants/movie';
import { type IMovie } from '../types';

const setValue = (value: string | undefined, defaultValue: string): string => {
  return value?.length ? value : defaultValue
}

const setMovieValues = (movie: IMovie | undefined): IMovie => {
  return {
    id: setValue(movie?.id, ''),
    title: setValue(movie?.title, ''),
    description: setValue(movie?.description, ''),
    duration: setValue(movie?.duration, '0 min'),
    releaseDate: movie?.releaseDate ? movie?.releaseDate : new Date(),
    rating: movie?.rating ? movie.rating : 0.0,
    genreIds: movie?.genreIds ? movie.genreIds : [],
    movieUrl: setValue(movie?.movieUrl, ''),
    imageUrl: setValue(movie?.imageUrl, IMAGE_NOT_FOUND_SRC)
  }
};

export default setMovieValues
