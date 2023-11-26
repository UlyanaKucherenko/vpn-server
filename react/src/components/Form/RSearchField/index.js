import PropTypes from 'prop-types';
import { useState, useMemo, useRef } from 'react';

import { IconSearch } from 'components/Icons';
import { Controller } from 'react-hook-form';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons } from './styled';

SearchField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  labelStatic: PropTypes.bool,
  placeholder: PropTypes.string,
  onFetch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
  amountSymbols: PropTypes.number,
};

export function SearchField({
  name,
  label,
  value,
  labelStatic = true,
  placeholder,
  onChange = () => {},
  onFetch = () => {},
  error = false,
  helperText,
  fullWidth = false,
  height = 40,
  amountSymbols = 3,
}) {
  const ref = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const [debounce, setDebounce] = useState(null);

  const onDebounce = (value) => {
    clearInterval(debounce);
    setDebounce(
      setTimeout(() => {
        if (value.length >= amountSymbols) {
          onChange(value);
          onFetch(value);
        }
        if (value.length === 0) {
          onChange(null);
          onFetch(null);
        }
      }, 1000)
    );
  };

  const onChangeFieldValue = (e) => {
    const { value } = e.target;
    onDebounce(value);
    onChange(value);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return value || value.length > 0;
  }, [value]);

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label && !labelStatic}
      ref={ref}
    >
      {labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={isFocus || isFilled}
            error={error}
          >
            {label}
          </Label>
        )}
        <FieldInput
          id={name}
          type="text"
          height={height}
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={onChangeFieldValue}
          onFocus={onFocus}
          onBlur={onBlur}
          labelStatic
        />
        <FieldIcons>
          <IconSearch />
        </FieldIcons>
      </FieldWrap>
      <HelperText>{error && helperText}</HelperText>
    </Wrap>
  );
}

RSearchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RSearchField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SearchField
          label={label}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
