const products = [
    { id: 1, name: 'Laptop', title: 'High-performance Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', title: 'Latest Android Smartphone', price: 699.99 },
    { id: 3, name: 'Headphones', title: 'Noise-Cancelling Headphones', price: 199.99 },
    { id: 4, name: 'Keyboard', title: 'Mechanical Keyboard', price: 89.99 },
    { id: 5, name: 'Monitor', title: '4K Ultra HD Monitor', price: 399.99 }
];

class Product {
    constructor(id, name, title, price) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.price = price;
    }
}

const getAllProducts = () => products;

const getProductById = (id) => products.find(product => product.id === id);

const createProduct = (product) => {
    products.push(product);
    return product;
};

const updateProduct = (id, updatedData) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedData };
        return products[index];
    }
    return null;
};

const deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        return products.splice(index, 1);
    }
    return null;
};

module.exports = {
    Product,
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
