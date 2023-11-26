import { css } from 'styled-components';
import styled from 'styled-components';

import { device } from 'utils/device';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 40px;
  ${(props) => props.css}
`;

const Step = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 133px;
  flex-grow: 1;
  border-bottom: 1px solid #e0e0e0;
  padding: 7px 11px;
`;

const StepTitle = styled.div`
  position: relative;
  text-align: center;
  font-size: ${(props) => props.theme.font.sizeMd};
  font-weight: 400;
  line-height: 12px;
  flex-grow: 1;
  color: var(--base-font-color);

  &:after {
    content: '';
    width: 0;
    height: 3px;
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
      color: #6083ff;

      &:after {
        width: calc(100% + 22px);
        background-color: #6083ff;
      }
    `}

  ${({ completed }) =>
    completed &&
    css`
      font-weight: 500;
      color: #48e18f;

      &:after {
        width: calc(100% + 22px);
        background-color: #48e18f;
      }
    `}
`;

const Icon = styled.div`
  position: absolute;
  right: 20%;
  @media (${device.xl}) {
    right: 10%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-block: 40px;
`;

const Provider = styled.div``;

export { Main, Steps, Step, StepTitle, Icon, ButtonContainer, Provider };
