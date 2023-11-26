import { memo } from 'react';
import PropTypes from 'prop-types';

import { Name } from './styled';

UserPlanCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

function UserPlanCell({ cell: { value } }) {
  return <Name>{value || '-'}</Name>;
}

export const MemoizedUserPlanCell = memo(UserPlanCell);
