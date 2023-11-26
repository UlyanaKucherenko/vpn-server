import { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { RRangeSlider } from 'components/RRangeSlider';
import { useToggle } from 'hooks/useToggle';
import { useOutsideClick } from 'hooks/useOutsideClick';

import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
  FieldDropdown,
} from '../_shared/styled';
import { FieldInput, RangeWrap } from './styled';

RangeField.propTypes = {
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
};

function RangeField({
  name,
  label,
  labelStatic = false,
  value,
  onChange = () => {},
  error = false,
  helperText,
  helperTextStatic = true,
  fullWidth = false,
  height = 40,
  placeholder,
}) {
  const [isFocus, setIsFocus] = useToggle(false);
  const [ddIsOpened, setDdIsOpened] = useToggle(false);
  const ref = useRef();

  const onClickField = () => {
    setDdIsOpened();
  };

  useOutsideClick(ref, () => {
    if (ddIsOpened) {
      setDdIsOpened();
    }
  });

  const isFilled = useMemo(() => {
    return value || value.length > 0;
  }, [value]);

  const isValue = useMemo(() => {
    if (Array.isArray(value)) return `${value[0]} - ${value[1]}`;
    return value;
  }, [value]);

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label && !labelStatic}
      ref={ref}
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
          type="text"
          height={height}
          error={error}
          placeholder={placeholder}
          value={isValue}
          onChange={undefined}
          onFocus={setIsFocus}
          onBlur={setIsFocus}
          readOnly
          onClick={onClickField}
        />
        {ddIsOpened && (
          <FieldDropdown w="250px">
            <RangeWrap
              align="stretch"
              justify="flex-end"
            >
              <RRangeSlider
                value={value}
                onChange={onChange}
                startPoint={0}
                endPoint={200}
              />
            </RangeWrap>
          </FieldDropdown>
        )}
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RRangeField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RRangeField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <RangeField
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
