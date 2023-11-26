import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { IconPasswordOff, IconPasswordOn } from 'components/Icons';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
} from '../_shared/styled';
import { FieldIcons, FieldInput } from './styled';

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  type: PropTypes.string,
  isFieldIcon: PropTypes.element,
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

function TextField({
  name,
  label,
  labelStatic = true,
  type = 'text',
  isFieldIcon,
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
  const [fieldType, setFieldType] = useState(type);
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const handlePassword = () => {
    const type = fieldType === 'password' ? 'text' : 'password';
    setFieldType(type);
  };

  const isFilled = useMemo(() => {
    return value || value.length > 0;
  }, [value]);

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
        <FieldInput
          id={name}
          type={fieldType}
          height={height}
          appendIcon={fieldType === 'password'}
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={disabled || hidden ? undefined : onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          hidden={hidden}
          readOnly={disabled || hidden}
          labelStatic={labelStatic}
        />
        <FieldIcons>
          {type === 'password' && (
            <RButtonIcon
              color="#989898"
              onClick={handlePassword}
            >
              {fieldType === 'password' ? (
                <IconPasswordOn />
              ) : (
                <IconPasswordOff />
              )}
            </RButtonIcon>
          )}
          {isFieldIcon}
        </FieldIcons>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RTextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RTextField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
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
