import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/index.js';
import CONFIG from './configs/index.js';

Vue.config.productionTip = false;

store.dispatch(('auth')).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}).catch(() => {
  window.location.href = `${CONFIG.auth.portalUrl}?url=${CONFIG.auth.clientUrl}&api=${CONFIG.auth.clientApi}`;
  console.log('Error');
});
