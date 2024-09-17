<template>
    <div>
      <ProductInput @product-added="addProductToPage" />
      <Product v-if="product" :product="product" />
    </div>
  </template>
  
  <script>
  import Product from '../components/Product.vue';
  import ProductInput from '../components/ProductInput.vue';
  
  export default {
    components: {
      Product,
      ProductInput
    },
    data() {
      return {
        product: null 
      };
    },
    methods: {
      addProductToPage(product) {
        this.product = product;
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  