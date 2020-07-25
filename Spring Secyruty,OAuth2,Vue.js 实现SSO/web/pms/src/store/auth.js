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
      window.sessionStorage.setItem('token', payload.token);

      state.user = payload.user;
    }
  },
  actions: {
    auth({state, commit, dispatch}) {
      const token = (window.location.search.split('=')[1] && decodeURIComponent(window.location.search.split('=')[1])) || window.sessionStorage.getItem('token');
      const p = token ? Promise.resolve({
        data: {
          user: {
            name: 'Admin'
          },
          token
        }
      }) : Promise.reject(new Error('Error Token'));
      p.then((res) => {
        commit('setAuth', res.data);
      });
      return p;
    },
  },
  getters: {
  }
};
