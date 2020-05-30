<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span>Portal</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          ></v-img></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'layout',
  props: {
    source: String,
  },
  data() {
    return {
      drawer: null,
      menus: [
        { icon: 'mdi-home', text: 'Home', key: 'home' },
        { icon: 'mdi-message', text: 'Send feedback', key: 'home' },
        { icon: 'mdi-information  ', text: 'About us', key: 'about' },
        { icon: 'mdi-help-circle', text: 'Help', key: 'home' },
      ],
    };
  },
  methods: {
    onRouter(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
