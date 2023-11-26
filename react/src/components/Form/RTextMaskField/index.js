import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';

import {
  FieldWrap,
  HelperText,
  Label,
  LabelStatic,
  Wrap,
} from '../_shared/styled';
import { FieldInput } from './styled';

TextMaskField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextStatic: PropTypes.bool,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

function TextMaskField({
  name,
  label,
  labelStatic = true,
  value,
  onChange = () => {},
  error = false,
  helperText,
  helperTextStatic = true,
  fullWidth = false,
  height = 40,
  placeholder,
  disabled = false,
  hidden = false,
  ...rest
}) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return value || value.length > 0;
  }, [value]);

  const onValueChange = (data) => {
    const { value } = data;
    onChange(value);
    return value;
  };

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label && !labelStatic}
    >
      {label && labelStatic ? (
        <LabelStatic
          htmlFor={name}
          error={error}
        >
          {label}
        </LabelStatic>
      ) : null}
      <FieldWrap>
        {!labelStatic && (
          <Label
            htmlFor={name}
            focus={isFocus || isFilled}
            error={error}
          >
            {label}
          </Label>
        )}

        <FieldInput
          id={name}
          height={height}
          error={error ? 'error' : undefined}
          value={value}
          placeholder={placeholder}
          onValueChange={disabled || hidden ? undefined : onValueChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          hidden={hidden}
          readOnly={disabled || hidden}
          labelstatic={labelStatic ? 'static' : undefined}
          {...rest}
        />
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RTextMaskField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RTextMaskField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextMaskField
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
