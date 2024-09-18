<template>
    <div>
      <ProductSearch />
      
      <button @click="fetchProducts">Search Products</button>
      
      <div v-if="filteredProducts.length">
        <div v-for="product in filteredProducts" :key="product.id">
          <h3>{{ product.title }}</h3>
          <p>\${{ product.price }}</p>
        </div>
      </div>
      <div v-else>
        <p>No products found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import ProductSearch from "./ProductSearch.vue";
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    name: "ProductListing",
    components: {
      ProductSearch
    },
    computed: {
      ...mapGetters(['filteredProducts'])  
    },
    methods: {
      ...mapActions(['fetchProducts'])  
    }
  };
  </script>
  