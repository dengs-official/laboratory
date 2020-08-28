import auth from './auth.js';

export default {
  name: 'pms', // 重要：必须为不同项目取不同的名字，避免各种缓存覆盖的问题
  version: '1.0.0',
  auth
};
