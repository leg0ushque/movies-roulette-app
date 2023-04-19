import { useEffect, useMemo, useState } from 'react';

import sortWays from '../components/SortControl/sortWays';
import MovieService from '../services/MovieService';
import { DEFAULT_SELECTED_GENRE_ID } from '../shared/constants/genre';
import testData from '../shared/constants/test-data';
import { type IApiQuery, type IGenre, type IMovie, type IMovieTileContent } from '../shared/types';
import { useCancelToken } from './useCancelToken';

export interface IUseMovieListPageState {
  searchQuery: string
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

  const [movies, setMovies] = useState<IMovie[]>([])
  const [genres, setGenres] = useState<IGenre[]>([])

  const [selectedGenreId, setSelectedGenreId] = useState('0');
  const [selectedMovieId, setSelectedMovieId] = useState<string>();
  const [selectedSortId, setSelectedSortId] = useState(sortWays[0].id);
  const [searchQuery, setSearchQuery] = useState('')

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
    cancelPreviousRequest();

    setGenres(testData.genres);

    movieServiceGetAll();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    cancelPreviousRequest();

    const query: IApiQuery = {
      search: searchQuery,
      searchBy: 'title',
      filter: selectedGenreId !== DEFAULT_SELECTED_GENRE_ID ? selectedGenreId : '',
      sortBy: selectedSortId,
      sortOrder: 'asc'
    }

    movieServiceGetAll(query);
  }, [searchQuery, selectedGenreId, selectedSortId])

  return {
    searchQuery,
    movies,
    genres,
    movieTiles,
    selectedGenreId,
    selectedMovieId,
    selectedSortId,
    setGenres,
    setMovies,
    setSearchQuery,
    setSelectedGenreId,
    setSelectedMovieId,
    setSelectedSortId
  };
}

export default useMovieListPageState
