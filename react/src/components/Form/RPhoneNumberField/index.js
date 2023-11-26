import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';

import { HelperText, LabelStatic, Wrap } from 'components/Form/_shared/styled';
import { FieldInput } from 'components/Form/RPhoneNumberField/styled';

PhoneNumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  enableSearch: PropTypes.bool,
  enableLongNumbers: PropTypes.bool,
  autoFormat: PropTypes.bool,
  disableDropdown: PropTypes.bool,
};

function PhoneNumberField({
  name,
  label,
  labelStatic = true,
  value,
  onChange = () => {},
  helperText,
  error = false,
  fullWidth = false,
  disabled = false,
  height = 40,
  enableSearch = false,
  autoFormat = true,
  enableLongNumbers = false,
  disableDropdown = true,
}) {
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
      <FieldInput
        dropdownDisabled={disableDropdown}
        fullWidth={fullWidth}
        height={height}
        error={error}
      >
        <PhoneInput
          inputProps={{
            id: name,
            name,
            disabled,
          }}
          enableSearch={enableSearch}
          enableLongNumbers={enableLongNumbers}
          autoFormat={autoFormat}
          value={value}
          onChange={onChange}
          country="es"
          disableDropdown={disableDropdown}
          specialLabel={label}
        />
      </FieldInput>
      <HelperText>{error && helperText}</HelperText>
    </Wrap>
  );
}

RPhoneNumberField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  disabled: PropTypes.bool,
  enableSearch: PropTypes.bool,
  autoFormat: PropTypes.bool,
  enableLongNumbers: PropTypes.bool,
};

export function RPhoneNumberField({
  disabled,
  enableSearch,
  autoFormat,
  enableLongNumbers,
  label,
  name,
  control,
  ...rest
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <PhoneNumberField
          label={label}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          disabled={disabled}
          enableSearch={enableSearch}
          enableLongNumbers={enableLongNumbers}
          autoFormat={autoFormat}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
