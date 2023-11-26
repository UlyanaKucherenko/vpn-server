import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const Content = styled.main`
  height: 100%;
  background-color: #ffffff;
  overflow-y: auto;
`;

export { Layout, Main, Content };
