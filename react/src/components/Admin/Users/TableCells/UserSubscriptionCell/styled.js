import styled from 'styled-components';

const Active = styled.div`
  background-color: ${({ theme }) => theme.table.active.bg};
  color: ${({ theme }) => theme.table.active.font};
  border-radius: 2px;
  padding: 3px 8px;
`;

const Disabled = styled.div`
  background-color: ${({ theme }) => theme.table.disabled.bg};
  color: ${({ theme }) => theme.table.disabled.font};
  border-radius: 2px;
  padding: 3px 8px;
`;

export { Active, Disabled };
