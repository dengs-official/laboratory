import router from '../router/index.js';
import apis from '../apis/index.js';
import {ck} from '../utils/index.js';
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
      // jsonp(`http://172.18.2.6:8100/app/oauth2/setCookie?accessToken=${ck.get('accessToken')}&refreshToken=${ck.get('refreshToken')}`, null, (err, data) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log(data);
      //   }
      // });
      const url = window.location.search.split('=')[1] && decodeURIComponent(window.location.search.split('=')[1]);
      if (url) {
        window.location.href = url;
        jsonp(`http://172.18.2.6:8100/app/setToken?accessToken=${payload.access_token}`, null, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
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
