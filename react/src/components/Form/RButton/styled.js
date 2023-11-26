import styled, { css } from 'styled-components';

const Button = styled.button`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: ${({ height }) => `${height}px`};
  min-width: 76px;
  padding: 12px 18px;
  font-weight: 500;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: background 0.5s ease-out;
  -moz-transition: background 0.5s ease-out;
  -o-transition: background 0.5s ease-out;
  transition: background 0.5s ease-out;
  ${({ css }) => css}

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    transition: 0.6s ease-in-out;
  }

  &:active:after {
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
    transition: 0s;
  }

  &:hover {
    background-position: 200px;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'outline':
        return css`
          color: ${theme.button.alternative.color};
          background-color: transparent;
          border-color: ${theme.button.alternative.borderOutlined};

          &:after {
            background-color: #f2f2f2;
          }

          &:hover {
            background-color: #f9f9f9;
          }
        `;
      case 'alternative':
        return css`
          padding: 8px 14px;
          height: 30px;
          min-width: auto;
          background-color: ${({ theme }) => theme.button.alternative.bg};
          border: 1px solid ${({ theme }) => theme.button.alternative.border};
          color: ${({ theme }) => theme.button.alternative.color};

          &:hover {
            text-decoration: none;
            background-color: ${({ theme }) =>
              theme.button.alternative.bgHover};
            border: 1px solid
              ${({ theme }) => theme.button.alternative.borderHover};
          }
        `;
      case 'refresh':
        return css`
          padding: 4px 4px;
          height: 28px;
          width: 100%;
          min-width: 40px;
          background-color: ${({ theme }) => theme.table.bgHead};
          border: 1px solid ${({ theme }) => theme.table.bgHead};
          color: ${({ theme }) => theme.button.alternative.color};
          transition: none;

          &:hover {
            text-decoration: none;
            background-color: ${({ theme }) => theme.table.bgHeadHover};
            border: 1px solid ${({ theme }) => theme.table.bgHeadHover};
          }
        `;
      case 'confirm':
        return css`
          background-color: ${({ theme }) => theme.popup.confirmBg};
          border: 1px solid ${({ theme }) => theme.popup.confirmBg};
          color: ${({ theme }) => theme.popup.confirmColor};
          transition: none;

          &:hover {
            text-decoration: none;
            background-color: ${({ theme }) => theme.popup.confirmBgHover};
            border: 1px solid ${({ theme }) => theme.popup.confirmBgHover};
          }
        `;

      case 'primary':
        return css`
          color: ${theme.button.primary.color};
          background: ${theme.button.primary.bg};
          border-color: ${theme.button.primary.bg};
          &:hover {
            background-color: ${theme.button.primary.bgHover};
            border-color: ${theme.button.primary.borderHover};
          }
        `;
      case 'simple':
        return css`
          color: ${theme.button.simple.color};
          background-color: ${theme.button.simple.bgLight};
          border-color: ${theme.button.primary.border};

          &:after {
            background-color: #f2f2f2;
          }

          &:hover {
            background-color: ${theme.button.simple.bgDark};
          }
        `;
      case 'text':
        return css`
          color: ${theme.button.alternative.color};
          background-color: transparent;
          border-color: transparent;

          &:after {
            background-color: #f2f2f2;
          }

          &:hover {
            background-color: #f9f9f9;
          }
        `;
      default:
        return css`
          color: #ffffff;
          background: ${theme.button.primary.bgLight};
          border-color: ${theme.button.primary.border};

          &:after {
            background-color: #dfdfdf;
          }

          &:hover {
            box-shadow: 0 2px 5px 1px rgba(13, 13, 15, 0.18);
          }
        `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;

      &:after {
        display: none;
      }
    `}
  ${({ css }) => css}
`;

const ButtonChildren = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const PrependIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;

export { Button, ButtonChildren, PrependIcon };
