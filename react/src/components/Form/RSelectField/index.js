import PropTypes from 'prop-types';
import { useState, useMemo, useRef } from 'react';
import { Controller } from 'react-hook-form';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import { IconChevronUp } from 'components/Icons';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  FieldDropdown,
  HelperText,
} from '../_shared/styled';
import {
  FieldInput,
  FieldIcons,
  FieldDropdownOption,
  OptionIcon,
} from './styled';

SelectField.propTypes = {
  label: PropTypes.string,
  labelStatic: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextStatic: PropTypes.bool,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
  optionIcon: PropTypes.bool,
};

function SelectField({
  label,
  labelStatic = false,
  options = [],
  value = {},
  onChange = () => {},
  error = false,
  helperText,
  helperTextStatic = true,
  fullWidth = false,
  height = 40,
  optionIcon = false,
}) {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const ref = useRef();

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const onChooseOption = (option) => {
    onChange(option);
    onCloseDropdown();
  };

  const renderOptions = () => {
    if (!options.length) return <RListIsEmpty />;

    return options.map((option) => (
      <FieldDropdownOption
        key={option.value}
        active={option.value === value.value}
        onClick={() => onChooseOption(option)}
      >
        {optionIcon && (
          <OptionIcon>
            <img
              src={option.icon}
              alt=""
              width={16}
              height={12}
            />
          </OptionIcon>
        )}
        {option.label}
      </FieldDropdownOption>
    ));
  };

  useOutsideClick(ref, () => {
    if (dropdownIsOpened) {
      onCloseDropdown();
    }
  });

  const isFilled = useMemo(() => {
    return Object.values(value).some((val) => val.length > 0);
  }, [value]);

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label && !labelStatic}
      ref={ref}
    >
      {label && labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={isFilled}
            error={error}
          >
            {label}
          </Label>
        )}
        <div onClick={onOpenDropdown}>
          <FieldInput
            type="text"
            height={height}
            error={error}
            value={value.label}
            readOnly
          />
          <FieldIcons isOpened={dropdownIsOpened}>
            <IconChevronUp size={15} />
          </FieldIcons>
        </div>
        {dropdownIsOpened && <FieldDropdown>{renderOptions()}</FieldDropdown>}
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RSelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

function RSelectField({ label, name, control, ...rest }) {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <SelectField
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

  return (
    <SelectField
      label={label}
      {...rest}
    />
  );
}

export { RSelectField };
