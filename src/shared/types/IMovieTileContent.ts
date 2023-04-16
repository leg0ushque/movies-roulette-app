import type IGenre from './IGenre';
import type IMovie from './IMovie';

interface IMovieTileContent {
  movie?: IMovie
  genres?: IGenre[]
}

export default IMovieTileContent
