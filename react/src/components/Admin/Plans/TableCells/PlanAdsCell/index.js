import { memo } from 'react';
import PropTypes from 'prop-types';

import { Disabled, Enabled } from './styled';

PlanAdsCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.bool,
  }),
};

function PlanAdsCell({ cell: { value } }) {
  return value ? <Enabled>enabled</Enabled> : <Disabled>disabled</Disabled>;
}

export const MemoizedPlanAdsCell = memo(PlanAdsCell);
