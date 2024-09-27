import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products'; // Adjust to your Express server endpoint

export const ProductServices = {
  async fetchProducts1() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching products from API:', error);
      throw error;
    }
  },
  async addProduct(product) {
    try {
      const response = await axios.post(API_URL, product);
      return response.data;
    } catch (error) {
      console.error('Error adding product to API:', error);
      throw error;
    }
  }
};
