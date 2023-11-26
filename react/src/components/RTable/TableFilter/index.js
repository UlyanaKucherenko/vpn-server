import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import { IconChevronUp } from 'components/Icons';
import { Wrap, FieldWrap, FieldDropdown } from 'components/Form/_shared/styled';
import {
  FieldInput,
  FieldIcons,
  FieldDropdownOption,
  PreFieldIcons,
} from './styled';

SelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.object,
  height: PropTypes.number,
  displayValue: PropTypes.string,
  onChooseOptionFilter: PropTypes.func,
  icon: PropTypes.element,
  fullWidth: PropTypes.bool,
};

function SelectField({
  options = [],
  value = {},
  height = 28,
  displayValue,
  onChooseOptionFilter = () => {},
  icon,
  fullWidth = false,
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
    onChooseOptionFilter(option);
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
        {option.label}
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
      ref={ref}
      fullWidth={fullWidth}
    >
      <FieldWrap>
        <div onClick={onOpenDropdown}>
          <PreFieldIcons size={16}>{icon}</PreFieldIcons>
          <FieldInput
            type="text"
            height={height}
            value={displayValue}
            readOnly
          />
          <FieldIcons isOpened={dropdownIsOpened}>
            <IconChevronUp size={15} />
          </FieldIcons>
        </div>
        {dropdownIsOpened && <FieldDropdown>{renderOptions()}</FieldDropdown>}
      </FieldWrap>
    </Wrap>
  );
}

TableFilter.propTypes = {
  name: PropTypes.string,
  value: PropTypes.object,
  onChooseOptionFilter: PropTypes.func,
};

function TableFilter({ name, value, ...rest }) {
  return (
    <SelectField
      name={name}
      value={value}
      {...rest}
    />
  );
}

export { TableFilter };
