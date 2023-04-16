
import AxiosBase from './AxiosBase';

import type IApiMovieModel from '../shared/types/IApiMovieModel';
import type IApiResponse from '../shared/types/IApiResponse';

const getAll = async (): Promise<IApiResponse<IApiResponse<IApiMovieModel[]>>> => {
  return await AxiosBase.get<IApiResponse<IApiResponse<IApiMovieModel[]>>>('/movies').then();
}

const MovieService = {
  getAll
}

export default MovieService;
