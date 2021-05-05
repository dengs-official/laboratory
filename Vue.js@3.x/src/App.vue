<template>
  <a-layout class="layout-wrapper">
    <a-layout-sider>
      <a-menu :selectedKeys="selectedKeys" @click="onMenuClick">
        <a-menu-item v-for="menu in menus" :key="menu.name">
          <span>{{menu.name}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { viewRoutes } from '@/router/';

export default {
  data() {
    return {
      menus: viewRoutes,
      selectedKeys: [],
    };
  },
  watch: {
    $route: {
      handler(to) {
        this.selectedKeys = [to.name];
      },
      immediate: true,
    },
  },
  methods: {
    onMenuClick({ key }) {
      if (key === this.selectedKeys[0]) {
        return;
      }
      this.$router.push({ name: key });
    },
  },
};
</script>

<style lang="less">
#app {
  height: 100%;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.layout-wrapper {
  height: 100%;
  .ant-layout-content {
    padding: 8px;
  }
}

</style>
