import { useEffect, useMemo, useState } from 'react';

import MovieService from '../services/MovieService';
import { DEFAULT_SELECTED_GENRE_ID } from '../shared/constants/genre';
import testData from '../shared/constants/test-data';
import { type IApiQuery, type IGenre, type IMovie, type IMovieTileContent } from '../shared/types';
import { useCancelToken } from './useCancelToken';
import useQueryParams from './useQueryParams';

export interface IUseMovieListPageState {
  searchQuery?: string
  movies: IMovie[]
  genres: IGenre[]
  movieTiles: IMovieTileContent[]
  selectedGenreId: string
  selectedMovieId?: string
  selectedSortId: string
  setGenres: (genres: IGenre[]) => void
  setMovies: (movies: IMovie[]) => void
  setSearchQuery: (value: string) => void
  setSelectedGenreId: (id: string) => void
  setSelectedMovieId: (id?: string) => void
  setSelectedSortId: (id: string) => void
}

const useMovieListPageState = (): IUseMovieListPageState => {
  const { newCancelToken, cancelPreviousRequest, isCancel } = useCancelToken();

  const queryParams = useQueryParams();

  const setSearchQuery = (value: string): void => {
    updateMovieTiles({ ...queryParams, search: value });
    queryParams.updateQueryParameter('search', value)
  }

  const setSelectedSortId = (value: string): void => {
    updateMovieTiles({ ...queryParams, sortBy: value });
    queryParams.updateQueryParameter('sortBy', value)
  }

  const setSelectedGenreId = (value: string): void => {
    updateMovieTiles({ ...queryParams, filter: value });
    queryParams.updateQueryParameter('filter', value)
  }

  const [movies, setMovies] = useState<IMovie[]>([])
  const [genres, setGenres] = useState<IGenre[]>([])

  const [selectedMovieId, setSelectedMovieId] = useState<string>();

  const movieTiles = useMemo(() => {
    return movies.map((movie: IMovie) => {
      const movieGenres = movie.genreIds.map((id: string) => genres.find((x: IGenre) => x.id === id)) as IGenre[]
      const movieTileContent: IMovieTileContent = { movie, genres: movieGenres };
      return movieTileContent;
    })
  }, [movies])

  const movieServiceGetAll = (query?: IApiQuery): void => {
    MovieService.getAll(query, newCancelToken()).then((response) => {
      console.log('get all called with query')
      console.log(query)

      setMovies(response);
    }).catch((error) => {
      if (isCancel(error)) return;

      console.log(error)
      return {
        status: error.status,
        data: error.response
      }
    });
  }

  useEffect(() => {
    setGenres(testData.genres);
  }, []);

  const updateMovieTiles = (query: IApiQuery): void => {
    cancelPreviousRequest();
    movieServiceGetAll(query);
  }

  return {
    searchQuery: queryParams.search,
    movies,
    genres,
    movieTiles,
    selectedGenreId: queryParams.filter ?? DEFAULT_SELECTED_GENRE_ID,
    selectedMovieId,
    selectedSortId: queryParams.sortBy,
    setGenres,
    setMovies,
    setSearchQuery,
    setSelectedGenreId,
    setSelectedMovieId,
    setSelectedSortId
  };
}

export default useMovieListPageState
