import { memo } from 'react';
import PropTypes from 'prop-types';

import { Email, Wrap } from './styled';

UserEmailCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

function UserEmailCell({ cell: { value } }) {
  return (
    <Wrap>
      <Email>{value}</Email>
    </Wrap>
  );
}

export const MemoizedUserEmailCell = memo(UserEmailCell);
