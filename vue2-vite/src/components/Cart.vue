<template>
    <div class="cart">
      <h2>Shopping Cart</h2>
      <p>Total Products: {{ productCount }}</p>
      <p>Total Price: ${{ totalPrice }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    computed: {
      productCount() {
        return this.products.length;
      },
      totalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
      }
    }
  };
  </script>
  
  <style scoped>
  .cart {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  