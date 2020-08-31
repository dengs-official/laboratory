import router from '../router/index.js';
import apis from '../apis/index.js';
import {ck, uk, du} from '../utils/index.js';
const jsonp = require('jsonp');

export default {
  state: {
    login: false,
    token: {
      accessToken: null,
      refreshToken: null,
      accessTokenExp: 0
    },
    user: {
      name: ''
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.login = true;

      const url = uk.get('url');
      if (url) {
        const api = uk.get('api');
        if (api) {
          jsonp(
            `${api}/oauth2/setCookie?accessToken=${ck.get('accessToken')}&refreshToken=${ck.get('refreshToken')}`,
            null,
            (err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
              }
            }
          );
        }
        window.location.href = url;
      } else {
        router.push({name: 'index'});
      }
    },
    setOut(state, payload) {
      state.login = false;
      state.token.accessTokenExp = 0;
      state.user = {
        name: ''
      };
      router.push({path: '/login'});
    },
    setCookie(state, payload) {
      payload.accessToken && ck.set('accessToken', payload.accessToken);
      payload.refreshToken && ck.set('refreshToken', payload.refreshToken);
    },
    setToken(state, payload) {
      state.token.accessTokenExp = payload.accessTokenExp;
    }
  },
  actions: {
    async auth({commit, dispatch}) {
      const p = await apis.checkToken();
      commit('setToken', {accessTokenExp: Number(p.data.exp)});
      commit('setAuth');
      return p;
    },
    async logout({commit, dispatch}) {
      const p = await apis.logout();
      commit('setOut');
      return p;
    },
    async login({commit, dispatch}, payload) {
      const {username, password} = payload;
      const p = await apis.login({username, password});
      commit('setCookie', {accessToken: p.data.access_token, refreshToken: p.data.refresh_token});
      commit('setToken', {accessTokenExp: du.getTimestamp(null, p.data.expires_in)});
      commit('setAuth');
      return p;
    },
    async refresh({commit, dispatch}) {
      const p = await apis.refreshToken({refreshToken: ck.get('refreshToken')});
      commit('setCookie', {accessToken: p.data.access_token, refreshToken: p.data.refresh_token});
      commit('setToken', {accessTokenExp: du.getTimestamp(null, p.data.expires_in)});
    }
  },
  getters: {
  }
};
