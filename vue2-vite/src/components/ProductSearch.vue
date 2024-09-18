<template>
  <div>
    <input
      v-model="localSearchQuery"
      @input="searchProducts"
      type="text"
      placeholder="Search for a product"
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
  watch: {
    searchQuery(newVal) {
      this.localSearchQuery = newVal;
    }
  },
  methods: {
    ...mapActions(['updateSearchQuery']),
    searchProducts() {
      this.updateSearchQuery(this.localSearchQuery);
    }
  },
  mounted() {
    this.localSearchQuery = this.searchQuery;
  }
};
</script>

