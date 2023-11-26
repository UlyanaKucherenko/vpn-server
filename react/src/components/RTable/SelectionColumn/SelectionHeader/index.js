import { memo } from 'react';
import PropTypes from 'prop-types';

import { IndeterminateCheckbox } from 'components/RTable/SelectionColumn/IndeterminateCheckbox';

const SelectionHeader = ({ getToggleAllRowsSelectedProps }) => {
  return (
    <div>
      <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    </div>
  );
};

SelectionHeader.propTypes = {
  getToggleAllRowsSelectedProps: PropTypes.func,
};

export const MemoizedSelectionHeader = memo(SelectionHeader);
