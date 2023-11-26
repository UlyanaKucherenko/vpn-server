import styled from 'styled-components';

const Wrap = styled.p`
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.table.hover};
  }
`;

export { Wrap };
