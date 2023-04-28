import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

interface IUpdatableSearchParams {
  searchParams: URLSearchParams
  updateParameter: (key: string, value: string) => void
}

const useUpdatableSearchParams = (): IUpdatableSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParameter = useCallback((key: string, value: string): void => {
    setSearchParams(p => {
      p.set(key, value);
      return p;
    })
  }, [setSearchParams])

  return { searchParams, updateParameter }
}

export default useUpdatableSearchParams
