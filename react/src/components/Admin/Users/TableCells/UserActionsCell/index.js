import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TableActions } from 'components/RTable/TableActions';

UserActionsCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number,
  }),
};

function UserActionsCell({ cell: { value } }) {
  const history = useHistory();
  const editUser = () => history.push(`/admin/users/${value}`);

  return (
    <TableActions
      id={value}
      onEdit={editUser}
    />
  );
}

export const MemoizedUserActionsCell = memo(UserActionsCell);
