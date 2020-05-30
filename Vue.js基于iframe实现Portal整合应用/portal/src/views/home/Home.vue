<template>
  <v-container fluid>
    <v-row class="apps-wrapper">
      <v-col v-for="item in apps" :key="item.name" class="apps-item">
        <v-card hover align="center" class="apps-card" @click="onAppClick(item)">
          <v-icon x-large color="red dark-2" class="apps-icon">{{item.icon}}</v-icon>
          <h3>{{item.name}}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      apps: this.$apps,
    };
  },
  methods: {
    onAppClick(app) {
      this.$router.push({
        name: 'client',
        params: {
          path: app.url,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apps-wrapper {
  padding: 100px;
  .apps-item {
    flex-grow: 0;
    .apps-card {
      width: 100px;
      height: 100px;
      .apps-icon {
        font-size: 80px !important;
      }
      h3 {
        margin-top: -8px;
      }
    }
  }
}
</style>
