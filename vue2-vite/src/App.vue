<template>
  <div id="app">
    <ProductInput @product-added="addProduct"></ProductInput>
    <Product v-if="product" :product="product"></Product>
  </div>
</template>

<script>
import Product from './components/Product.vue';
import ProductInput from './components/ProductInput.vue';

export default {
  name: 'App',
  components: {
    Product,
    ProductInput
  },
  data() {
    return {
      product: null
    };
  },
  methods: {
    addProduct(newProduct) {
      this.product = newProduct;
    }
  }
};
</script>
