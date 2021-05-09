<template>
  <div class="emits-option">
    <EmitsComp @submit="onSubmit" />
  </div>
</template>

<script>
import EmitsComp from '@/components/EmitsComp.vue';

export default {
  name: 'EmitsOption',
  components: { EmitsComp },
  methods: {
    onSubmit(e) {
      console.log(e);
    },
  },
};
</script>

<style>

</style>
