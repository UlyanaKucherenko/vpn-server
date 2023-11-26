import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import SignInPage from 'pages/Auth/SignInPage';
import NotFoundPage from 'pages/General/NotFound';
import { useSelector } from 'react-redux';
import { auth } from 'store/auth';
import { Layout } from './styled';

function AuthLayout() {
  return (
    <RoleChecker>
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            component={SignInPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </RoleChecker>
  );
}

RoleChecker.propTypes = {
  children: PropTypes.node,
};

function RoleChecker({ children }) {
  const token = useSelector(auth.selectors.token);

  if (token) return <Redirect to="/admin/plans" />;
  return children;
}

export default AuthLayout;
