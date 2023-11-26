import styled from 'styled-components';

const Alert = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 12px 8px 8px;
  background-color: #eeeff2;
  border-radius: 3px;

  & > svg {
    flex-shrink: 0;
  }
`;

const Text = styled.div`
  margin-left: 6px;
`;

export { Alert, Text };
