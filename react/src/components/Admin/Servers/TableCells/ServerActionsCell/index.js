import PropTypes from 'prop-types';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TableActions } from 'components/RTable/TableActions';
import { servers } from 'store/servers';

ServerActionsCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number,
  }),
};

function ServerActionsCell({ cell: { value } }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const editServer = () => history.push(`/admin/servers/${value}`);
  const onDelete = async () => {
    await dispatch(servers.thunks.deleteServer(value));
  };

  return (
    <TableActions
      onEdit={editServer}
      deleteOption
      onDelete={onDelete}
      titlePopupDelete="Are you sure you want to delete this server?"
    />
  );
}

export const MemoizedServerActionsCell = memo(ServerActionsCell);
