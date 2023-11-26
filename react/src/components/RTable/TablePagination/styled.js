import styled from 'styled-components/macro';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px 15px 0;
  min-height: 80px;
`;

const PaginationControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export { Main, PaginationControl };
