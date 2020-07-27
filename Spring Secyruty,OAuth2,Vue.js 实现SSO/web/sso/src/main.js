import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/index.js';

Vue.config.productionTip = false;

store.dispatch(('auth'))
  .then(() => {

  })
  .finally(() => {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  });

// store.dispatch(('auth')).then(() => {
//   new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount('#app');
// }).catch(() => {
//   console.log('Error');
// });
