<template>
  <div class="user-repositories" style="width: 100%; padding: 0 20px;">
    <div class="repositories-filters">
      <label style="width: 50px; display: inline-block;">过滤：</label>
      <a-select v-model:value="filter" :options="filterOptions" style="width: calc(100% - 50px);" />
    </div>
    <div class="repositories-list" style="margin-left: 50px;">
      <a-list :dataSource="repositories">
        <template #renderItem="{item}">
          <a-list-item>{{item}}</a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue';
import useUserRepositories from './useUserRepositories';
import useFilterRepositories from './useFilterRepositories';

export default {
  name: 'UserRepositories',
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    // toRefs
    const { user } = toRefs(props);
    const { repositories } = useUserRepositories(user);
    const { filter, filteredRepositories } = useFilterRepositories(repositories);

    return {
      filter,
      repositories: filteredRepositories,
    };
  },
  data() {
    return {
      filterOptions: Array.from({ length: 10 }, (v, k) => ({ value: k, label: `Name${k}` })),
    };
  },
};
</script>

<style>

</style>
