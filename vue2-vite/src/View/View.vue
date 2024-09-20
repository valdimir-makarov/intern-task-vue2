
<template>
    <div id="app">
      <ProductInput @product-added="addProduct"></ProductInput>
      <Cart :products="products"></Cart>
      <Product v-if="selectedProduct" :product="selectedProduct"></Product>
      <ProductListing></ProductListing>
    </div>
  </template>
  
  <script>
  import Product from '../components/Product.vue';
  import ProductInput from '../components/ProductInput.vue';
  import Cart from '../components/Cart.vue';
  import ProductListing from '../components/ProductListing.vue';
  
  export default {
    name: 'View',
    components: {
      Product,
      ProductInput,
      Cart,
      ProductListing
    },
    data() {
      return {
        products: [],
        selectedProduct: null
      };
    },
    methods: {
      addProduct(newProduct) {
        this.products.push(newProduct);
        this.selectedProduct = newProduct;
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  