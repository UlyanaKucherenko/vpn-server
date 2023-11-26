import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Number = styled.div`
  font-size: 40px;
  font-style: italic;
  margin-bottom: 16px;
`;

const Text = styled.div`
  font-size: 30px;
  font-style: italic;
`;

export { Wrap, Number, Text };
