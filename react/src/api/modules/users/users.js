import { WEB_API_ROUTES } from 'api/api-routes';
import http from 'api/http';

export const users = {
  getUsers(params) {
    return http.get(WEB_API_ROUTES.users.users, { params });
  },
  getPlans() {
    return http.get(WEB_API_ROUTES.users.plansForUsers);
  },
};
