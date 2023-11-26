import styled from 'styled-components';

import { RootFieldInput } from 'components/Form/_shared/styled';

const Wrap = styled.div`
  position: relative;
  max-width: 418px;
  width: 100%;
`;
const FieldInput = styled(RootFieldInput)`
  padding: 5px 40px 5px 12px;
  width: 100%;
  background-color: ${({ theme }) => theme.field.bgSearch};
  border: 1px solid ${({ theme }) => theme.field.bgSearch};
  border-radius: 4px;
`;

const FieldIcons = styled.div`
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  right: 12px;
`;

export { Wrap, FieldInput, FieldIcons };
