import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { plans } from 'store/plans';
import { RTable } from 'components/RTable';
import { TableTop } from 'components/Admin/Plans/TableTop';
import { columns } from './config';

export function PlansPage() {
  const dispatch = useDispatch();
  const data = useSelector(plans.selectors.plans);

  const getPlans = async (data) => {
    await dispatch(plans.thunks.getPlans(data));
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <RTable
      data={data}
      columns={columns}
      disablePagination
      topHeader={<TableTop />}
    />
  );
}
