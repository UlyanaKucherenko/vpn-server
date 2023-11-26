import { WEB_API_ROUTES } from 'api/api-routes';
import http from 'api/http';

export const servers = {
  getServers(params) {
    return http.get(WEB_API_ROUTES.servers.servers, { params });
  },

  getCountries() {
    return http.get(WEB_API_ROUTES.servers.countries);
  },

  addServer(formData) {
    return http.post(WEB_API_ROUTES.servers.servers, formData);
  },

  deleteServer(serverId) {
    return http.delete(
      WEB_API_ROUTES.servers.serversById.replace('{serverId}', serverId)
    );
  },

  editServer({ formData, serverId }) {
    return http.put(
      WEB_API_ROUTES.servers.serversById.replace('{serverId}', serverId),
      formData
    );
  },
  changeStatusServer({ serverId, isActive }) {
    return http.put(
      WEB_API_ROUTES.servers.serversById.replace('{serverId}', serverId),
      isActive
    );
  },
};
