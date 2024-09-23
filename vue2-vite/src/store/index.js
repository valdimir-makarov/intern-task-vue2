import { createStore } from 'vuex';

export default createStore({
  state: {
    inputProducts: [], 
    fetchedProducts: []
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      console.log("Adding product:", product);
      state.inputProducts.push(product); 
    },
    SET_FETCHED_PRODUCTS(state, products) {
      console.log("Setting fetched products:", products);
      state.fetchedProducts = products; 
    }
  },
  actions: {
    addProduct({ commit }, product) {
      console.log("Dispatching product:", product);
      commit('ADD_PRODUCT', product);
    },
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        commit('SET_FETCHED_PRODUCTS', products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  },
  getters: {
    getAllProducts(state) {
      
      return [...state.inputProducts, ...state.fetchedProducts];
    }
  }
});
