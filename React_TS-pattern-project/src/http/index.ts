import axios from 'axios';

//import RefreshResponce from '../models/response/RefreshResponce';
export const API_URL = ' http://localhost:7000';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  config => config,
  async error => {
    const originRequest = error.config;

    if (error.response.status === 401 && !originRequest._isRetry) {
      originRequest._isRetry = true;
      try {
        const response = await api.post(`/refresh`);
        localStorage.setItem('token', response.data.accessToken);
        return api.request(originRequest);
      } catch (error) {}
    }
    throw error;
  }
);
export default api;
