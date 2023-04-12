const express = require('express');

const productRouter = express.Router(); 

const  products = [
    {
        id: 1,
        name: 'pen',
        quantity: 100,
        price: 50,
    },
    {
        id: 2,
        name: 'bags',
        quantity: 120,
        price: 1000,
    },
];

// to display all products using GET
productRouter.get('/products', (req, res) => {
    res.status(200).json({
        message: 'All products',
        products,
    });
});

module.exports = productRouter;