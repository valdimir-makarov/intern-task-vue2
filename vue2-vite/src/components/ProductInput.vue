<template>
  <div class="product-input">
    <h2>Add a New Product</h2>
    <form @submit.prevent="submitProduct">
      <div>
        <label for="name">Product Name:</label>
        <input v-model="name" id="name" type="text" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input v-model="price" id="price" type="number" required />
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
      this.addProduct(product); // Vuex action to add the product
      this.name = '';
      this.price = '';
      this.description = '';

      // Redirect to product details page
      this.$router.push('/product'); // Assuming /product shows the latest product added
    }
  }
};
</script>
