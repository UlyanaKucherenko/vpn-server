import styled from 'styled-components';
import { css } from 'styled-components';

import { ScrollBarHidden } from 'components/App/GlobalStyled';

const Tabs = styled.div`
  ${ScrollBarHidden};
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 4px;
  padding: 15px 0;
  margin: 0;
`;

const Tab = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid;
  border-radius: 5px;
  padding: 1px 6px;
  cursor: pointer;
  color: ${(props) => props.theme.statusChips.color};
  transition: 0.3s ease-in-out;

  ${({ active, theme }) =>
    active
      ? css`
          border-color: ${theme.statusChips.borderActive};
          background-color: ${theme.statusChips.backgroundActive};
        `
      : css`
          border-color: ${theme.statusChips.borderDefault};
          background-color: ${theme.statusChips.backgroundDefault};

          &:hover {
            background-color: ${theme.statusChips.hover};
          }
        `}
`;

export { Tabs, Tab };
