<template>
  <div class="product-input max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold mb-6 text-gray-700">Add New Product</h2>
    <form @submit.prevent="submitProduct" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Product Title</label>
        <input 
          type="text" 
          id="title" 
          v-model="title" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter product title"
        />
      </div>

      <div>
        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
        <input 
          type="number" 
          id="price" 
          v-model="price" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter product price"
        />
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <textarea 
          id="description" 
          v-model="description" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          rows="3"
          placeholder="Enter product description"
        ></textarea>
      </div>

      <div class="pt-4">
        <button 
          type="submit" 
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Product
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductInput',
  data() {
    return {
      title: '',   // Only keep title
      price: '',
      description: ''
    };
  },
  methods: {
    ...mapActions(['addProductToServer']),
    submitProduct() {
  const product = {
    title: this.title,
    price: parseFloat(this.price), // This ensures the price is stored as a number
    description: this.description
  };
  
  this.addProductToServer(product);
  this.title = '';
  this.price = '';
  this.description = '';
  this.$router.push('/');
}
  }
};
</script>
