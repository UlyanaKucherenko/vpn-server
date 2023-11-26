import styled from 'styled-components';

import { Text } from 'components/App/GlobalStyled';

const Wrap = styled(Text)`
  width: 100%;
  padding-left: 12px;
`;
const Location = styled(Text)`
  font-weight: 500;
  color: ${({ theme }) => theme.table.location};
`;

export { Wrap, Location };
