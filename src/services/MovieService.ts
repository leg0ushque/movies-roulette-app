
// const getAldl = async (): Promise<IApiResponse<IApiResponse<IApiMovieModel[]>>> => {
//   return await AxiosBase.get<IApiResponse<IApiResponse<IApiMovieModel[]>>>('/movies').then();
// }

import { type CancelToken } from 'axios';

import { type IApiMovieModel, type IApiQuery, type IApiResponse, type IMovie } from '../shared/types';
import apiRequest from './apiRequest';

const mapToModel = (fromModel: IApiMovieModel): IMovie => {
  const movie: IMovie = {
    id: fromModel.id.toString(),
    title: fromModel.title,
    description: fromModel.overview,
    duration: `${fromModel.runtime} min`,
    releaseDate: new Date(fromModel.release_date),
    rating: fromModel.vote_average,
    genreIds: fromModel.genres,
    movieUrl: fromModel.poster_path,
    imageUrl: fromModel.poster_path
  };
  return movie
}

const getAllApiMovies = async (query?: IApiQuery, cancelToken?: CancelToken): Promise<IApiResponse<IApiMovieModel[]>> => {
  return await apiRequest('get', 'movies', query, cancelToken);
}

const getAll = async (query?: IApiQuery, cancelToken?: CancelToken): Promise<IMovie[]> => {
  const moviesResponse = await getAllApiMovies(query, cancelToken)
  const movies = Array.from(moviesResponse.data);

  return (movies ?? []).map(x => mapToModel(x));
}

const MovieService = {
  getAll
}

export default MovieService;
