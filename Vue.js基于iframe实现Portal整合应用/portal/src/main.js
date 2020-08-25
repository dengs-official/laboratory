import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import './styles/index.scss';

Vue.config.productionTip = false;

function getApps() {
  return new Promise((resolve) => {
    axios.get(`${process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : ''}/menus.json`).then((result) => {
      Vue.prototype.$apps = result.data;
      resolve();
    });
  });
}

async function main() {
  await getApps();
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
}

main();
