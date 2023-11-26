import PropTypes from 'prop-types';
import { useState, useMemo, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
} from '../_shared/styled';
import { Decrementer, FieldInput, Incrementer, InputContainer } from './styled';

NumberField.propTypes = {
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
  css: PropTypes.object,
};

function NumberField({
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
  css,
}) {
  const [inputValue, setInputValue] = useState(1);
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

  const onIncrementValue = () => {
    setInputValue(inputValue + 1);
  };

  const onDecrementValue = () => {
    setInputValue((prevState) => (prevState > 0 ? inputValue - 1 : prevState));
  };

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <Wrap
      css={css}
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
        <InputContainer>
          <Decrementer
            type="button"
            onClick={onDecrementValue}
          >
            &#8722;
          </Decrementer>
          <FieldInput
            id={name}
            type="number"
            height={height}
            error={error}
            value={inputValue}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            hidden={hidden}
            readOnly
            labelStatic={labelStatic}
          />
          <Incrementer
            type="button"
            onClick={onIncrementValue}
          >
            &#43;
          </Incrementer>
        </InputContainer>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RNumberField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RNumberField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <NumberField
          label={label}
          value={value || 0}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
