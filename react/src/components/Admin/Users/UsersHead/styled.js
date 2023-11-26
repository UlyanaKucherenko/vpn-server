import styled from 'styled-components';

import {
  RootFieldInput,
  RootFieldIcons,
  RootFieldDropdownOption,
} from 'components/Form/_shared/styled';

const FieldInput = styled(RootFieldInput)`
  padding: 12px 40px 12px 40px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${({ theme }) => theme.field.bgSelect};
  border-color: ${({ theme }) => theme.field.bgSelect};
  color: ${({ theme }) => theme.table.font};
  &:focus {
    background-color: ${({ theme }) => theme.field.bgSelect};
    color: ${({ theme }) => theme.field.colorTextFocus};
  }
`;

const FieldIcons = styled(RootFieldIcons)`
  right: 8px;
  transform: ${({ isOpened }) =>
    isOpened
      ? 'translateY(-50%) rotate(180deg)'
      : 'translateY(-50%) rotate(0deg)'};
`;

const FieldDropdownOption = styled(RootFieldDropdownOption)`
  padding: 12px 14px;
  background-color: ${({ theme }) => theme.field.bgSelect};
`;

export { FieldInput, FieldIcons, FieldDropdownOption };
