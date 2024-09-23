<template>
    <div>
      <ProductInput />
      <Product />
    </div>
  </template>
  
  <script>
  import Product from '../components/Product.vue';
  import ProductInput from '../components/ProductInput.vue';
  
  export default {
    components: {
      Product,
      ProductInput
    }
  };
  </script>
  