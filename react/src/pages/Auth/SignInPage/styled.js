import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 60px;
  background-color: transparent;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto 0;
`;

const LogoContainer = styled.div`
  margin-block: 0 120px;
`;

export { Form, LogoContainer, ButtonContainer };
