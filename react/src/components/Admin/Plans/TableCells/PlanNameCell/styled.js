import styled from 'styled-components';

import { Flex, Text } from 'components/App/GlobalStyled';

const Wrap = styled(Text)`
  ${Flex};
  width: 100%;
  padding-left: 12px;
`;

const Name = styled(Text)`
  font-weight: 700;
  color: ${({ theme }) => theme.table.font};
`;

export { Wrap, Name };
