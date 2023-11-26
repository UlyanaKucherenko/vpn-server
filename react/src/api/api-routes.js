export const WEB_API_ROUTES = {
  auth: {
    login: '/login',
    logout: '/logout',
  },
  plans: {
    plans: '/plan',
    plansById: '/plan/{planId}',
  },
  users: {
    users: '/user',
    plansForUsers: '/plan-for-user',
  },
  servers: {
    servers: '/server',
    serversById: '/server/{serverId}',
    countries: '/countries',
  },
};
