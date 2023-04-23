import {
  createSearchParams,
  useNavigate, useSearchParams,
  type ParamKeyValuePair
} from 'react-router-dom';

interface INavigateRedirectionsReturn {
  redirectTo: (path: string, params?: ParamKeyValuePair[]) => void
  redirectWithCurrentQuery: (path: string, params?: ParamKeyValuePair[]) => any
}

const useNavigateRedirections = (): INavigateRedirectionsReturn => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectTo = (path: string, params?: ParamKeyValuePair[]): void => {
    navigate({
      pathname: path,
      search: params?.length ? `?${createSearchParams(params)}` : ''
    });
  }

  const redirectWithCurrentQuery = (path: string, params?: ParamKeyValuePair[]): void => {
    const queryParams: ParamKeyValuePair[] = Array.from(searchParams.entries())
      .map(x => {
        const keyValuePair: ParamKeyValuePair = [x[0], x[1]]
        return keyValuePair;
      })

    redirectTo(path, params?.length ? queryParams.concat(params) : queryParams)
  };

  const retValue: INavigateRedirectionsReturn = {
    redirectTo,
    redirectWithCurrentQuery
  }

  return retValue;
}

export default useNavigateRedirections
