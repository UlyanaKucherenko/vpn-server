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
  background-color: ${({ theme }) => theme.popup.bg};
  border-radius: 8px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.popup.border};
    border: 1px solid ${({ theme }) => theme.popup.border};
    border-radius: 8px;
    position: absolute;
    top: 6px;
    right: -6px;
    z-index: -1;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 28px;
  right: 24px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 50px;
  gap: 10px;
`;

const Title = styled.strong`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.popup.title};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.popup.text};
`;

const Footer = styled.div`
  display: flex;
  padding-block: 8px;
  justify-content: center;
`;

export { Popup, Close, Body, Title, Text, Footer };
