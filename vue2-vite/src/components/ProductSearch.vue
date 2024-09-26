<template>
  <div class="flex justify-center mt-4">
    <input
      v-model="localSearchQuery"
      @input="searchProducts"
      type="text"
      placeholder="Search for a product"
      class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      localSearchQuery: "" // Local state for the input field
    };
  },
  computed: {
    ...mapState({
      searchQuery: (state) => state.searchQuery
    })
  },
  methods: {
    ...mapActions(['updateSearchQuery']),
    searchProducts() {
      this.updateSearchQuery(this.localSearchQuery); // Sync local search with Vuex
    }
  },
  mounted() {
    this.localSearchQuery = this.searchQuery; // Initialize localSearchQuery
  }
};
</script>

