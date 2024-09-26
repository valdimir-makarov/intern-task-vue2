const express = require('express');
const router = express.Router();
const { getProducts, getProduct, addProduct, updateProductById, deleteProductById } = require('../ProductControllers/productControllers');

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', addProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

module.exports = router;
