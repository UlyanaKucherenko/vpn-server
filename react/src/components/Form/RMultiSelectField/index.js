import PropTypes from 'prop-types';
import { useState, useMemo, useRef, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import RCheckboxField from 'components/Form/RCheckboxField';
import { IconSelectArrow } from 'components/Icons';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  FieldDropdown,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons, FieldDropdownOption } from './styled';

MultiSelectField.propTypes = {
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextStatic: PropTypes.bool,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
};

function MultiSelectField({
  label,
  labelStatic = false,
  options = [],
  value = [],
  onChange = () => {},
  error = false,
  helperText,
  helperTextStatic = true,
  fullWidth = false,
  height = 40,
}) {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(
    () => value.length === options.length
  );
  const [defaultValue, setDefaultValue] = useState([]);
  const [clickBy, setClickBy] = useState(null);
  const ref = useRef();

  const preparedOptions = useMemo(() => {
    return !options.length ? [] : [{ value: 'all', label: 'All' }, ...options];
  }, []);

  useEffect(() => {
    if (value.length === options.length) {
      setIsAllSelected(true);
    }
    if (isAllSelected) {
      setDefaultValue(['All']);
    } else {
      setDefaultValue(
        value.map((item, key) => {
          const optionLabel = options.find(
            (option) => option.value === item
          ).label;
          return key ? ` ${optionLabel}` : optionLabel;
        })
      );
    }
  }, [value]);

  useEffect(() => {
    if (isAllSelected) {
      onChange(options.map((option) => option.value));
    } else if (!isAllSelected && clickBy === 'option') {
      onChange(value);
    } else {
      onChange([]);
    }
  }, [isAllSelected]);

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const onChooseOption = (option) => {
    const optionIdx = value.findIndex((item) => item === option.value);

    if (option.value === 'all') {
      setIsAllSelected((prevIsAllSelected) => !prevIsAllSelected);
      setClickBy('allOption');
      return;
    }

    if (optionIdx !== -1) {
      onChange([...value.filter((item) => item !== value[optionIdx])]);
      setIsAllSelected(false);
    } else {
      onChange([...value, option.value]);
    }
    setClickBy('option');
  };

  const optionIsActive = (option) => {
    return (
      value.some((item) => item === option.value) ||
      (option.value === 'all' && isAllSelected)
    );
  };

  const renderOptions = () => {
    if (!preparedOptions.length) return <RListIsEmpty />;

    return preparedOptions.map((option) => (
      <FieldDropdownOption
        key={option.value}
        active={optionIsActive(option)}
        onClick={() => onChooseOption(option)}
      >
        <RCheckboxField
          name={option.value}
          value={optionIsActive(option)}
          checkboxStatic
        />
        <div style={{ marginLeft: 4 }}>{option.label}</div>
      </FieldDropdownOption>
    ));
  };

  useOutsideClick(ref, () => {
    if (dropdownIsOpened) {
      onCloseDropdown();
    }
  });

  const isFilled = useMemo(() => {
    return value?.length > 0;
  }, [value]);

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label && !labelStatic}
      ref={ref}
    >
      {labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        {!labelStatic && (
          <Label
            focus={isFilled}
            error={error}
          >
            {label}
          </Label>
        )}
        <FieldInput
          type="text"
          height={height}
          error={error}
          defaultValue={defaultValue}
          onClick={onOpenDropdown}
          readOnly
        />
        <FieldIcons isOpened={dropdownIsOpened}>
          <IconSelectArrow />
        </FieldIcons>
        {dropdownIsOpened && (
          <FieldDropdown className="custom-scroll">
            {renderOptions()}
          </FieldDropdown>
        )}
      </FieldWrap>
      {helperTextStatic ? <HelperText>{error && helperText}</HelperText> : null}
    </Wrap>
  );
}

RMultiSelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RMultiSelectField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <MultiSelectField
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
