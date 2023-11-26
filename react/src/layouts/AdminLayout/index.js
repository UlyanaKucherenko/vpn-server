import PropTypes from 'prop-types';
import { createContext, useMemo, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoute from 'middleware/ProtectedRoute';
import NotFoundPage from 'pages/General/NotFound';
import { PlansPage } from 'pages/Admin/PlansPage';
import { UsersPage } from 'pages/Admin/UsersPage';
import { ServersPage } from 'pages/Admin/ServersPage';
import { RLoadingOverlay } from 'components/RLoadingOverlay';
import { AppIsCrashed } from 'components/AppIsCrashed';
import { CreatePlan } from 'components/Admin/Plans/CreatePlan';
import { EditPlan } from 'components/Admin/Plans/EditPlan';
import { UserDetails } from 'components/Admin/Users/UserDetails';
import { CreateServer } from 'components/Admin/Servers/CreateServer';
import { EditServer } from 'components/Admin/Servers/EditServer';
import { auth } from 'store/auth';
import { status } from 'utils/const';
import { RSidebar } from './RSidebar';
import { Layout, Main } from './styled';

export const UserLayoutContext = createContext({});

function AdminLayout() {
  const loginStatus = useSelector(auth.selectors.loginStatus);
  const mainRef = useRef();

  const contextValue = useMemo(() => ({ mainRef }), [mainRef]);

  const isAppReady = loginStatus === status.SUCCESS;

  const isAppFail = loginStatus === status.FAIL;

  return (
    <ProtectedRoute>
      <RoleChecker>
        {/* eslint-disable-next-line no-nested-ternary */}
        {isAppReady ? (
          <Layout>
            <UserLayoutContext.Provider value={contextValue}>
              <RSidebar />
              <Main ref={mainRef}>
                <Switch>
                  <Route
                    exact
                    path="/admin/plans"
                    component={PlansPage}
                  />
                  <Route
                    exact
                    path="/admin/plans/create-plan"
                    component={CreatePlan}
                  />
                  <Route
                    exact
                    path="/admin/plans/:id"
                    component={EditPlan}
                  />
                  <Route
                    exact
                    path="/admin/users"
                    component={UsersPage}
                  />
                  <Route
                    exact
                    path="/admin/users/:id"
                    component={UserDetails}
                  />
                  <Route
                    exact
                    path="/admin/servers"
                    component={ServersPage}
                  />
                  <Route
                    exact
                    path="/admin/servers/create-server"
                    component={CreateServer}
                  />
                  <Route
                    exact
                    path="/admin/servers/:id"
                    component={EditServer}
                  />
                  <Route component={NotFoundPage} />
                </Switch>
              </Main>
            </UserLayoutContext.Provider>
          </Layout>
        ) : !isAppFail ? (
          <RLoadingOverlay isVisible />
        ) : (
          <AppIsCrashed />
        )}
      </RoleChecker>
    </ProtectedRoute>
  );
}
RoleChecker.propTypes = {
  children: PropTypes.node,
};

function RoleChecker({ children }) {
  const token = useSelector(auth.selectors.token);
  if (!token) return <Redirect to="/" />;
  return children;
}

export default AdminLayout;
