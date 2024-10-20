import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function usePageState(initialPage: number) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlPage = Number(searchParams.get('page') || `${initialPage}`);
  const [page, setPage] = useState(urlPage);

  useEffect(() => {
    setSearchParams({ page: page.toString() });
  }, [page, setSearchParams]);

  return [page, setPage] as const;
}

export default usePageState;
