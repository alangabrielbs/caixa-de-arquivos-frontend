import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

// Codigo para adicionar o token jwt a todas request
// api.interceptors.request.use(async config => {
//   const token = // adicionar aqui o token jwt;
//   if (token) {
//     // eslint-disable-next-line no-param-reassign
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
