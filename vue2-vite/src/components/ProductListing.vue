<template>
  <div class="product-listing container mx-auto py-10">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Product Listing</h2>
    
    <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div v-for="(product, index) in products" :key="index" class="product-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.title || product.name }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>
          <p class="text-lg font-bold text-indigo-600"><strong>Price:</strong> ${{ product.price }}</p>
        </div>
      </div>
    </div>
    
    <p v-else class="text-center text-gray-500">No products available.</p>
  </div>
</template>

<script>
export default {
  name: 'ProductListing',
  computed: {
    products() {
      return this.$store.getters.getAllProducts;
    }
  },
  created() {
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style scoped>
.product-listing {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}
</style>


<!-- <script>
export default {
  name: 'ProductListing',
  computed: {
    products() {
      return this.$store.getters.getAllProducts;
    }
  },
  created() {
    this.$store.dispatch('fetchProducts'); // Fetch products when component is created
  }
};
</script> -->
<!-- 
<style scoped>
.product-listing {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 250px;
  text-align: center;
}
</style> -->
