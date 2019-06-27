<template>
  <div>
    <h1>ALL PRODUCTS</h1>
    <ListOfProducts :products="getAllProducts"></ListOfProducts>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListOfProducts from './ListOfProducts';

export default {
  name: 'all-products',
  components: {
    ListOfProducts,
  },
  computed: {
    ...mapGetters([
      'getAllProducts'
    ])
  }
};
</script>

<style>
</style>
