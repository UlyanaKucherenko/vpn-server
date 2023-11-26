import PropTypes from 'prop-types';

import { Wrap } from './styled';

RListIsEmpty.propTypes = {
  children: PropTypes.node,
};

export function RListIsEmpty({ children }) {
  return <Wrap>{children || 'List is empty'}</Wrap>;
}
