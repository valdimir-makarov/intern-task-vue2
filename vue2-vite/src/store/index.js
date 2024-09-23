import { ProductServices } from '../Services'; // Correct import
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    inputProducts: [],
    fetchedProducts: [],
    sortByPrice: null,
    searchQuery: ""
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.inputProducts.push(product); 
    },
    SET_FETCHED_PRODUCTS(state, products) {
      state.fetchedProducts = products;
    },
    SET_SORT_BY_PRICE(state, sortOrder) {
      state.sortByPrice = sortOrder;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    async addProductToServer({ commit }, product) {
      try {
        const response = await ProductServices.addProduct(product);
        commit('ADD_PRODUCT', response); 
      } catch (error) {
        console.error("Error adding product to server:", error);
      }
    },
    async fetchProducts({ commit }) {
      try {
        const products = await ProductServices.fetchProducts1();
        commit('SET_FETCHED_PRODUCTS', products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    updateSearchQuery({ commit }, query) {
      commit("SET_SEARCH_QUERY", query);
    },
    updateSortByPrice({ commit }, sortOrder) {
      commit('SET_SORT_BY_PRICE', sortOrder);
    }
  },
  getters: {
    getAllProducts(state) {
      let allProducts = [...state.inputProducts, ...state.fetchedProducts];
      if (state.sortByPrice === 'asc') {
        return allProducts.sort((a, b) => a.price - b.price);
      } else if (state.sortByPrice === 'desc') {
        return allProducts.sort((a, b) => b.price - a.price);
      }
      return allProducts;
    },
    filteredProducts: (state, getters) => {
      return getters.getAllProducts.filter((product) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  },
  plugins: [createPersistedState()]
});
