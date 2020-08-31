import CONFIG from '@/configs/index.js';

const baseURL = CONFIG.auth.portalApi;

export default {
  login: {
    url: '/oauth2/login',
    baseURL,
    method: 'post',
    auth: false
  },
  logout: {
    url: '/oauth2/logout',
    baseURL,
    method: 'delete'
  },
  checkToken: {
    url: '/oauth2/checkToken',
    baseURL,
  },
  refreshToken: {
    url: '/oauth2/refreshToken',
    baseURL,
    method: 'post',
    auth: false,
  }
};
