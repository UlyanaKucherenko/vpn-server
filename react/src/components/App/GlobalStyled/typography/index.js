import styled, { css } from 'styled-components';

import { Block } from '../mixins';

const Typography = styled.div`
  ${Block};
  font-size: ${({ fz = '14px' }) => fz};
  font-weight: ${({ fw = 400 }) => fw};
  font-style: ${({ fs = 'normal' }) => fs};
  text-transform: ${({ tt = 'none' }) => tt};
  text-decoration: ${({ td = 'none' }) => td};
  text-align: ${({ ta = 'left' }) => ta};
  color: ${({ color = 'initial' }) => color};
`;

const Title = styled.div`
  ${({ size }) => {
    if (size === 'lg') {
      return css`
        font-size: 24px;
        font-weight: 600;
      `;
    }
    if (size === 'md') {
      return css`
        font-size: 18px;
      `;
    }
    if (size === 'sm') {
      return css`
        font-size: 16px;
      `;
    }
    return css`
      font-size: 18px;
    `;
  }};
`;

const Text = styled.div`
  ${({ size }) => {
    if (size === 'lg') {
      return css`
        font-size: 16px;
      `;
    }
    if (size === 'md') {
      return css`
        font-size: 14px;
      `;
    }
    if (size === 'sm') {
      return css`
        font-size: 12px;
      `;
    }
    return css`
      font-size: 14px;
    `;
  }};
`;

const Heading = styled(Typography)``;

export { Typography, Heading, Title, Text };
