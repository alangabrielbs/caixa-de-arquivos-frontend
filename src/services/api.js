import axios from 'axios';

import { getTokenLocalStorage } from '../utils/localStorage';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

api.interceptors.request.use(async (config) => {
  const token = getTokenLocalStorage();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
