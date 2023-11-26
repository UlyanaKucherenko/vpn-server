import PropTypes from 'prop-types';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TableActions } from 'components/RTable/TableActions';
import { plans } from 'store/plans';

PlanActionsCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number,
  }),
};

function PlanActionsCell({ cell: { value } }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const editPlan = () => history.push(`/admin/plans/${value}`);
  const onDelete = async () => {
    await dispatch(plans.thunks.deletePlan(value));
  };
  return (
    <TableActions
      onEdit={editPlan}
      deleteOption
      onDelete={onDelete}
      titlePopupDelete="Are you sure you want to delete this plans?"
    />
  );
}

export const MemoizedPlanActionsCell = memo(PlanActionsCell);
