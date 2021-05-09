<template>
  <div class="VModel">
    <VModelComp v-model.trim.capitalize="name" v-model:email="email" v-model:phone.number="phone" />
    <h2>{{name}}</h2>
    <h2>{{email}}</h2>
    <h2>{{phone}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import VModelComp from '@/components/VModelComp.vue';

export default {
  name: 'VModel',
  components: {
    VModelComp,
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
};
</script>
