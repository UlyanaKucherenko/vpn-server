import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { SwitchWrap, SwitchLabel } from './styled';

SwitchField.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

function SwitchField({
  name,
  size = 28,
  value = false,
  onChange = () => {},
  disabled,
}) {
  const onChangeCheck = (e) => {
    onChange(e.target.checked, e.target);
  };

  return (
    <SwitchWrap>
      <input
        type="checkbox"
        id={name}
        checked={value}
        onChange={onChangeCheck}
        disabled={disabled}
        hidden
      />
      <SwitchLabel
        size={size}
        htmlFor={name}
        active={value}
        disabled={disabled}
      />
    </SwitchWrap>
  );
}

RSwitchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RSwitchField({ label, name, control, ...rest }) {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <SwitchField
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...rest}
          />
        )}
      />
    );
  }

  return (
    <SwitchField
      label={label}
      name={name}
      {...rest}
    />
  );
}
