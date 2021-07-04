<template>
  <div class="composition-api">
    <div class="user-info">
      <a-input-search
        v-model:value="user"
        enter-button
        placeholder="输入用户信息"
        @search="onSearch"
        />
    </div>
    <UserRepositories
      class="user-list"
      :user="user"
    />
  </div>
</template>

<script>
import UserRepositories from '@/_components/UserRepositories.vue';

export default {
  name: 'CompositionAPI',
  components: {
    UserRepositories,
  },
  data() {
    return {
      user: 'xiaoli',
    };
  },
  methods: {
    onSearch() {
    },
  },
};
</script>

<style lang="less" scoped>
.composition-api {
  .user-list {
    margin-top: 20px;
  }
}
</style>
