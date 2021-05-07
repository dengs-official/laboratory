<template>
  <div class="setup">
    <div class="setup-header">
      <label>Name: </label>
      <a-input v-model:value="name" />
      <label>Age: </label>
      <a-input v-model:value="age" />
    </div>
    <SetupComp
      :name="name"
      :age="age"
      style="margin-top: 10px; border-top: 1px solid #ccc;"
    />
  </div>
</template>

<script>
import SetupComp from '@/components/SetupComp.vue';

export default {
  name: 'Setup',
  components: {
    SetupComp,
  },
  data() {
    return {
      name: '',
      age: '',
    };
  },
};
</script>

<style>

</style>
