<template>
    <div class="product-input">
      <h2>Add a New Product</h2>
      <form @submit.prevent="addProduct1">
        <div>
          <label for="name">Product Name:</label>
          <input v-model="name" id="name" type="text" required />
        </div>
        <div>
          <label for="price">Price:</label>
          <input v-model="price" id="price" type="number"  required />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="description" id="description"></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductInput', 
    data() {
      return {
        name: '',
        price: '',
        description: ''
      };
    },
    methods: {
      addProduct1() {
        const product = {
          name: this.name,
          price: parseFloat(this.price),
          description: this.description,
          quantity:this.quantity
        };
        console.log(product)
        this.$emit('product-added', product);
        this.name = '';
        this.price = '';
        this.description = '';
        
      }
    }
  };
  </script>
  
  <style scoped>
  .product-input {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  input, textarea {
    display: block;
    margin-bottom: 10px;
  }
  </style>
  