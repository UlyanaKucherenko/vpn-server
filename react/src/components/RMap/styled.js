import styled from 'styled-components';
import { css } from 'styled-components';

const Wrap = styled.div`
  padding: 1rem;
  ${({ height, width, fullWidth }) => css`
    height: ${height}px;
    width: ${fullWidth ? '100%' : `${width}px`};
  `};
`;

export { Wrap };
