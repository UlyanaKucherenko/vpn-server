import PropTypes from 'prop-types';
import { useState, useMemo, useRef, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import { IconSearch, IconOptionArrow } from 'components/Icons';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  FieldDropdown,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons, FieldDropdownOption } from './styled';

AutocompleteField.propTypes = {
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
};

function AutocompleteField({
  label,
  labelStatic = true,
  placeholder,
  options = [],
  value = {},
  onChange = () => {},
  error = false,
  helperText,
  fullWidth = false,
  height = 40,
}) {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const ref = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState(value.label || '');

  useEffect(() => {
    if (Object.values(value).length > 0 && value.label !== fieldValue) {
      setFieldValue(value.label);
    }
  }, [value]);

  const onChangeFieldValue = (e) => {
    setFieldValue(e.target.value);
  };

  const onFocus = () => {
    setIsFocus(true);
    onOpenDropdown();
  };

  const onBlur = () => {
    if (!dropdownIsOpened) setIsFocus(false);
  };

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
    if (!fieldValue.length) onChange({});
    else setFieldValue(value.label || '');
  };

  const onChooseOption = (option) => {
    setFieldValue(option.label);
    onChange(option);
    setDropdownIsOpened(false);
  };

  const isFilled = useMemo(() => {
    return fieldValue.length > 0;
  }, [fieldValue]);

  const filteredOptions = useMemo(() => {
    if (fieldValue.length) {
      return options.filter((option) => {
        return option.label.toLowerCase().includes(fieldValue.toLowerCase());
      });
    }
    return options;
  }, [fieldValue]);

  const renderOptions = () => {
    if (!filteredOptions.length) return <RListIsEmpty />;

    return filteredOptions.map((option) => (
      <FieldDropdownOption
        key={option.value}
        active={option.value === value.value}
        onClick={() => onChooseOption(option)}
      >
        <span>{option.label}</span>
        <IconOptionArrow />
      </FieldDropdownOption>
    ));
  };

  useOutsideClick(ref, () => {
    if (dropdownIsOpened) {
      onCloseDropdown();
    }
  });

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label && !labelStatic}
      ref={ref}
    >
      {labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={isFocus || isFilled}
            error={error}
          >
            {label}
          </Label>
        )}
        <FieldInput
          type="text"
          height={height}
          error={error}
          value={fieldValue}
          placeholder={placeholder}
          onInput={onChangeFieldValue}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <FieldIcons>
          <IconSearch />
        </FieldIcons>
        {dropdownIsOpened && (
          <FieldDropdown className="custom-scroll">
            {renderOptions()}
          </FieldDropdown>
        )}
      </FieldWrap>
      <HelperText>{error && helperText}</HelperText>
    </Wrap>
  );
}

RAutocompleteField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RAutocompleteField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <AutocompleteField
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
