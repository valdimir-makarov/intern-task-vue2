const { Product, getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../models/productModel');

const getProducts = (req, res) => {
    res.json(getAllProducts());
};

const getProduct = (req, res) => {
    const product = getProductById(parseInt(req.params.id));  
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};

const addProduct = (req, res) => {
    const { id, name, title ,price} = req.body; 
    const newProduct = new Product(id, name, title,price); 
    res.status(201).json(createProduct(newProduct)); 
  };
  

const updateProductById = (req, res) => {
    const updatedProduct = updateProduct(parseInt(req.params.id), req.body);  
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).send('Product not found');
    }
};

const deleteProductById = (req, res) => {
    const deleted = deleteProduct(parseInt(req.params.id)); 
    if (deleted) {
        res.json({ message: 'Product deleted' });
    } else {
        res.status(404).send('Product not found');
    }
};

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProductById,
    deleteProductById
};
