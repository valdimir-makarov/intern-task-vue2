<template>
    <div class="product">
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Product",
    props: {
      product: {
        type: Object,
        required: true
      }
    }
    
  };
  </script>
  
  <style scoped>
  .product {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  