import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  padding: 16px;
  overflow-y: auto;
  background: ${(props) => props.theme.background};
`;

export { Layout };
