import styled from 'styled-components';

import { RootFieldIcons, RootFieldInput } from '../_shared/styled';

const FieldInput = styled(RootFieldInput)`
  padding: ${({ appendIcon }) => (appendIcon ? '12px 48px 12px 12px' : '12px')};

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -moz-appearance: textfield;
    -webkit-appearance: none;
    margin: 0;
  }
`;

const FieldIcons = styled(RootFieldIcons)`
  right: 12px;
`;

export { FieldInput, FieldIcons };
