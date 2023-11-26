import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;
    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return (
      // TODO customize checkboxes
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
      />
    );
  }
);

IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.bool,
};

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';
