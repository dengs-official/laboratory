<template>
  <v-container fluid class="client-wrapper">
     <iframe :src="`/client/${path}`"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'client',
  props: {
    path: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.client-wrapper {
  padding: 0;
  height: 100%;
  iframe {
    border: none;
    height: 100%;
    width: 100%;
  }
}
</style>
