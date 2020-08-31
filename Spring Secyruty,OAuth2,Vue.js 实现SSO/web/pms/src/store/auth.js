import apis from '../apis/index.js';
import {ck, du} from '../utils/index.js';
import CONFIG from '../configs/index.js';
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
    },
    setCookie(state, payload) {
      payload.accessToken && ck.set('accessToken', payload.accessToken);
      payload.refreshToken && ck.set('refreshToken', payload.refreshToken);

      // 中token到portal
      jsonp(
        `${CONFIG.auth.portalApi}/oauth2/setCookie?accessToken=${ck.get('accessToken')}&refreshToken=${ck.get('refreshToken')}`,
        null,
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        }
      );
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
    async refresh({commit, dispatch}) {
      const p = await apis.refreshToken({refreshToken: ck.get('refreshToken')});
      commit('setCookie', {accessToken: p.data.access_token, refreshToken: p.data.refresh_token});
      commit('setToken', {accessTokenExp: du.getTimestamp(null, p.data.expires_in)});
    }
  },
  getters: {
  }
};
