import { memo } from 'react';
import PropTypes from 'prop-types';

import { Wrap, Name } from './styled';

PlanNameCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

function PlanNameCell({ cell: { value } }) {
  return (
    <Wrap>
      <Name>{value}</Name>
    </Wrap>
  );
}

export const MemoizedPlanNameCell = memo(PlanNameCell);
