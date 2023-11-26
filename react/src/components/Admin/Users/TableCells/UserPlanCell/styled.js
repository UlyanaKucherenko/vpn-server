import styled from 'styled-components';

import { Text } from 'components/App/GlobalStyled';

const Name = styled(Text)`
  font-weight: 700;
  color: ${({ theme }) => theme.table.font};
`;

export { Name };
