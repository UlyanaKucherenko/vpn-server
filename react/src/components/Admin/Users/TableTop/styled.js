import styled from 'styled-components';

import { Flex } from 'components/App/GlobalStyled';

const Wrap = styled.div`
  ${Flex({ justify: 'space-between' })};
  padding: 8px 4px;
  width: 100%;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.titleH2};
`;

export { Wrap, Title };
