import { useState } from 'react';
import { Controller } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import PropTypes from 'prop-types';
import eu from 'date-fns/locale/eu';
import 'react-datepicker/dist/react-datepicker.css';

import { RButton } from 'components/Form/RButton';
import { format } from 'date-fns';
import { Wrap, FieldWrap, HelperText, LabelStatic } from '../_shared/styled';
import { FieldInput } from './styled';

registerLocale('ua', eu);

TimePickerComponent.propTypes = {
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]), // milliseconds
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextStatic: PropTypes.bool,
  css: PropTypes.object,
};

function TimePickerComponent({
  label,
  labelStatic = true,
  name,
  fullWidth = false,
  height = 40,
  value = '',
  onChange = () => {},
  error = false,
  helperText,
  helperTextStatic = true,
  css,
  ...rest
}) {
  const [time, setTime] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeTime = (time) => {
    setIsOpen(!isOpen);
    setTime(time);
    onChange(time ? Date.parse(time) / 1000 : null);
  };

  const onHandleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label}
      css={css}
    >
      {label && labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        <FieldInput
          height={height}
          error={error}
        >
          <RButton
            variant="simple"
            onClick={onHandleClick}
          >
            {time ? format(time, 'HH:mm') : 'Add pickup time'}
          </RButton>
          {isOpen && (
            <DatePicker
              inline
              locale={eu}
              className="field-input"
              placeholderText="Select time"
              selected={value}
              onChange={onChangeTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={5}
              name="pickUpTime"
              dateFormat="HH:mm"
              {...rest}
            />
          )}
        </FieldInput>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RTimePickerField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RTimePickerField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TimePickerComponent
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
