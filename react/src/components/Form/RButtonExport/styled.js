import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  padding: 2px 12px;
  background-color: #f2f2f2;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    color: #ffffff;
    background-color: #a5a5a5;

    svg path {
      stroke: #ffffff;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  margin-right: 4px;
`;

export { Label, Icon };
