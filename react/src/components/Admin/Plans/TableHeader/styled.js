import styled from 'styled-components/macro';

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 4px 13px;
  background-color: ${({ theme }) => theme.table.bgHead};
  color: ${({ theme }) => theme.table.font};
  border-radius: 4px;
  width: 100%;
  height: 28px;
  ${({ css }) => css}
`;
const Icon = styled.div`
  width: 16px;
  height: 16px;
`;
const Header = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin-left: 8px;
`;

export { Wrap, Icon, Header };
