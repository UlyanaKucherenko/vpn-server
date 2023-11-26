import styled from 'styled-components';

import { colors } from 'components/App/Theme';

const ratio = 1.72;

const SwitchWrap = styled.div`
  display: inline-flex;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: block;
  width: ${({ size }) => `${(size * ratio).toFixed(0)}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.switchBtn.bgInactive : `${colors.alto}`};
  background-color: ${({ theme, active }) =>
    active ? theme.switchBtn.bgActive : theme.switchBtn.bgInactive};
  border-radius: 28px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: ${({ active, size }) =>
      active ? `calc(100% - ${size - 8}px - 4px)` : '4px'};
    width: ${({ size }) => `${size - 8}px`};
    height: ${({ size }) => `${size - 8}px`};
    background-color: ${({ theme, active }) =>
      active
        ? theme.switchBtn.bgСircleActive
        : theme.switchBtn.bgСircleInactive};
    border-radius: ${({ size }) => `${size - 8}px`};
    transition: 0.05s linear;
  }
`;

export { SwitchWrap, SwitchLabel };
