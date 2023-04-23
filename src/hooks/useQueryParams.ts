
import sortWays, { SORT_BY_RELEASE_DATE, SORT_BY_TITLE } from '../components/SortControl/sortWays';
import useUpdatableSearchParams from './useUpdatableSearchParams';

export interface IQueryParams {
  sortBy: string
  sortOrder: 'asc' | 'desc'
  search: string
  searchBy: 'title' | 'genres'
  filter?: string
  offset: string
  limit: string
  updateParameter: (key: string, value: string) => void
}

const useQueryParams = (): IQueryParams => {
  const { searchParams, updateParameter } = useUpdatableSearchParams();

  const initialQuery: IQueryParams = {
    sortBy: sortWays[searchParams.get('sortBy') === sortWays[SORT_BY_TITLE].id ? SORT_BY_TITLE : SORT_BY_RELEASE_DATE].id,
    sortOrder: searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc',
    search: searchParams.get('search') ?? '',
    searchBy: searchParams.get('searchBy') === 'genres' ? 'genres' : 'title',
    filter: searchParams.get('filter') ?? '',
    offset: searchParams.get('offset') ?? '',
    limit: searchParams.get('limit') ?? '',
    updateParameter
  }

  return initialQuery;
}

export default useQueryParams
