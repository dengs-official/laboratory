import { ref, onMounted, watch } from 'vue';

export default function useUserRepositories(user) {
  const repositories = ref([]);
  const getUserRepositories = async () => {
    repositories.value = await Promise.resolve(
      Array.from({ length: 20 }, (v, k) => ({ id: k, name: `${user.value}${k}` })),
    );
  };

  onMounted(getUserRepositories);
  watch(user, getUserRepositories);

  return { repositories, getUserRepositories };
}
