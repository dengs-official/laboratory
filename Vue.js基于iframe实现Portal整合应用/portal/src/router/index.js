import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/layout/Layout.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'index',
  component: Layout,
  redirect: { name: 'home' },
  children: [{
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
  }, {
    path: '/client/:path',
    name: 'client',
    props: true,
    component: () => import(/* webpackChunkName: "client" */ '@/views/client/Client.vue'),
  }],
}];

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
  routes,
});

export default router;
