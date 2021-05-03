<template>
  <div class="home-wrapper">
    <a-button style="width: 100%;" @click="onRefresh">续签</a-button>
  </div>
</template>

<script>
import apis from '@/apis/index.js';

export default {
  name: 'home',
  methods: {
    onRefresh() {
      apis.test();
    }
  }
};
</script>

<style lang="less" scoped>

</style>
