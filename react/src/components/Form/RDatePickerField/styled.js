import { css } from 'styled-components';
import styled from 'styled-components';

import { RootFieldIcons } from '../_shared/styled';

const FieldInput = styled.div`
  .field-input {
    display: block;
    width: 100%;
    height: ${({ height }) => `${height}px`};
    font-size: ${(props) => props.theme.font.sizeMd};
    font-weight: 400;
    line-height: 16px;
    padding: 12px 48px 12px 12px;
    color: ${({ theme }) => theme.field.textColor};
    background-color: ${({ theme }) => theme.field.bgColor};
    border: 1px solid
      ${({ error, theme }) => (error ? theme.error : theme.field.borderColor)};
    border-radius: 3px;

    &::placeholder {
      color: rgba(77, 77, 77, 0.35);
      opacity: 0;
      transition: opacity 0.15s linear;
    }

    &:focus {
      &::placeholder {
        opacity: 1;
      }
    }
  }

  .react-datepicker-popper {
    z-index: 10;
  }
`;

const FieldAppendIcon = styled(RootFieldIcons)`
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(${({ height }) => `${height}px`} - 10px);
  padding: 0 13px 0 12px;
  border-left: 1px solid
    ${({ error, theme }) => (error ? theme.error : theme.field.borderColor)};

  ${({ error, theme }) =>
    error &&
    css`
      svg path {
        fill: ${theme.error};
      }
    `}
`;

export { FieldInput, FieldAppendIcon };
