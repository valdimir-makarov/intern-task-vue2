<template>
  <div class="product-input max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Add a New Product</h2>
    <form @submit.prevent="submitProduct" class="space-y-4">
      <div class="flex flex-col">
        <label for="name" class="mb-2 text-sm font-medium text-gray-700">Product Name:</label>
        <input v-model="name" id="name" type="text" required
               class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="flex flex-col">
        <label for="price" class="mb-2 text-sm font-medium text-gray-700">Price:</label>
        <input v-model="price" id="price" type="number" required
               class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="flex flex-col">
        <label for="description" class="mb-2 text-sm font-medium text-gray-700">Description:</label>
        <textarea v-model="description" id="description"
                  class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <button type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add Product
      </button>
    </form>
  </div>
</template>


<script>
import { mapActions } from 'vuex';

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
    ...mapActions(['addProduct']),
    submitProduct() {
      const product = {
        name: this.name,
        price: parseFloat(this.price),
        description: this.description
      };
      this.addProduct(product); 
      this.name = '';
      this.price = '';
      this.description = '';
      this.$router.push('/productListing'); 
  }
}
};
</script>
