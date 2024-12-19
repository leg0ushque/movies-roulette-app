import { useEffect, useMemo, useState } from 'react';

import MovieService from '../services/MovieService';
import { DEFAULT_SELECTED_GENRE_ID } from '../shared/constants/genre';
import testData from '../shared/constants/test-data';
import { IApiQuery, IGenre, IMovie, IMovieTileContent } from '../shared/types';
import { useCancelToken } from './useCancelToken';
import useQueryParams from './useQueryParams';

export interface IUseMovieListPageState {
  searchQuery?: string
  movies: IMovie[]
  genres: IGenre[]
  movieTiles: IMovieTileContent[]
  selectedGenreId: string
  selectedSortId: string
  isSortDescending: boolean
  setGenres: (genres: IGenre[]) => void
  setMovies: (movies: IMovie[]) => void
  setSearchQuery: (value: string) => void
  setSelectedGenreId: (id: string) => void
  setSelectedSortId: (id: string) => void
  toggleSortOrder: () => void
}

const useMovieListPageState = (): IUseMovieListPageState => {
  const { newCancelToken, cancelPreviousRequest, isCancel } = useCancelToken();

  const { query, updateParameter } = useQueryParams();

  const setSearchQuery = (value: string): void => {
    updateParameter('search', value)
  }

  const setSelectedSortId = (value: string): void => {
    updateParameter('sortBy', value)
  }

  const setSelectedGenreId = (value: string): void => {
    updateParameter('filter', value)
  }

  const toggleSortOrder = (): void => {
    const newValue = query.sortOrder === 'asc' ? 'desc' : 'asc'

    updateParameter('sortOrder', newValue)
  }

  const [movies, setMovies] = useState<IMovie[]>([])
  const [genres, setGenres] = useState<IGenre[]>([])

  const movieTiles = useMemo(() => {
    return movies.map((movie: IMovie) => {
      const movieGenres = movie.genreIds.map((id: string) => genres.find((x: IGenre) => x.id === id)) as IGenre[]
      const movieTileContent: IMovieTileContent = { movie, genres: movieGenres };
      return movieTileContent;
    })
  }, [movies])

  const movieServiceGetAll = (query?: IApiQuery): void => {
    MovieService.getAll(query, newCancelToken()).then((response) => {
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

  useEffect(() => {
    console.log(query);
    cancelPreviousRequest();
    movieServiceGetAll(query);
  }, [query]);

  return {
    searchQuery: query.search,
    movies,
    genres,
    movieTiles,
    selectedGenreId: query.filter ?? DEFAULT_SELECTED_GENRE_ID,
    selectedSortId: query.sortBy,
    isSortDescending: query.sortOrder === 'desc',
    setGenres,
    setMovies,
    setSearchQuery,
    setSelectedGenreId,
    setSelectedSortId,
    toggleSortOrder
  };
}

export default useMovieListPageState
