import { memo } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { appDateFormat } from 'utils/formats';
import { prepareDateFromServer } from 'utils/prepareDate';
import { Date } from './styled';

UserExpiresCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any,
  }),
};

function UserExpiresCell({ cell: { value } }) {
  if (!value) return '-';
  return <Date>{format(prepareDateFromServer(value), appDateFormat)}</Date>;
}

export const MemoizedUserExpiresCell = memo(UserExpiresCell);
