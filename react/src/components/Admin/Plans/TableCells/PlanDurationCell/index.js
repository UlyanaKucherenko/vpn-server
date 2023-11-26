import { memo } from 'react';
import PropTypes from 'prop-types';

import { duration } from 'utils/const';

PlanDurationCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number,
  }),
};

function PlanDurationCell({ cell: { value } }) {
  return duration[value] || '-';
}

export const MemoizedPlanDurationCell = memo(PlanDurationCell);
