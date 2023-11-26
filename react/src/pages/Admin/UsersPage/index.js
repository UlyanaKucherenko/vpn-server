import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { users } from 'store/users';
import { useTablePagination } from 'hooks/useTablePagination';
import { RTable } from 'components/RTable';
import { TableTop } from 'components/Admin/Users/TableTop';
import { columns } from './config';

export function UsersPage() {
  const dispatch = useDispatch();
  const data = useSelector(users.selectors.users);

  const {
    current,
    perPage,
    lastPage,
    total: totalRows,
  } = useSelector(users.selectors.pagination);
  const filters = useSelector(users.selectors.filters);

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

  const getUsers = (pageIndex) => {
    dispatch(
      users.thunks.getUsers({
        filters: preparedFilters,
        page: pageIndex,
      })
    );
  };
  const getPlans = () => {
    dispatch(users.thunks.getPlans());
  };
  useEffect(() => {
    getUsers(pageIndex);
  }, [pageIndex, filters]);

  useEffect(() => {
    getPlans();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(users.actions.RESET_FILTERS());
      dispatch(users.actions.RESET_DEFAULT_FILTERS_NAMES());
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
      rowNumber
    />
  );
}
