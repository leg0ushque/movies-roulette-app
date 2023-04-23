
// const getAldl = async (): Promise<IApiResponse<IApiResponse<IApiMovieModel[]>>> => {
//   return await AxiosBase.get<IApiResponse<IApiResponse<IApiMovieModel[]>>>('/movies').then();
// }

import { type CancelToken } from 'axios';

import { type IApiMovieModel, type IApiQuery, type IApiResponse, type IMovie } from '../shared/types';
import mapApiMovieToMovie from '../shared/utils/mappers/movie.mapper';
import apiRequest from './apiRequest';

// GET ALL

const getAllApiMovies = async (query?: IApiQuery, cancelToken?: CancelToken): Promise<IApiResponse<IApiMovieModel[]>> => {
  return await apiRequest('get', 'movies', query, cancelToken);
}

const getAll = async (query?: IApiQuery, cancelToken?: CancelToken): Promise<IMovie[]> => {
  const moviesResponse = await getAllApiMovies(query, cancelToken)
  const movies = Array.from(moviesResponse.data);

  return (movies ?? []).map(x => mapApiMovieToMovie(x));
}

// GET BY ID

const getApiMovieById = async (id?: string, cancelToken?: CancelToken): Promise<IApiMovieModel> => {
  return await apiRequest('get', `movies/${id}`, cancelToken);
}

const getById = async (id?: string, cancelToken?: CancelToken): Promise<IMovie> => {
  const movieResponse = await getApiMovieById(id, cancelToken)

  console.log('movieResponse')
  console.log(movieResponse)

  const movie = mapApiMovieToMovie(movieResponse)
  return movie;
}

// EXPORTS

const MovieService = {
  getAll,
  getById
}

export default MovieService;
