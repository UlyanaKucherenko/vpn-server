import styled from 'styled-components';
import { ReactComponent as LogoIcon } from 'assets/img/logo/logo.svg';

const Logo = styled(LogoIcon)`
  display: block;
  margin: 0 auto;
  width: 118px;
  path {
    fill: ${({ theme }) => theme.logo};
  }
`;

export { Logo };
