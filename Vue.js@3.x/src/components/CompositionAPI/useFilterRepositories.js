import { ref, computed } from 'vue';

export default function useFilterRepositories(repositories) {
  const filter = ref('');
  // eslint-disable-next-line max-len
  const filteredRepositories = computed(() => repositories.value.filter((item) => item.name.includes(filter.value)));
  return {
    filter,
    filteredRepositories,
  };
}
