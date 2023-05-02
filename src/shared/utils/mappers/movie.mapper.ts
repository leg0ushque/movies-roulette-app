import { type IApiMovieModel, type IMovie } from '../../types';

const mapApiMovieToMovie = (fromModel: IApiMovieModel): IMovie => {
  const movie: IMovie = {
    id: fromModel.id.toString(),
    title: fromModel.title,
    description: fromModel.overview,
    duration: fromModel.runtime,
    releaseDate: new Date(fromModel.release_date),
    rating: fromModel.vote_average,
    genreIds: fromModel.genres,
    movieUrl: fromModel.poster_path,
    imageUrl: fromModel.poster_path
  };
  return movie
}

export default mapApiMovieToMovie
