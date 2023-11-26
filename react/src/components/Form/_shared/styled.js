import styled, { css } from 'styled-components';

import { colors } from 'components/App/Theme';
import { ScrollBar } from 'components/App/GlobalStyled';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
  ${({ css }) => css}
`;

const FieldWrap = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: ${({ focus }) => (focus ? '0' : '50%')};
  left: 12px;
  padding: 0 4px;
  font-size: ${({ focus }) => (focus ? '12px' : '14px')};
  line-height: 1;
  color: ${({ error, theme }) =>
    error ? theme.error : theme.field.labelColor};
  pointer-events: none;
  transform: translateY(-50%);
  z-index: 1;
  transition: 0.1s linear;

  ${({ focus }) =>
    focus &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
        z-index: -1;
      }
    `};
`;

const LabelStatic = styled.label`
  display: block;
  margin-bottom: 6px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  color: ${({ error, theme }) =>
    error ? theme.error : theme.field.labelColor};
  transition: 0.1s linear;
`;

const RootFieldInput = styled.input`
  display: block;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  font-size: ${({ height }) => (height === 28 ? '12px' : '14px')};
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.field.textColor};
  background-color: ${({ theme }) => theme.field.bgColor};
  border: 1px solid
    ${({ error, theme }) => (error ? theme.error : theme.field.borderColor)};
  border-radius: 3px;

  &::placeholder {
    color: ${({ theme }) => theme.field.placeholder};
  }

  &:focus {
    background-color: ${({ theme }) => theme.field.bgFocus};
    color: ${colors.charcoal};

    &::placeholder {
      color: ${({ theme }) => theme.field.placeholderFocus};
    }
  }
`;

const HelperText = styled.div`
  flex: 1 1 auto;
  min-height: 18px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.error};
  margin: 2px 0;
`;

const RootFieldIcons = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const FieldDropdown = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: ${({ w = '100%' }) => w};
  height: auto;
  max-height: 166px;
  border-radius: 6px;
  z-index: 10;
  background: ${({ theme }) => theme.table.popupOption.bgMain};
  border: 1px solid ${({ theme }) => theme.table.popupOption.border};
  ${ScrollBar};
  overflow: scroll;
  overflow-x: hidden;
  box-shadow: 4px 4px 0 1px ${({ theme }) => theme.table.popupOption.border};
`;

const RootFieldDropdownOption = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.dropdown.optionColor};
  background-color: ${({ theme }) => theme.dropdown.optionBg};
  line-height: 1;
  border-bottom: 1px solid ${({ theme }) => theme.table.popupOption.border};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #f9f9f9;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.dropdown.optionBgHover};
    color: ${({ theme }) => theme.dropdown.optionColorHover};
  }
`;

export {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  RootFieldInput,
  HelperText,
  RootFieldIcons,
  FieldDropdown,
  RootFieldDropdownOption,
};
