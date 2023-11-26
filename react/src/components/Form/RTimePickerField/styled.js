import styled from 'styled-components';

const FieldInput = styled.div`
  .field-input {
    display: block;
    width: 100%;
    height: ${({ height }) => `${height}px`};
    font-size: ${(props) => props.theme.font.sizeMd};
    font-weight: 400;
    line-height: 16px;
    padding: 12px;
    color: ${({ theme }) => theme.field.textColor};
    background-color: ${({ theme }) => theme.field.bgColor};
    border: 1px solid
      ${({ error, theme }) => (error ? theme.error : theme.field.borderColor)};
    border-radius: 3px;

    &::placeholder {
      color: rgba(77, 77, 77, 0.35);
      transition: opacity 0.15s linear;
    }
  }

  .react-datepicker {
    position: absolute;
    z-index: 999;
  }
`;

export { FieldInput };
