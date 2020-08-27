import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/index.js';
import {portalUrl, clientUrl, apiUrl} from './configs/auth.js';

Vue.config.productionTip = false;

store.dispatch(('auth')).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}).catch(() => {
  window.location.href = `${portalUrl}?url=${clientUrl}&api=${apiUrl}`;
  console.log('Error');
});
