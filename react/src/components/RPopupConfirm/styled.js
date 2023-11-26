import styled from 'styled-components';

const Popup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ width }) => `${width}px`};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  max-height: ${({ maxHeight }) => `${maxHeight}px` || 'auto'};
  min-height: 230px;
  margin: auto;
  padding: 24px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 0 3px 9px rgba(12, 12, 12, 0.15);
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  font-size: 22px;
  color: black;
  text-align: center;
  padding: 24px 0;
`;

const Close = styled.div`
  position: absolute;
  top: 28px;
  right: 24px;
`;

const Body = styled.div``;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export { Popup, Header, Title, Close, Body, Footer };
