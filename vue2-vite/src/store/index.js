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
        // Ensure price is a number for each product
        products.forEach(product => {
          product.price = parseFloat(product.price);
        });
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
      return [...state.inputProducts, ...state.fetchedProducts];
    },

    filteredAndSortedProducts: (state, getters) => {
      let products = getters.getAllProducts;

      const query = state.searchQuery.toLowerCase();
      products = products.filter(product => {
        const title = product.title ? product.title.toLowerCase() : '';
        const name = product.name ? product.name.toLowerCase() : '';
        return title.includes(query) || name.includes(query);
      });

      if (state.sortByPrice === 'asc') {
        return products.sort((a, b) => a.price - b.price);
      } else if (state.sortByPrice === 'desc') {
        return products.sort((a, b) => b.price - a.price);
      }

      return products; 
    }
  },
  plugins: [createPersistedState()]
});
