import apis from '../apis/index.js';

export default {
  state: {
    login: false,
    user: {
      name: ''
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.login = true;
    }
  },
  actions: {
    async auth({commit, dispatch}) {
      const p = await apis.checkToken();
      commit('setAuth');
      return p;
    },
  },
  getters: {
  }
};
