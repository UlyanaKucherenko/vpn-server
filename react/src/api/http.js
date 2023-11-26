import axios from 'axios';
import storage from 'redux-persist/lib/storage';

import store from 'store';
import { WEB_API_ROUTES } from './api-routes';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
  baseTimeout: 10000,
});

instance.interceptors.request.use((config) => {
  const { auth } = store.getState();
  if (auth.token) config.headers.Authorization = `Bearer ${auth.token}`;
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    const { status } = err.response;
    const authRoutes = originalConfig.url !== WEB_API_ROUTES.auth.login;
    if (authRoutes && status === 401) {
      storage.removeItem('persist:harbor');
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default instance;
