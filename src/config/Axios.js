import axios from 'axios';

import {getToken} from '../../../cbic/src/services/auth';

const api = axios.create({
  baseURL: 'http://localhost:3131',
  // baseURL: 'http://1net.net.br:3331',
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  //   console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
