import { css } from 'styled-components';

const Block = ({
  w = 'auto',
  h = 'auto',
  p = 0,
  m = 0,
  b = 'none',
  bg = 'transparent',
}) => css`
  width: ${w};
  height: ${h};
  padding: ${p};
  margin: ${m};
  border: ${b};
  background: ${bg};
`;

const Flex = ({ align = 'center', justify = 'flex-start' }) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const TextEllipsis = ({ width }) => css`
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ScrollBar = () => css`
  &::-webkit-scrollbar {
    height: 2px;
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.table.popupOption.bgMain};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 2px;
  }
`;

const ScrollBarHidden = () => css`
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const Circle = ({ size = '21px' }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${size};
  height: ${size};
  border: 1px solid transparent;
  border-radius: 20px;
  margin: 0 1px;
  padding: 0 8px;
  line-height: 1;
  outline: 0;
  cursor: pointer;
`;

export { Block, Flex, TextEllipsis, ScrollBar, ScrollBarHidden, Circle };
