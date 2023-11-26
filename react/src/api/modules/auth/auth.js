import { WEB_API_ROUTES } from 'api/api-routes';
import http from '../../http';

export const auth = {
  login(formData) {
    return http.post(WEB_API_ROUTES.auth.login, formData);
  },
  logout() {
    return http.post(WEB_API_ROUTES.auth.logout);
  },
};
