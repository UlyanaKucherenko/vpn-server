import { css } from 'styled-components';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: ${({ amountCols }) => `repeat(${amountCols}, 1fr)`};
  grid-column-gap: 4px;
  justify-content: space-between;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 85px;
  font-style: italic;
  font-size: 48px;
  line-height: 145%;
  text-align: center;
  padding: 0 8px;
  letter-spacing: 10px;
  color: rgba(0, 0, 0, 0.75);
  border: 1px solid #ebebeb;
  border-bottom: 4px solid #ebebeb;
  border-radius: 3px;
  ${({ error }) =>
    error &&
    css`
      border-color: #dd6c6c;
    `}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
  }
`;

export { Wrap, Input };
