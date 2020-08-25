import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';

import Layout from '../views/layout/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: {name: 'home'},
    children: [{
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
    }],
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    meta: {
      login: false
    }
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.login !== false && !store.state.auth.login) { // 需要登录
    next({name: 'login', query: {url: window.location.search.split('=')[1]}});
  } else if (to.name === 'login' && store.state.auth.login) {
    next({name: 'index'});
  } else {
    next();
  }
});

export default router;
