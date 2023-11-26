import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IconLogout } from 'assets/img/sidebar/logout.svg';
import { Flex, TextEllipsis } from 'components/App/GlobalStyled';

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 288px;
  height: 100%;
  padding: 32px 24px;
  flex-shrink: 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.sidebar};
`;

const Header = styled.div`
  ${Flex({ justify: 'center' })}
  margin-bottom: 36px;
`;

const UserName = styled.p`
  ${TextEllipsis({ width: '208px' })};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;
`;

const ItemLink = styled(NavLink)`
  ${Flex};
  position: relative;
  width: 100%;
  height: 44px;
  margin-bottom: 8px;
  padding: 15px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.navLink.bg};
  color: ${({ theme }) => theme.navLink.primary};
  font-weight: 600;

  svg path {
    fill: ${({ theme }) => theme.navLink.svg};
  }

  &.active {
    color: ${({ theme }) => theme.navLink.active};
    background-color: ${({ theme }) => theme.navLink.bgActive};

    svg path {
      fill: ${({ theme }) => theme.navLink.svgActive};
    }
  }

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.navLink.primary};
    background-color: ${({ theme }) => theme.navLink.bgHover};

    svg path {
      fill: ${({ theme }) => theme.navLink.primary};
    }
  }
`;

const ItemIcon = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ItemText = styled.span`
  margin-left: 18px;
  font-weight: 600;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LogoutIcon = styled(IconLogout)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export {
  Sidebar,
  Header,
  UserName,
  ItemLink,
  ItemIcon,
  ItemText,
  Footer,
  LogoutIcon,
};
