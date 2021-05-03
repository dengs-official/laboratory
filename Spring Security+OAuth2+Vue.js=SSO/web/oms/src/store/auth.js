import apis from '../apis/index.js';

export default {
  state: {
    auth: {
      login: false,
      token: null
    },
    user: {
      name: ''
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.auth.login = true;
      state.auth.token = payload.token;
      document.cookie = `token=${payload.access_token};path=/`;

      state.user = payload.user;
    }
  },
  actions: {
    async auth({commit, dispatch}) {
      const token = (window.location.search && decodeURIComponent(window.location.search)) || document.cookie.split(';').filter((item) => (item.includes('token')))[0];
      const p = await apis.checkToken({accessToken: token ? token.split('=')[1] : 'undefined'});
      commit('setAuth', {access_token: token.split('=')[1]});
      return p;
    },
  },
  getters: {
  }
};
