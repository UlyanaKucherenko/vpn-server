import styled from 'styled-components';

import { RButton } from 'components/Form/RButton';

const Refresh = styled(RButton)`
  padding: 4px 4px;
  height: 28px;
  width: 100%;
  background-color: ${({ theme }) => theme.table.bgHead};
  border: 1px solid ${({ theme }) => theme.table.bgHead};
  border-radius: 4px;
  color: ${({ theme }) => theme.button.alternative.color};
  cursor: pointer;
  transition: none;

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.table.bgHeadHover};
    border: 1px solid ${({ theme }) => theme.table.bgHeadHover};
  }
`;

export { Refresh };
