import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { auth } from 'store/auth';

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

function ProtectedRoute({ children }) {
  const token = useSelector(auth.selectors.token);

  if (!token) return <Redirect to="/" />;
  return children;
}

export default ProtectedRoute;
