import { Route, Switch } from 'react-router-dom';

import AuthLayout from 'layouts/AuthLayout';
import AdminLayout from 'layouts/AdminLayout';
import NotFoundPage from 'pages/General/NotFound';

function App() {
  return (
    <Switch>
      <Route
        path="/admin"
        component={AdminLayout}
      />
      <Route
        path="/"
        component={AuthLayout}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
