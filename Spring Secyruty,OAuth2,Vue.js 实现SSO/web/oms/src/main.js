import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/index.js';

Vue.config.productionTip = false;

store.dispatch(('auth')).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}).catch(() => {
  console.log('Error');
  window.location.href = 'http://172.18.2.15:26180/portal/sso/index.html#/login?url=http://172.18.2.15:26180/portal/client/oms/index.html';
});
