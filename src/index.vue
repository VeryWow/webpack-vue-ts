<template lang="pug">
  h1
    | H{{ sum }}LLO, cruel world!
    hr
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data: () => ({
      a: 2,
      b: 1
    }),
    computed: {
      sum() {
        return this.a + this.b;
      }
    }
  })
</script>

<style lang="scss">
  h1 {
    color: red;

    hr {
      border-color: blue;
    }
  }
</style>
