import { memo } from 'react';
import PropTypes from 'prop-types';

import { Wrap, Location } from './styled';

ServerLocationCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

function ServerLocationCell({ cell: { value } }) {
  return (
    <Wrap>
      <Location>{value}</Location>
    </Wrap>
  );
}

export const MemoizedServerLocationCell = memo(ServerLocationCell);
