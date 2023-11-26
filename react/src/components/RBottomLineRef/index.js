import PropTypes from 'prop-types';

import { Line } from './styled';

RBottomLineRef.propTypes = {
  parentRef: PropTypes.object,
};

export function RBottomLineRef({ parentRef }) {
  return <Line ref={parentRef} />;
}
