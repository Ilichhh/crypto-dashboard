import axios from 'axios';
import qs from 'qs';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true }),
});
