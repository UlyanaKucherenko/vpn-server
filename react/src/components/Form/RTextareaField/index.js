import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { Wrap, LabelStatic, FieldWrap, HelperText } from '../_shared/styled';
import { FieldLabel, FieldInput, HelperBlock, AmountSymbols } from './styled';

TextareaField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  maxSymbols: PropTypes.number,
};

function TextareaField({
  name,
  label,
  labelStatic = true,
  value,
  onChange = () => {},
  error = false,
  helperText,
  fullWidth = false,
  height = 100,
  placeholder,
  maxSymbols,
}) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return value.length > 0;
  }, [value]);

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label && !labelStatic}
    >
      {labelStatic && (
        <LabelStatic
          htmlFor={name}
          error={error}
        >
          {label}
        </LabelStatic>
      )}
      <FieldWrap>
        {!labelStatic && (
          <FieldLabel
            htmlFor={name}
            focus={isFocus || isFilled}
            error={error}
          >
            {label}
          </FieldLabel>
        )}
        <FieldInput
          id={name}
          height={height}
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FieldWrap>
      <HelperBlock>
        <HelperText>{error && helperText}</HelperText>
        {maxSymbols && (
          <AmountSymbols>
            {value.length} / {maxSymbols}
          </AmountSymbols>
        )}
      </HelperBlock>
    </Wrap>
  );
}

RTextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

function RTextareaField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextareaField
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

export { RTextareaField };
