const baseURL = '/portal/oauth2';

export default {
  login: {
    url: '/login',
    baseURL,
    method: 'post'
  },
  logout: {
    url: '/logout',
    baseURL,
    method: 'delete'
  },
  checkToken: {
    url: '/checkToken',
    baseURL,
  },
  refreshToken: {
    url: '/refreshToken',
    baseURL,
    method: 'post'
  }
};
