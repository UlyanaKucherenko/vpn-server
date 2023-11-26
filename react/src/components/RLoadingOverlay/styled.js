import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  z-index: 100;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease;
`;

const Loader = styled.div`
  color: #2f80ed;
  margin: auto;
  font-size: 20px;
  font-style: italic;
`;

export { Overlay, Loader };
