import PropTypes from 'prop-types';

import { ButtonIcon, IconHover } from './styled';

RButtonIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  css: PropTypes.object,
};

export function RButtonIcon({
  size = 24,
  color = '#989898',
  onClick = () => {},
  disabled,
  children,
  css,
}) {
  return (
    <ButtonIcon
      css={css}
      size={size}
      disabled={disabled}
      onClick={!disabled ? onClick : null}
    >
      {children}
      <IconHover color={color} />
    </ButtonIcon>
  );
}
