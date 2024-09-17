<template>
  <div class="product">
    <h2>Product Details</h2>
    <div v-if="product">
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
    </div>
    <p v-else>No product selected.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Product',
  computed: {
    ...mapGetters(['getProducts']),
    product() {
     
      return this.getProducts.length ? this.getProducts[this.getProducts.length - 1] : null;
    }
  }
};
</script>
