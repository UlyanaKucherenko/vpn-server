import styled from 'styled-components';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ css }) => css}
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 78px;
  padding: 16px;
  border-bottom: 1px solid ${(props) => props.theme.field.borderColor};
`;

const Title = styled.div`
  display: flex;
  gap: 6px;
  font-weight: 600;
  line-height: 1.5;
  font-size: ${(props) => props.theme.title.sizeSm};
`;

export { Main, Wrap, Header, Title };
