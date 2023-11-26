import styled from 'styled-components';

const Popup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ width }) => `${width}px`};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  max-height: ${({ maxHeight }) => `${maxHeight}px` || 'auto'};
  margin: auto;
  padding: 24px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  ${({ css }) => css}
`;

const Title = styled.p`
  color: black;
  margin-bottom: 28px;
`;

const Close = styled.div`
  position: absolute;
  top: 24px;
  right: 18px;
`;

export { Popup, Header, Title, Close };
