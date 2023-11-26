import { memo } from 'react';
import PropTypes from 'prop-types';

PlanPriceCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number,
  }),
};

function PlanPriceCell({ cell: { value } }) {
  return value ? `${value * 0.01}$` : '-';
}

export const MemoizedPlanPriceCell = memo(PlanPriceCell);
