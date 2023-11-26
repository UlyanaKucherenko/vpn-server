import styled from 'styled-components';

const CheckboxWrap = styled.div`
  display: inline-flex;
`;

const CheckboxLabel = styled.label`
  display: block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  cursor: pointer;
`;

export { CheckboxWrap, CheckboxLabel };
