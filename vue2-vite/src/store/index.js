import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [] 
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    }
  }
});
