import styled from 'styled-components';

import { Text } from 'components/App/GlobalStyled';

const Date = styled(Text)`
  font-weight: 700;
  color: ${({ theme }) => theme.table.font};
`;

export { Date };
