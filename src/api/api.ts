import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

// Headers
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.Accept = 'application/json';

instance.interceptors.request.use(async config => {
  const accessToken = localStorage.getItem(process.env.REACT_APP_AUTH0_TOKEN || '')
  const requestConfig = config;
  if (accessToken) {
    requestConfig.headers.common.Authorization = `Bearer ${accessToken}`;
  } 
  return requestConfig;
})

export default instance;
