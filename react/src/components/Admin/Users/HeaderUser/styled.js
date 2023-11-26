import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.table.headerColor};
`;

const Container = styled.div`
  padding: 0 96px;
`;

const Text = styled.div`
  margin-left: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.btnBack.color};
`;

const BtnBack = styled(NavLink)`
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: none;
    ${Text} {
      color: ${({ theme }) => theme.btnBack.colorHover};
    }
    svg path {
      fill: ${({ theme }) => theme.btnBack.colorHover};
    }
  }
`;

export { Container, Header, BtnBack, Text };
