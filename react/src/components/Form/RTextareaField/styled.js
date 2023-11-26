import styled from 'styled-components';

import { colors } from 'components/App/Theme';
import { Label } from '../_shared/styled';

const FieldLabel = styled(Label)`
  top: ${({ focus }) => (focus ? '0' : '20px')};
`;

const FieldInput = styled.textarea`
  display: block;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.field.textColor};
  background-color: ${({ theme }) => theme.field.bgColor};
  border: 1px solid
    ${({ error, theme }) => (error ? theme.error : theme.field.borderColor)};
  border-radius: 3px;
  padding: 10px 12px;
  resize: none;

  &::placeholder {
    color: rgba(77, 77, 77, 0.35);
    opacity: 0;
    transition: opacity 0.15s linear;
  }

  &:focus {
    background-color: ${({ theme }) => theme.field.bgFocus};
    color: ${colors.charcoal};
    &::placeholder {
      opacity: 1;
    }
  }
`;

const HelperBlock = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const AmountSymbols = styled.div`
  min-height: 18px;
  font-size: 10px;
  font-weight: 500;
  margin: 2px 0;
`;

export { FieldLabel, FieldInput, HelperBlock, AmountSymbols };
