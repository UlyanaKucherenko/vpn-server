import styled from 'styled-components/macro';

import { Text } from 'components/App/GlobalStyled';

const Wrap = styled.div`
  position: relative;
`;

const WrapOptions = styled.div`
  width: 170px;
  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 2;
`;
const Options = styled.div`
  padding: 2px;
  width: 170px;
  background: ${({ theme }) => theme.table.popupOption.bgMain};
  border: 1px solid ${({ theme }) => theme.table.popupOption.border};
  border-radius: 8px;
  position: relative;
  top: 26px;
  left: 0;

  &:before {
    content: '';
    width: 170px;
    height: 100%;
    background: ${({ theme }) => theme.table.popupOption.border};
    border: 1px solid ${({ theme }) => theme.table.popupOption.border};
    border-radius: 8px;
    position: absolute;
    top: 6px;
    right: -6px;
    z-index: -1;
  }
`;

const Option = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.table.popupOption.border};
  background-color: ${({ theme }) => theme.table.popupOption.bg};
  width: 100%;
  padding: 8px 14px;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.table.popupOption.bgHover};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.table.popupOption.bgHover};
    &:last-child {
      border-bottom: 0;
    }
  }
`;
const TextOption = styled(Text)`
  color: ${({ theme }) => theme.table.popupOption.text};
  display: block;
`;

export { Wrap, WrapOptions, Options, Option, TextOption };
