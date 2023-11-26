import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { servers } from 'store/servers';
import { useTablePagination } from 'hooks/useTablePagination';
import { RTable } from 'components/RTable';
import { TableTop } from 'components/Admin/Servers/TableTop';
import { columns } from './config';

export function ServersPage() {
  const dispatch = useDispatch();
  const data = useSelector(servers.selectors.servers);

  const {
    current,
    perPage,
    lastPage,
    total: totalRows,
  } = useSelector(servers.selectors.pagination);
  const filters = useSelector(servers.selectors.filters);

  const { fetchData, pageIndex } = useTablePagination({
    totalRows,
    perPage,
    deps: [current, data],
  });

  const preparedFilters = useMemo(
    () => ({
      ...filters,
    }),
    [filters]
  );

  const getServers = (pageIndex) => {
    dispatch(
      servers.thunks.getServers({
        filters: preparedFilters,
        page: pageIndex,
      })
    );
  };

  const getCountries = () => {
    dispatch(servers.thunks.getCountries());
  };

  useEffect(() => {
    getServers(pageIndex);
  }, [pageIndex, filters]);

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(servers.actions.RESET_FILTERS());
      dispatch(servers.actions.RESET_DEFAULT_FILTERS_NAMES());
    };
  }, []);

  return (
    <RTable
      data={data}
      columns={columns}
      perPage={perPage}
      pageCount={lastPage}
      topHeader={<TableTop />}
      fetchData={fetchData}
    />
  );
}
