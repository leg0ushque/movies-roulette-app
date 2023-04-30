
// const getAldl = async (): Promise<IApiResponse<IApiResponse<IApiMovieModel[]>>> => {
//   return await AxiosBase.get<IApiResponse<IApiResponse<IApiMovieModel[]>>>('/movies').then();
// }

import { type CancelToken } from 'axios';

import { type IApiMovieModel, type IApiQuery, type IApiResponse, type IMovie } from '../shared/types';
import mapMovieToApiMovie from '../shared/utils/mappers/apiMovie.mapper';
import mapApiMovieToMovie from '../shared/utils/mappers/movie.mapper';
import apiRequest from './apiRequest';

import type IApiMovieModelBody from '../shared/types/IApiMovieModelBody';
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

  const movie = mapApiMovieToMovie(movieResponse)
  return movie;
}

// CREATE

const createMovie = async (movie: IApiMovieModelBody, cancelToken?: CancelToken): Promise<IApiMovieModel> => {
  const body = { ...movie, release_date: movie.release_date.toISOString() };

  return await apiRequest('post', 'movies', {}, body, cancelToken);
}

const create = async (movie: IMovie, cancelToken?: CancelToken): Promise<number> => {
  const requestBody = mapMovieToApiMovie(movie, false);
  const response = await createMovie(requestBody, cancelToken);

  return response.id;
}

// EXPORTS

const MovieService = {
  create,
  getAll,
  getById
}

export default MovieService;
