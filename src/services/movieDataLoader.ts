
import { type LoaderFunctionArgs } from 'react-router-dom';

import testData from '../shared/constants/test-data';
import { type IGenre, type IMovieTileContent } from '../shared/types';
import MovieService from './MovieService';

const movieDataLoader = async ({ params }: LoaderFunctionArgs): Promise<IMovieTileContent | undefined> => {
  const movieId: string = params?.movieId ?? '';

  if (!movieId?.length) {
    return undefined
  }

  const movie = await MovieService.getById(movieId);

  const genres = movie.genreIds.map(x => testData.genres.find(genre => genre.id === x)) as IGenre[]

  return { movie, genres }
}

export default movieDataLoader
