import { css } from 'styled-components';

const Base = (theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    color: black;
    background-color: ${theme.background};
  }
`;

export { Base };
