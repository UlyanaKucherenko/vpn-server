import styled from 'styled-components';
import { css } from 'styled-components';

import {
  RootFieldInput,
  RootFieldIcons,
  RootFieldDropdownOption,
} from '../_shared/styled';

const FieldInput = styled(RootFieldInput)`
  padding: 12px 40px 12px 12px;
`;

const FieldIcons = styled(RootFieldIcons)`
  right: 12px;
`;

const FieldDropdownOption = styled(RootFieldDropdownOption)`
  justify-content: space-between;
  padding: 4px 8px 4px 14px;

  ${({ active }) =>
    active &&
    css`
      svg path {
        fill: #989898;
      }
    `}

  &:hover {
    svg path {
      fill: #989898;
    }
  }
`;

export { FieldInput, FieldIcons, FieldDropdownOption };
