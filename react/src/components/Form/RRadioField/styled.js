import styled from 'styled-components';

const RadioWrap = styled.div`
  display: inline-flex;
  align-items: center;
  ${({ css }) => css};
`;

const RadioLabel = styled.label`
  display: block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  cursor: pointer;
`;

const RadioLabelText = styled.span`
  width: 100%;
  font-size: ${(props) => props.theme.font.sizeMd};
  color: #474747;
`;

export { RadioWrap, RadioLabel, RadioLabelText };
