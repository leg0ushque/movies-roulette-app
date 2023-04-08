import type IGenre from '../shared/types/IGenre';
import type IMovie from '../shared/types/IMovie';

interface IMovieModel extends IMovie {
  genresList: IGenre[]
};

export default IMovieModel
