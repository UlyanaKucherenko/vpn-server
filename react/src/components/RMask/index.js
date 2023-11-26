import PropTypes from 'prop-types';

import { Mask } from './styled';

RMask.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

function RMask({ color = 'rgba(0, 0, 0, 0.4)', onClick = () => {}, children }) {
  return (
    <Mask
      color={color}
      onClick={onClick}
    >
      {children}
    </Mask>
  );
}

export { RMask };
