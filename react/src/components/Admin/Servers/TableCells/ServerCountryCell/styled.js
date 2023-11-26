import styled from 'styled-components';

import { Flex, Text } from 'components/App/GlobalStyled';

const Wrap = styled(Text)`
  ${Flex};
  width: 100%;
  padding-left: 12px;
`;

const Country = styled(Text)`
  margin-left: 8px;
  color: ${({ theme }) => theme.table.country};
  font-weight: 800;
`;

export { Wrap, Country };
