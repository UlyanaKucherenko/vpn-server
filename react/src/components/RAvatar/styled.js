import styled from 'styled-components';

const Main = styled.div``;

const Wrap = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  position: relative;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #808080;
  border-radius: 50%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: ${({ size }) => `${size / 2}px`};
  color: #808080;
  font-weight: 500;
  text-transform: uppercase;
`;

export { Main, Wrap, Image, Name };
