<template>
  <div class="computed-watch">
    <a-button @click="() => count++">Count</a-button>
    <a-button @click="() => {result++; result > 5 && stop()}">Result</a-button>
    <a-button @click="() => {state.age = 10}">State</a-button>
    <h1>{{count}}</h1>
    <h5>{{doubleCount}}</h5>
    <p>{{result}}</p>
    <p>{{state}}</p>
  </div>
</template>

<script>
import {
  ref, computed, watch, watchEffect, onBeforeUpdate, onUpdated, reactive,
} from 'vue';

export default {
  name: 'ComputedWatch',
  setup(props, context) {
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2);
    const stop = watchEffect(() => console.log(count.value));

    const result = ref(0);
    watchEffect(
      async (onInvalidate) => {
      // count.value = await Promise.resolve(result.value * 2);
        console.log(result.value);
        onInvalidate(() => {
          console.log('onInvalidate');
        });
      },
      {
        onTrigger(e) {
          console.log(e);
        },
        onTrack(e) {
          console.log(e);
        },
      },
    );

    watch([count, result], (to, from) => { console.log(to); });

    const state = reactive({ count: 0, info: { name: 'test' } });
    watch(() => ({ ...state }), (to, from) => { console.log(to); });
    onBeforeUpdate(() => {
      console.log('beforeUpdate');
    });
    onUpdated(() => {
      console.log('updated');
    });
    return {
      count,
      doubleCount,
      result,
      stop,
      state,
    };
  },
  data() {
    return {
      state2: {

      },
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
};
</script>

<style>

</style>
