import styled from 'styled-components';

import { Text } from 'components/App/GlobalStyled';
import { RootFieldInput } from 'components/Form/_shared/styled';

const Wrap = styled.div`
  max-width: 380px;
`;

const Item = styled.div`
  margin-bottom: 44px;
  color: ${({ theme }) => theme.field.textColor};
`;

const Subtitle = styled(Text)`
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.field.labelColor};
`;

const Active = styled.div`
  width: 54px;
  background-color: ${({ theme }) => theme.table.active.bg};
  color: ${({ theme }) => theme.table.active.font};
  border-radius: 2px;
  padding: 3px 8px;
`;

const Disabled = styled.div`
  width: 66px;
  background-color: ${({ theme }) => theme.table.disabled.bg};
  color: ${({ theme }) => theme.table.disabled.font};
  border-radius: 2px;
  padding: 3px 8px;
`;

const FieldCopy = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled(RootFieldInput)`
  width: auto;
  border-color: transparent;
  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.field.textColor};
  }
`;

export { Wrap, Item, Subtitle, Active, Disabled, FieldCopy, Input };
