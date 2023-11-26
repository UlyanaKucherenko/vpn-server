import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Flex } from 'components/App/GlobalStyled';

const Wrap = styled.div`
  ${Flex({ justify: 'space-between' })};
  padding: 8px 4px;
  width: 100%;
`;
const Btn = styled(NavLink)`
  ${Flex};
  height: 34px;
  padding: 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.linkBtn.bg};
  border: 1px solid ${({ theme }) => theme.linkBtn.border};
  color: ${({ theme }) => theme.linkBtn.primary};
  font-weight: 600;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.linkBtn.primary};
    background-color: ${({ theme }) => theme.linkBtn.bgHover};
    border: 1px solid ${({ theme }) => theme.linkBtn.borderHover};
  }
`;
const BtnText = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

export { Wrap, Btn, BtnText };
