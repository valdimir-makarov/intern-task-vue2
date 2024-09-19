<template>
    <div class="container mx-auto p-4">
      <ProductSearch />
  
      <div class="my-4 flex justify-center space-x-4">
        <button
          v-for="(range, key) in filtersAsNumbers"
          :key="key"
          @click="setFilter(key)"
          :class="filterApplied.includes(key) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
          class="py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          {{ key }}
        </button>
  
        <button
          @click="clearFilter"
          class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Clear Filter
        </button>
      </div>
  
      <div class="text-center my-4">
        <button
          @click="sortByPrice('asc')"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out mr-4"
        >
          Sort by Price: Low to High
        </button>
        <button
          @click="sortByPrice('desc')"
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
        >
          Sort by Price: High to Low
        </button>
      </div>
  
      <div v-if="filteredProducts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
          <p class="text-lg text-gray-600 mb-4">\${{ product.price }}</p>
        </div>
      </div>
  
      <div v-else class="text-center text-gray-500 mt-6">
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
        filterApplied: [],
        filtersAsNumbers: {
          'Under $50': [0, 50],
          '$50 - $100': [50, 100],
          '$100 - $200': [100, 200],
          '$200 - $500': [200, 500],
          'Above $500': [500, Infinity]
        },
        sortOrder: ''
      };
    },
    computed: {
      ...mapGetters(['getAllProducts']),
      filteredProducts() {
        let products = this.getAllProducts.filter(product => {
          if (this.filterApplied.length < 1) {
            return product;
          } else {
            return this.filterApplied.some(priceRange => {
              const [low, high] = this.filtersAsNumbers[priceRange];
              return product.price >= low && product.price <= high;
            });
          }
        });
  
        if (this.sortOrder === 'asc') {
          products.sort((a, b) => a.price - b.price);
        } else if (this.sortOrder === 'desc') {
          products.sort((a, b) => b.price - a.price);
        }
  
        return products;
      }
    },
    methods: {
      ...mapActions(['fetchProducts']),
      setFilter(filter) {
        const index = this.filterApplied.indexOf(filter);
        if (index > -1) {
          this.filterApplied.splice(index, 1);
        } else {
          this.filterApplied.push(filter);
        }
      },
      clearFilter() {
        this.filterApplied = [];
      },
      sortByPrice(order) {
        this.sortOrder = order;
      }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>
  