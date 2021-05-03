<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col v-for="item in 10" :key="item">
        <v-card color="light-blue" height="80px" width="80px" align="center" hover>
          <v-icon x-large>mdi-tractor-variant</v-icon>
          <h4>Product {{item}}</h4>
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
};
</script>
