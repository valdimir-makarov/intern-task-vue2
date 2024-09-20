<template>
    <div class="product-listing">
      <h2>Product Listing</h2>
      <div v-if="loading">Loading products...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="products.length > 0">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.title" class="product-image" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <p><strong>Price:</strong> ${{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        loading: false,
        error: null
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        this.loading = true;
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
            this.products = data;
            this.loading = false;
          })
          .catch(error => {
            this.error = "Failed to fetch products.";
            this.loading = false;
          });
      }
    }
  };
  </script>
  
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
  
  .product-image {
    width: 100%;
    height: auto;
  }
  </style>
  