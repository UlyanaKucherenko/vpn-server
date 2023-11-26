import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';

import { IconSearch, IconCross } from 'components/Icons';
import { RButtonIcon } from 'components/Form/RButtonIcon';
import { Wrap, FieldInput, FieldIcons } from './styled';

TableSearch.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  height: PropTypes.number,
  onChange: PropTypes.func,
};

export function TableSearch({
  placeholder = 'Search',
  value = '',
  height = 34,
  onChange = () => {},
}) {
  const ref = useRef();
  const [fieldValue, setFieldValue] = useState(value || '');

  const onChangeFieldValue = (e) => {
    const { value } = e.target;
    setFieldValue(value);
  };

  useEffect(() => {
    onChange(fieldValue);
  }, [fieldValue]);

  const isFilled = useMemo(() => {
    return fieldValue.length > 0;
  }, [fieldValue]);

  const onClear = () => {
    setFieldValue('');
  };

  return (
    <Wrap ref={ref}>
      <FieldInput
        type="text"
        height={height}
        value={fieldValue}
        placeholder={placeholder}
        onChange={onChangeFieldValue}
      />
      <FieldIcons>
        {isFilled ? (
          <RButtonIcon onClick={onClear}>
            <IconCross />
          </RButtonIcon>
        ) : (
          <IconSearch />
        )}
      </FieldIcons>
    </Wrap>
  );
}
