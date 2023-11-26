import { memo } from 'react';
import PropTypes from 'prop-types';

import { Wrap, Ip } from './styled';

ServerIpCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

function ServerIpCell({ cell: { value } }) {
  return (
    <Wrap>
      <Ip>{value}</Ip>
    </Wrap>
  );
}

export const MemoizedServerIpCell = memo(ServerIpCell);
