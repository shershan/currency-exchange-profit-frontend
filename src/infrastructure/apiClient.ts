import axios from 'axios';
import { TokenService } from './tokenService';

export const apiClient = () => {
  var axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { Authorization: `Bearer ${TokenService.getAccessToken()}` }
  });

  axiosInstance.interceptors.response.use(
    resp => resp,
    error => {
      if (error != null && error.response != null && error.response.status === 401) {
        localStorage.clear();
        window.location.replace('/');
      }

      return Promise.reject(error);
    });
  return axiosInstance;
}