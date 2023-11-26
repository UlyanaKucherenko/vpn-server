import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.sizeMd};
`;

const BLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #0969da;
  font-size: 16px;

  &:last-child {
    color: #57606a;
    font-weight: 500;

    & > svg {
      display: none;
    }
  }
`;

export { Breadcrumbs, BLink };
