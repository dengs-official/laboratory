const baseURL = process.env.VUE_APP_API_AUTH;

export default {
  login: {
    url: '/login',
    baseURL,
    method: 'post',
    auth: false,
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
    method: 'post',
    auth: false,
  }
};
