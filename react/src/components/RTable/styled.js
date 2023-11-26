import styled from 'styled-components/macro';
import { css } from 'styled-components';

import { device as deviceHeight } from 'utils/device';
import { Flex } from 'components/App/GlobalStyled';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  ${({ css }) => css}
`;
const Container = styled.div`
  padding: 0 96px;
`;
const Header = styled.div`
  background-color: ${({ theme }) => theme.table.headerColor};
  padding: 32px 0 16px;
`;

const THeader = styled.div`
  color: ${({ theme }) => theme.table.fontHead};
  ${({ css }) => css}
`;

const TCell = styled.div`
  color: ${({ theme }) => theme.table.font};
  ${({ css }) => css}
`;

const THead = styled.div`
  font-weight: 500;
  z-index: 5;
`;

const THeaderRow = styled.div`
  min-width: 100%;
`;

const Table = styled.div`
  position: relative;
  height: 100%;

  ${THeader}, ${TCell} {
    display: flex !important;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    padding: 21px 4px;
    //overflow: hidden;
    background-color: transparent;
  }

  ${THeader} {
    font-size: 16px;
    padding-block: 10px;
  }

  ${TCell} {
    ${Flex({ justify: 'center' })};
  }

  @media (${deviceHeight.sm}) {
    ${TCell} {
      padding: 16px;
    }
  }
`;

const TScroll = styled.div`
  overflow: auto;
  ${({ height }) =>
    css`
      height: ${height}px;
    `}
`;

const TRow = styled.div`
  min-width: 100%;
  border-bottom: 0.5px solid ${(props) => props.theme.field.borderColor};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.table.hover};
  }
`;

const TBody = styled.div`
  width: 100%;
`;

const TableOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    font-size: 16px;
    font-style: italic;
    color: ${(props) => props.theme.blueDark};
  }
`;

export {
  Main,
  Header,
  Container,
  Table,
  TScroll,
  TRow,
  TCell,
  THeader,
  THeaderRow,
  THead,
  TBody,
  TableOverlay,
};
