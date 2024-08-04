const express = require('express');
const router = express.Router();

//! Fetch all items from Cart
router.get('/cart', (req, res) => {
    res.send("This is all Cart items")
})

//! Add Items to Cart
router.post('/cart', (req, res) => {
    res.send("This is the adding action to the cart")
})

//! Edit Items in Cart
router.put('/cart', (req, res) => {
    res.send("This is the editing of the shopping cart")
})

//! Delete Items in Cart
router.delete('/cart', (req, res) => {
    res.send("This is deleting the items from the shopping cart")
})

