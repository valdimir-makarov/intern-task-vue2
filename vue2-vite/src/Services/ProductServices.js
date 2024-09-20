import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

const ProductService = {

  async fetchProducts() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching products from API:', error);
      throw error;
    }
  }
};

export default ProductService;
