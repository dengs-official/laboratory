import router from '../router/index.js';
import apis from '../apis/index.js';
import {ck, uk} from '../utils/index.js';
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
      const url = uk.get('url');
      if (url) {
        window.location.href = url;
      } else {
        state.login = true;
        router.push({name: 'index'});
      }
    },
    setOut(state, payload) {
      state.login = false;
      state.user = {
        name: ''
      };
      router.push({path: '/login'});
    },
    setCookie(state, payload) {
      ck.set('accessToken', payload.accessToken);
      ck.set('refreshToken', payload.refreshToken);
      const api = uk.get('api');
      if (api) {
        jsonp(`${api}?accessToken=${ck.get('accessToken')}&refreshToken=${ck.get('refreshToken')}`, null, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    },
  },
  actions: {
    async auth({commit, dispatch}) {
      const p = await apis.checkToken();
      commit('setAuth');
      return p;
    },
    logout({commit, dispatch}) {
      const p = apis.logout();
      p.then((res) => {
        commit('setOut');
      });
      return p;
    },
    login({commit, dispatch}, payload) {
      const {username, password} = payload;
      const p = apis.login({username, password});
      p.then((res) => {
        commit('setCookie', {accessToken: res.data.access_token, refreshToken: res.data.refresh_token});
        commit('setAuth', res.data);
      }).catch((e) => {
        console.log(e);
      });
    },
    refresh({commit, dispatch}) {
      const p = apis.refresh({refreshToken: ck.get('refreshToken')});
      p.then((res) => {
        commit('setCookie', {accessToken: res.data.access_token, refreshToken: res.data.refresh_token});
      }).catch((e) => {
        console.log(e);
      });
    }
  },
  getters: {
  }
};
