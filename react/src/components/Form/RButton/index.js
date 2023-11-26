import PropTypes from 'prop-types';

import { Button, ButtonChildren, PrependIcon } from './styled';

RButton.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  prependIcon: PropTypes.element,
  fullWidth: PropTypes.bool,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  css: PropTypes.object,
  form: PropTypes.string,
};

export function RButton({
  type = 'button',
  variant = 'primary',
  prependIcon,
  fullWidth,
  height = 40,
  disabled,
  onClick = () => {},
  children,
  css,
  form,
}) {
  return (
    <Button
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      height={height}
      disabled={disabled}
      onClick={onClick}
      css={css}
      form={form}
    >
      <ButtonChildren>
        {prependIcon && <PrependIcon>{prependIcon}</PrependIcon>}
        {children}
      </ButtonChildren>
    </Button>
  );
}
