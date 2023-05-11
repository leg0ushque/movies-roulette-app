

import testData from '../shared/constants/test-data';
import { IGenre, IMovieTileContent } from '../shared/types';
import MovieService from './MovieService';

const movieTileContentLoader = async (movieId: string): Promise<IMovieTileContent | undefined> => {
  if (!movieId?.length) {
    return undefined
  }

  const movie = await MovieService.getById(movieId);

  const genres = movie.genreIds.map(x => testData.genres.find(genre => genre.id === x)) as IGenre[]

  return { movie, genres }
}

export default movieTileContentLoader
