import { useSearchParams } from 'react-router-dom';

interface IUpdatableSearchParams {
  searchParams: URLSearchParams
  updateParameter: (key: string, value: string) => void
}

const useUpdatableSearchParams = (): IUpdatableSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParameter = (key: string, value: string): void => {
    setSearchParams(searchParams => {
      searchParams.set(key, value);
      return searchParams;
    })
  }

  return { searchParams, updateParameter }
}

export default useUpdatableSearchParams
