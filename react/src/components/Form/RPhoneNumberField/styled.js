import styled from 'styled-components';
import { css } from 'styled-components';

import IconSelect from 'assets/img/form/icon-select.svg';

const FieldInput = styled.div`
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};

  .form-control {
    padding: 8.5px 14px 8.5px 58px;
    border-radius: 3px;
    width: 100%;
    height: ${({ height }) => `${height}px`};

    ${({ error }) =>
      error &&
      css`
        border-color: #fd7f7f;
        &:focus,
        &:hover {
          border-color: #fd7f7f;
        }
      `}

    ${({ dropdownDisabled }) =>
      dropdownDisabled &&
      css`
        padding: 8.5px 14px;
      `}
  }

  ${({ dropdownDisabled }) =>
    dropdownDisabled &&
    css`
      .flag-dropdown {
        display: none;
      }
    `}

  .special-label {
    top: -13px;
    font-size: 12px;

    ${({ error }) =>
      error &&
      css`
        color: #fd7f7f;
      `}
  }
  .react-tel-input .selected-flag .arrow {
    border: none;
    width: 10px;
    height: 10px;
    background: center url(${IconSelect}) no-repeat;
    transition: transform 0.3s ease-in-out;

    ${({ error }) =>
      error &&
      css`
        top: calc(50% - 3px);
      `}
    &.up {
      transform: rotate(180deg);
    }
  }
`;

export { FieldInput };
