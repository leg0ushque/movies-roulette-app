import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import sortWays, { SORT_BY_RELEASE_DATE, SORT_BY_TITLE } from '../components/SortControl/sortWays';

export interface IQueryParams {
  sortBy: string
  sortOrder: 'asc' | 'desc'
  search: string
  searchBy: 'title' | 'genres'
  filter?: string
  offset: string
  limit: string
}

const useQueryParams = (): { 
  query: IQueryParams, 
  updateParameter: (key?: string, newValue?: string) => void, 
  redirectWithCurrentQuery: (path: string, key?: string, newValue?: string)  => void
} => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getQueryParams = (currentQuery: ReadonlyURLSearchParams | null) : URLSearchParams => {
    return new URLSearchParams([
      ["sortBy", sortWays[currentQuery?.get('sortBy') === sortWays[SORT_BY_TITLE].id ? SORT_BY_TITLE : SORT_BY_RELEASE_DATE].id,], 
      ['sortOrder', currentQuery?.get('sortOrder') === 'asc' ? 'asc' : 'desc',],
      ['search', currentQuery?.get('search') ?? ''],
      ['search', currentQuery?.get('searchBy') === 'genres' ? 'genres' : 'title'],
      ['filter', currentQuery?.get('filter') ?? ''],
      ['offset', currentQuery?.get('offset') ?? ''],
      ['limit', currentQuery?.get('limit') ?? ''],
    ]);
  }

  const updateQueryParams = (key?: string, newValue?: string) : string => {
    const queryParams = getQueryParams(searchParams);
    
    if (key && !newValue) {
      queryParams.delete(key);
    } else if (key && newValue){
      queryParams.set(key, newValue);
    }
    
    return queryParams.toString();
  }

  const updateParameter = (key?: string, newValue?: string) : void => {
    const queryString = updateQueryParams(key, newValue);
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  }
  
  const redirectWithCurrentQuery = (path: string, key?: string, newValue?: string) => {
    const queryString = updateQueryParams(key, newValue);
    
    console.log('${pathname}${queryString ? `?${queryString}` : ""}')
    console.log(`${pathname}${queryString ? `?${queryString}` : ""}`)

    router.push(`${path}${queryString ? `?${queryString}` : ""}`);
  }
  
  const query: IQueryParams = useMemo(() => {
    return {
      sortBy: sortWays[searchParams?.get('sortBy') === sortWays[SORT_BY_TITLE].id ? SORT_BY_TITLE : SORT_BY_RELEASE_DATE].id,
      sortOrder: searchParams?.get('sortOrder') === 'asc' ? 'asc' : 'desc',
      search: searchParams?.get('search') ?? '',
      searchBy: searchParams?.get('searchBy') === 'genres' ? 'genres' : 'title',
      filter: searchParams?.get('filter') ?? '',
      offset: searchParams?.get('offset') ?? '',
      limit: searchParams?.get('limit') ?? ''
    }
  }, [searchParams]);

  return {
    query,
    updateParameter,
    redirectWithCurrentQuery
  };
}

export default useQueryParams
