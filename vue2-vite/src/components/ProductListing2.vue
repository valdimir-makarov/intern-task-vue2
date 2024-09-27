<template>
    <div class="container mx-auto p-4">
      <ProductSearch />
  
      <!-- Price Filter Options -->
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
  
      <!-- Sort Buttons -->
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
      <!-- Products Listing -->
      <div v-if="paginatedProducts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in paginatedProducts"
          :key="product.id"
          class="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >  <pre>{{ product }}</pre>

          <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
          <p class="text-lg text-gray-600 mb-4">\${{ product.price }}</p>
        </div>
      </div>
  
      <!-- No Products Found -->
      <div v-else class="text-center text-gray-500 mt-6">
        <p>No products found.</p>
      </div>
  
      <!-- Custom Pagination -->
      <div class="flex justify-center mt-6 space-x-2">
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="changePage(pageNumber)"
          :class="page === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'"
          class="py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          {{ pageNumber }}
        </button>
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
        sortOrder: '',
        page: 1,
        perPage: 12
      };
    },
    computed: {
      ...mapGetters(['getAllProducts']),
      ...mapGetters(['filteredAndSortedProducts']),

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
      },
      
      paginatedProducts() {
    const start = (this.page - 1) * this.perPage;
    const end = start + this.perPage;
    return this.filteredAndSortedProducts.slice(start, end); 
  },

  pageCount() {
    return Math.ceil(this.filteredAndSortedProducts.length / this.perPage);
  }
    },
    methods: {
      ...mapActions(['fetchProducts', 'updateSortByPrice']),
      
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
    this.updateSortByPrice(order); 
  },

  changePage(page) {
    this.page = page;
  }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  