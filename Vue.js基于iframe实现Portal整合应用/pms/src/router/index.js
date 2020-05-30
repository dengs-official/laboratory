import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'index',
  redirect: { name: 'home' },
}, {
  path: '/home',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
}, {
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "home" */ '@/views/about/About.vue'),
}];

const router = new VueRouter({
  routes,
});

export default router;
