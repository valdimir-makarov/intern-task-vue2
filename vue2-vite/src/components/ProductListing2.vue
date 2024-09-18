<template>
    <div class="container mx-auto p-4">
      <ProductSearch />
  
      <div class="text-center my-4">
        <button 
          @click="handleSearch" 
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
          Search Products
        </button>
      </div>
  
      <div v-if="searchTriggered && filteredProducts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in filteredProducts" :key="product.id" class="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
          <p class="text-lg text-gray-600 mb-4">\${{ product.price }}</p>
        </div>
      </div>
  
      <div v-if="!searchTriggered" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in allProducts" :key="product.id" class="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
          <p class="text-lg text-gray-600 mb-4">\${{ product.price }}</p>
        </div>
      </div>
  
      <div v-else-if="searchTriggered && !filteredProducts.length" class="text-center text-gray-500 mt-6">
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
    data() {
      return {
        searchTriggered: false
      };
    },
    computed: {
      ...mapGetters(['filteredProducts', 'getAllProducts']),
      
      allProducts() {
        return this.getAllProducts;
      }
    },
    methods: {
      ...mapActions(['fetchProducts']),
  
      handleSearch() {
        this.searchTriggered = true;
      }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>
  