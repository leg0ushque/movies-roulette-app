import {
  createSearchParams, ParamKeyValuePair,
  useNavigate, useSearchParams
} from 'react-router-dom';

interface INavigateRedirectionsReturn {
  redirectTo: (path: string, params?: ParamKeyValuePair[]) => void
  redirectWithCurrentQuery: (path: string, params?: ParamKeyValuePair[]) => void
}

const useNavigateRedirections = (): INavigateRedirectionsReturn => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectTo = (path: string, params?: ParamKeyValuePair[]): void => {
    const searchParams = `${createSearchParams(params)}`

    navigate({
      pathname: path,
      search: searchParams
    });
  }

  const redirectWithCurrentQuery = (path: string, params?: ParamKeyValuePair[]): void => {
    const queryParams: ParamKeyValuePair[] = Array.from(searchParams.entries())
      .map(x => {
        const keyValuePair: ParamKeyValuePair = [x[0], x[1]]
        return keyValuePair;
      })

    params?.forEach(x => {
      const foundValue = queryParams.find(q => q[0] === x[0])
      const index = foundValue ? queryParams.indexOf(foundValue) : -1

      if (index !== -1) {
        queryParams[index] = [x[0], x[1]]
      } else {
        queryParams.push([x[0], x[1]])
      }
    })

    redirectTo(path, queryParams)
  };

  const retValue: INavigateRedirectionsReturn = {
    redirectTo,
    redirectWithCurrentQuery
  }

  return retValue;
}

export default useNavigateRedirections
