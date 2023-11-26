import styled from 'styled-components';

import { Text } from 'components/App/GlobalStyled';

const Wrap = styled(Text)`
  width: 100%;
  padding-left: 12px;
`;

const Ip = styled(Text)`
  font-weight: 700;
  color: ${({ theme }) => theme.table.email};
`;

export { Wrap, Ip };
