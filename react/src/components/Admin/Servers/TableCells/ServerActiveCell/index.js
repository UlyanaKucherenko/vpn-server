import { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { RSwitchField } from 'components/Form/RSwitchField';
import { servers } from 'store/servers';

ServerActiveCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.bool,
    row: PropTypes.object,
  }),
};

function ServerActiveCell({ cell: { value, row } }) {
  const dispatch = useDispatch();

  const onChange = async (value) => {
    await dispatch(servers.thunks.changeStatusServer([value, row.original.id]));
  };

  return (
    <RSwitchField
      name={String(row.original.id)}
      value={value}
      onChange={onChange}
      size={22}
    />
  );
}

export const MemoizedServerActiveCell = memo(ServerActiveCell);
