import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { IconCheckboxEmpty, IconCheckboxFilled } from 'components/Icons';
import { CheckboxWrap, CheckboxLabel } from './styled';

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  value: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  setError: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  checkboxStatic: PropTypes.bool,
};

function CheckboxField({
  name,
  size = 24,
  value,
  error,
  setError = () => {},
  onChange = () => {},
  disabled,
  color = '#989898', // only HEX
  checkboxStatic = false,
}) {
  const onChangeCheck = (e) => {
    onChange(e.target.checked);
    // TODO: rewrite
  };

  useEffect(() => {
    (function onPassError() {
      setError(error);
    })();
  }, [error]);

  const renderCheckbox = () => {
    return value ? (
      <IconCheckboxFilled fill={color} />
    ) : (
      <IconCheckboxEmpty fill={error ? '#EB5757' : color} />
    );
  };

  return (
    <CheckboxWrap>
      <input
        type="checkbox"
        id={name}
        size={size}
        checked={value}
        onChange={onChangeCheck}
        disabled={disabled}
        hidden
      />
      <CheckboxLabel
        size={size}
        htmlFor={name}
        error={error}
      >
        {checkboxStatic ? (
          renderCheckbox()
        ) : (
          <RButtonIcon color={color}>{renderCheckbox()}</RButtonIcon>
        )}
      </CheckboxLabel>
    </CheckboxWrap>
  );
}

RCheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

function RCheckboxField({ label, name, control, ...rest }) {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CheckboxField
            label={label}
            name={name}
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

  return (
    <CheckboxField
      label={label}
      name={name}
      {...rest}
    />
  );
}

export default RCheckboxField;
