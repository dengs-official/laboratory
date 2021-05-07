<template>
  <div ref="root">This is a root element </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  name: 'CAPIRefTemp',
  setup() {
    const root = ref(null);
    watchEffect(() => {
      // console.log(root);
    }, { flush: 'post' });

    const count = ref(0);
    return {
      root,
      count,
    };
  },
  mounted() {
    console.log(this.$refs.root === this.root);
    console.log(this.count);
    console.log(this);
  },
};
</script>

<style>

</style>
