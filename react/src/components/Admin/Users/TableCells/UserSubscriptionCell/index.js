import { memo } from 'react';
import PropTypes from 'prop-types';

import { Disabled, Active } from './styled';

UserSubscriptionCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.bool,
  }),
};

function UserSubscriptionCell({ cell: { value } }) {
  return value ? <Active>active</Active> : <Disabled>disabled</Disabled>;
}

export const MemoizedUserSubscriptionCell = memo(UserSubscriptionCell);
