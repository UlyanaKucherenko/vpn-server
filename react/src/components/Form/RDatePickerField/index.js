import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as IconCalendarSvg } from 'assets/img/form/calendar.svg';
import {
  Wrap,
  Label,
  FieldWrap,
  HelperText,
  LabelStatic,
} from '../_shared/styled';
import { FieldInput, FieldAppendIcon } from './styled';

DatePickerComponent.propTypes = {
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
  selectsRange: PropTypes.bool,
};

function DatePickerComponent({
  label,
  labelStatic = false,
  name,
  fullWidth = false,
  height = 40,
  value = '',
  onChange = () => {},
  error = false,
  helperText,
  helperTextStatic = true,
  selectsRange = false,
  ...rest
}) {
  const [focus, setFocus] = useState(false);

  const isFilled = useMemo(() => {
    return !!value;
  }, [value]);

  const onChangeDate = (date) => {
    onChange(date ? Date.parse(date) : null);
  };

  const parseDateToMilliseconds = useCallback((date) => {
    if (date) {
      return typeof date === 'number' ? date : Date.parse(date);
    }
    return null;
  }, []);

  const onChangeDatesRange = (dates) => {
    const [start, end] = dates;
    const parseStart = parseDateToMilliseconds(start);
    const parseEnd = parseDateToMilliseconds(end);
    onChange([parseStart, parseEnd]);
  };

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label}
    >
      {label && labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={focus || isFilled}
            error={error}
          >
            {label}
          </Label>
        )}

        <FieldInput
          height={height}
          error={error}
        >
          <DatePicker
            autoComplete="off"
            // dateFormat="MM/dd/yyyy"
            className="field-input"
            showPopperArrow={false}
            showTimeSelect={false}
            selected={selectsRange ? value[0] : value}
            onChange={selectsRange ? onChangeDatesRange : onChangeDate}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            selectsRange={selectsRange}
            startDate={selectsRange ? value[0] : undefined}
            endDate={selectsRange ? value[1] : undefined}
            {...rest}
          />
        </FieldInput>

        <FieldAppendIcon
          height={height}
          error={error}
        >
          <IconCalendarSvg />
        </FieldAppendIcon>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RDatePickerField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

function RDatePickerField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePickerComponent
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

export { RDatePickerField };
