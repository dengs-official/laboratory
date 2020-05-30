<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col v-for="item in 5" :key="item">
        <v-card
          color="light-green"
          height="100px"
          width="80px"
          align="center"
          hover
          @click="onProduce"
        >
          <v-icon x-large>mdi-cart</v-icon>
          <span>Product {{item}}</span>
          <h4>Order {{item}}</h4>
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

    };
  },
  methods: {
    onProduce() {
      window.parent.location.href = '/micro-frontend/#/client/pms';
    },
  },
};
</script>
