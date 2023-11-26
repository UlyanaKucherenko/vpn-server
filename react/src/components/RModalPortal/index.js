import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

RModalPortal.propTypes = {
  children: PropTypes.node,
};

function RModalPortal({ children }) {
  return createPortal(children, document.getElementById('modal-portal'));
}

export { RModalPortal };
