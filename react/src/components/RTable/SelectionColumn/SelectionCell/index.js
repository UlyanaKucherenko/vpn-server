import { memo } from 'react';
import PropTypes from 'prop-types';

import { IndeterminateCheckbox } from 'components/RTable/SelectionColumn/IndeterminateCheckbox';

const SelectionCell = ({ row: { getToggleRowSelectedProps } }) => {
  return (
    <div className="customClass">
      <IndeterminateCheckbox {...getToggleRowSelectedProps()} />
    </div>
  );
};

SelectionCell.propTypes = {
  row: PropTypes.object,
};

export const MemoizedSelectionCell = memo(SelectionCell);
