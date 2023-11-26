import { css } from 'styled-components';
import styled from 'styled-components';

const Tabs = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 115px;
  border-bottom: 1px solid #e0e0e0;
  padding: 7px 11px;
  cursor: pointer;
`;

const TabTitle = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: #989898;

  &:after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -8px;
    left: 50%;
    background-color: #919191;
    transform: translateX(-50%);
    transition: 0.15s linear;
  }

  ${({ active }) =>
    active &&
    css`
      font-weight: 500;

      &:after {
        width: calc(100% + 22px);
      }
    `}
`;

export { Tabs, Tab, TabTitle };
