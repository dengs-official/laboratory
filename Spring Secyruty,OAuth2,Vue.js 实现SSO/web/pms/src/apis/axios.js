import axios from 'axios';
import {message} from 'ant-design-vue';
import {ck, du} from '@/utils/index.js';
import store from '@/store/index.js';
import CONFIG from '@/configs/index.js';

// global defaultSettings
axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? '/apis' : '') + process.env.VUE_APP_API_BASE_URL; // 开发环境中加上/api方便devServer进行代理
axios.defaults.timeout = process.env.NODE_ENV === 'development' ? 1000 * 10 * 4 : 1000 * 60 * 10;
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';

// interceptors
axios.interceptors.request.use((config) => {
  if (config.auth !== false && ck.get('accessToken')) {
    config.headers.Authorization = `Bearer${ck.get('accessToken')}`;
  }
  const accessTokenExp = store.state.auth.token.accessTokenExp;
  if (config.auth !== false && accessTokenExp && accessTokenExp - du.getTimestamp() < CONFIG.auth.refreshTokenTime) {
    store.dispatch('refresh');
  }
  return config;
}, onError);

axios.interceptors.response.use((response) => {
  const {status, data} = response;
  if (status === 200) {
    if (!data) {
      return Promise.reject(data);
    }
    if (data.success === false) {
      switch (data.code) {
        case 200:
          // 成功无需提示
          break;
        case -1:
          // 生产环境用于调试错误
          console.error(data);
          break;
        default:
          message.error('失败');
          break;
      }
      return Promise.reject(data);
    }
    return data;
  }
  return data;
}, onError);

// handle errors
function onError(error) {
  const {response, message: msg} = error;
  if (response) {
    const {status} = response;
    switch (status) {
      case 401:
      case 403:
        window.location.href = `${CONFIG.auth.portalUrl}?url=${CONFIG.auth.clientUrl}&api=${CONFIG.auth.clientApi}`;
        message.error('Forbidden');
        break;
      default: break;
    }
  } else {
    /* eslint-disable-next-line */
    console.error(msg);

    if (~msg.indexOf('timeout')) {
      message.error('Timeout');
    }
  }

  return Promise.reject(error);
}
export default axios;
