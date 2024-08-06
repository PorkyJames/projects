const express = require('express');
const router = express.Router();

const cart_controller = require('../controllers/cartController')

//! Fetch all items from Cart
// router.get('/cart', (req, res) => {
//     res.send("This is all Cart items")
// })

router.get('/cart', cart_controller.getCartItems)

//! Add Items to Cart
// router.post('/cart', (req, res) => {
//     res.send("This is the adding action to the cart")
// })

router.post('/cart', cart_controller.addItemsToCart)

//! Edit Items in Cart
// router.put('/cart', (req, res) => {
//     res.send("This is the editing of the shopping cart")
// })

router.put('/cart', cart_controller.updateItemsInCart)

//! Delete Items in Cart
// router.delete('/cart', (req, res) => {
//     res.send("This is deleting the items from the shopping cart")
// })

router.delete('/cart', cart_controller.deleteItemsInCart)
