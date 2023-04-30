import { type IApiMovieModel, type IMovie } from '../../types';

import type IApiMovieModelBody from '../../types/IApiMovieModelBody';

const mapMovieToApiMovie = (source: IMovie, idRequired: boolean): IApiMovieModel | IApiMovieModelBody => {
  const body: IApiMovieModelBody = {
    title: source.title,
    overview: source.description,
    runtime: parseInt(source.duration),
    release_date: source.releaseDate ?? new Date(),
    vote_average: source.rating,
    genres: source.genreIds,
    poster_path: source.movieUrl,
    tagline: 'none', // should not be empty
    vote_count: 6782,
    budget: 1,
    revenue: 1
  };

  const model: IApiMovieModel = { ...body, id: parseInt(source.id) };

  return idRequired ? model : body;
}

export default mapMovieToApiMovie
