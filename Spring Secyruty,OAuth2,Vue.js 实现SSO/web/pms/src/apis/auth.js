const baseURL = process.env.VUE_APP_API_AUTH;

export default {
  login: {
    url: '/login',
    baseURL,
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
