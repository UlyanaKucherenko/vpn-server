import styled from 'styled-components';

import { Flex } from 'components/App/GlobalStyled';
import { RootFieldInput } from '../_shared/styled';

const FieldInput = styled(RootFieldInput)`
  padding: 12px;
`;

const RangeWrap = styled.div`
  ${Flex};
  flex-direction: column;
  height: 50px;
  padding: 8px 16px;
`;

export { FieldInput, RangeWrap };
