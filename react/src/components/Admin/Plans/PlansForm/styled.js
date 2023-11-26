import styled from 'styled-components';

const Main = styled.div`
  margin-top: 32px;
`;
const Form = styled.form`
  max-width: 414px;
  position: relative;
`;
const WrapSwitch = styled.div`
  margin-top: 32px;
  margin-left: 10px;
`;
const LabelSwitch = styled.div`
  margin-bottom: 16px;
  font-size: ${({ focus }) => (focus ? '12px' : '14px')};
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.field.labelColor};
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 75px;
`;

export { Main, Form, WrapSwitch, LabelSwitch, ButtonsContainer };
