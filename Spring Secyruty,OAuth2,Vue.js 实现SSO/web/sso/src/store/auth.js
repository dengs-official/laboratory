import router from '../router/index.js';
import apis from '../apis/index.js';
const jsonp = require('jsonp');

export default {
  state: {
    login: false,
    user: {
      name: ''
    }
  },
  mutations: {
    setAuth(state, payload) {
      document.cookie = `token=${payload.access_token};`;

      const url = window.location.search.split('=')[1] && decodeURIComponent(window.location.search.split('=')[1]);
      if (url) {
        window.location.href = `${url}?token=${payload.access_token}`;
        jsonp(`${url}?token=${payload.access_token}`, null, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      } else {
        state.login = true;
        state.user = payload.user;
        router.push({name: 'index'});
      }
    },
    setOut(state, payload) {
      state.login = false;
      state.user = {
        name: ''
      };
      router.push({path: '/login'});
    }
  },
  actions: {
    auth({commit, dispatch}) {
      const token = document.cookie.split(';').filter((item) => (item.includes('token')))[0];
      const p = apis.checkToken({accessToken: token ? token.split('=')[1] : 'undefined'});

      p.then((res) => {
        commit('setAuth', {access_token: token.split('=')[1]});
      });
      return p;
    },
    logout({commit, dispatch}) {
      const token = document.cookie.split(';').filter((item) => (item.includes('token')))[0];
      const p = apis.logout({accessToken: token ? token.split('=')[1] : 'undefined'});
      p.then((res) => {
        commit('setOut');
      });
      return p;
    },
    login({commit, dispatch}, payload) {
      const {username, password} = payload;
      const p = apis.login({username, password});
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
