import PropTypes from 'prop-types';

import { Box } from './styled';

RBox.propTypes = {
  children: PropTypes.node,
};

export function RBox({ children }) {
  return <Box>{children}</Box>;
}
