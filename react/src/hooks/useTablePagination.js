import { useCallback, useRef, useState } from 'react';

export const useTablePagination = ({ totalRows, perPage = 7, deps }) => {
  const fetchIdRef = useRef(0);
  const [pageCount, setPageCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(7);
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState(null);

  const fetchData = useCallback(
    ({ pageSize, pageIndex }) => {
      // eslint-disable-next-line no-plusplus
      const fetchId = ++fetchIdRef.current;
      if (fetchId === fetchIdRef.current) {
        const pageCount = Math.ceil(totalRows / perPage);
        setPageCount((prevState) => pageCount || prevState);
        setPageIndex(pageIndex + 1);
        setPageSize(pageSize);
      }
    },
    [...deps]
  );

  const onTableSort = useCallback((sortBy) => {
    if (sortBy.length) {
      setSortCol(sortBy[0].id);
      setSortDir(sortBy[0].desc ? 'desc' : 'asc');
    } else {
      setSortCol(null);
      setSortDir(null);
    }
  }, []);

  return {
    onTableSort,
    fetchData,
    pageCount,
    pageIndex,
    pageSize,
    sortCol,
    sortDir,
  };
};
