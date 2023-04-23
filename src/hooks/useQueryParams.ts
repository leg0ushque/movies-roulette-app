
import { useSearchParams } from 'react-router-dom';

import sortWays, { SORT_BY_RELEASE_DATE, SORT_BY_TITLE } from '../components/SortControl/sortWays';

export interface IQueryParams {
  sortBy: string
  sortOrder: 'asc' | 'desc'
  search: string
  searchBy: 'title' | 'genres'
  filter?: string
  offset: string
  limit: string
  updateQueryParameter: (key: string, value: string) => void
}

const useQueryParams = (): IQueryParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParameter = (key: string, value: string): void => {
    setSearchParams(searchParams => {
      searchParams.set(key, value);
      return searchParams;
    })
  }

  const initialQuery: IQueryParams = {
    sortBy: sortWays[searchParams.get('sortBy') === sortWays[SORT_BY_TITLE].id ? SORT_BY_TITLE : SORT_BY_RELEASE_DATE].id,
    sortOrder: searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc',
    search: searchParams.get('search') ?? '',
    searchBy: searchParams.get('searchBy') === 'genres' ? 'genres' : 'title',
    filter: searchParams.get('filter') ?? '',
    offset: searchParams.get('offset') ?? '',
    limit: searchParams.get('limit') ?? '',
    updateQueryParameter
  }

  return initialQuery;
}

export default useQueryParams
