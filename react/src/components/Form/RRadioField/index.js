import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { IconRadioFilled, IconRadioEmpty } from 'components/Icons';
import { RadioWrap, RadioLabel, RadioLabelText } from './styled';

RRadioField.propTypes = {
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  css: PropTypes.object,
};

export function RRadioField({
  size = 24,
  value,
  checked,
  onChange = () => {},
  disabled,
  color = '#989898', // HEX
  children,
  css,
}) {
  const onChangeRadio = (e) => {
    onChange(e.target.value);
  };

  return (
    <RadioWrap css={css}>
      <input
        type="radio"
        id={value}
        size={size}
        value={value}
        checked={checked === value}
        onChange={onChangeRadio}
        disabled={disabled}
        hidden
      />
      <RadioLabel
        size={size}
        htmlFor={value}
      >
        <RButtonIcon color={color}>
          {checked === value ? (
            <IconRadioFilled fill={color} />
          ) : (
            <IconRadioEmpty fill={color} />
          )}
        </RButtonIcon>
      </RadioLabel>
      <RadioLabelText>{children}</RadioLabelText>
    </RadioWrap>
  );
}
