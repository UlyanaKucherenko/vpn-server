import { memo } from 'react';
import PropTypes from 'prop-types';

import { Wrap, Country } from './styled';

ServerCountryCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.object,
  }),
};

function ServerCountryCell({ cell: { value } }) {
  return (
    <Wrap>
      <img
        src={value.picture.image}
        width={16}
        height={12}
        alt=""
      />
      <Country>{value.name}</Country>
    </Wrap>
  );
}

export const MemoizedServerCountryCell = memo(ServerCountryCell);
