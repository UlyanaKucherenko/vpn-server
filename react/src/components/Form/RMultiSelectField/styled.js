import styled from 'styled-components';

import {
  RootFieldInput,
  RootFieldIcons,
  RootFieldDropdownOption,
} from '../_shared/styled';

const FieldInput = styled(RootFieldInput)`
  padding: 12px 40px 12px 12px;
  cursor: pointer;
`;

const FieldIcons = styled(RootFieldIcons)`
  right: 8px;
  transform: ${({ isOpened }) =>
    isOpened
      ? 'translateY(-50%) rotate(180deg)'
      : 'translateY(-50%) rotate(0deg)'};
`;

const FieldDropdownOption = styled(RootFieldDropdownOption)`
  padding: 4px 8px;
`;

export { FieldInput, FieldIcons, FieldDropdownOption };
