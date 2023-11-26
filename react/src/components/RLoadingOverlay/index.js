import PropTypes from 'prop-types';

import { Overlay, Loader } from './styled';

RLoadingOverlay.propTypes = {
  isVisible: PropTypes.bool,
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

export function RLoadingOverlay({
  isVisible,
  bgColor = 'rgba(255, 255, 255, 0.7)',
  children,
}) {
  return (
    <Overlay
      isVisible={isVisible}
      bgColor={bgColor}
    >
      {children || <Loader>Loading...</Loader>}
    </Overlay>
  );
}
