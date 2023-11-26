import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const FieldInput = styled(NumberFormat)`
  display: block;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  padding: 12px;
  font-size: ${({ height }) => (height === 28 ? '12px' : '14px')};
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.field.textColor};
  background-color: ${({ theme }) => theme.field.bgColor};
  border: 1px solid
    ${({ error, theme }) =>
      error === 'error' ? theme.error : theme.field.borderColor};
  border-radius: 3px;

  &::placeholder {
    color: rgba(77, 77, 77, 0.35);
  }
`;

export { FieldInput };
