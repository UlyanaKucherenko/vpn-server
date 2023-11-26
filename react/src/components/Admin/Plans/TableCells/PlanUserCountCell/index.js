import { memo } from 'react';
import PropTypes from 'prop-types';

PlanUserCountCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number,
  }),
};

function PlanUserCountCell({ cell: { value } }) {
  return value || '-';
}

export const MemoizedPlanUserCountCell = memo(PlanUserCountCell);
