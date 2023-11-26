import styled from 'styled-components';

import { Flex, Text } from 'components/App/GlobalStyled';

const Wrap = styled(Text)`
  ${Flex};
  width: 100%;
  padding-left: 12px;
`;

const Email = styled(Text)`
  font-weight: 700;
  color: ${({ theme }) => theme.table.email};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export { Wrap, Email };
