import styled from 'styled-components/macro';

import { RootFieldIcons, RootFieldInput } from '../_shared/styled';

const FieldInput = styled(RootFieldInput)`
  position: relative;
  text-align: center;
  overflow-x: hidden;
  padding-inline: 30px;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -moz-appearance: textfield;
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Incrementer = styled.button`
  right: 0;
`;
const Decrementer = styled.button`
  left: 0;
`;

const FieldIcons = styled(RootFieldIcons)`
  right: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${Incrementer}, ${Decrementer} {
    display: inline-block;
    position: absolute;
    padding-inline: 3px;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 24px;
    color: #606060;
    z-index: 9;
  }
`;

export { FieldInput, FieldIcons, Incrementer, Decrementer, InputContainer };
