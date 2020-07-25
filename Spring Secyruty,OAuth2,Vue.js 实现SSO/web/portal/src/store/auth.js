import router from '../router/index.js';

export default {
  state: {
    login: false,
    user: {
      name: ''
    }
  },
  mutations: {
    setAuth(state, payload) {
      window.sessionStorage.setItem('token', payload.token);

      const url = window.location.search.split('=')[1] && decodeURIComponent(window.location.search.split('=')[1]);
      console.log(url);
      if (url) {
        window.location.href = `${url}?token=${payload.token}`;
      } else {
        state.login = true;
        state.user = payload.user;
        router.push({path: '/'});
      }
    }
  },
  actions: {
    auth({commit, dispatch}) {
      const token = window.sessionStorage.getItem('token');
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
    },
    login({commit, dispatch}, payload) {
      const {username, password} = payload;
      const p = password === '123' ? Promise.resolve({
        data: {
          user: {
            name: username
          },
          token: 'JSSIONID=12368313dsf'
        }
      }) : Promise.reject(new Error('Error Password'));
      p.then((res) => {
        commit('setAuth', res.data);
      }).catch((e) => {
        console.log(e);
      });
    }
  },
  getters: {
  }
};
