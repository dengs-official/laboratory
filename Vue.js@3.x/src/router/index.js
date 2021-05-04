import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const viewCTX = require.context('@/views/', true, /.+\.(vue|js|jsx)$/);

export const viewRoutes = viewCTX.keys()
  .map((item, index) => {
    const name = item.substr(2).split('.')[0];
    return {
      path: `/${index ? name : ''}`,
      name,
      component: viewCTX(item).default,
      props: true,
    };
  });
const routes = [
  ...viewRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
