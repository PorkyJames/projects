const express = require('express')
const router = express.Router()

const fetchAllProducts = require('../controllers/productController')

// import { fetchAllProducts } from '../controllers/productController'

//! Fetch all Products
//! I only want to be able to fetch the products. The eCommerce website will be super bare bones to start off. 

router.get('/', fetchAllProducts);

//! Remember, I've already pre-fixed /products in the server.js. So the route (with the / becomes '/products/products')

module.exports = router;
