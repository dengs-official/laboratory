<template>
  <form>
  <label for="name">Name: </label>
  <input name="name" :value="modelValue" @input="onInput($event, 'modelValue')" />
  <label for="email">Email: </label>
  <input form="email" :value="email" @input="onInput($event, 'email')" />
  <label for="phone">Phone: </label>
  <input name="phone" :value="phone" @input="onInput($event, 'phone')" />
  </form>
</template>

<script>
export default {
  props: {
    modelValue: undefined,
    modelModifiers: {
      default: () => ({}),
    },
    email: undefined,
    phone: undefined,
    phoneModifiers: {
      default: () => ({}),
    },
  },
  emits: ['update:modelValue', 'update:email', 'update:phone'],
  data() {
    return {
    };
  },
  created() {
    console.log(this.modelModifiers, this.phoneModifiers);
  },
  methods: {
    onInput(e, type) {
      let { value } = e.target;
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit(`update:${type}`, value);
    },
  },
};
</script>

<style>

</style>
