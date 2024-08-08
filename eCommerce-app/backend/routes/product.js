const express = require('express')
const router = express.Router()

import { fetchAllProducts } from '../controllers/productController'

//! Fetch all Products
//! I only want to be able to fetch the products. The eCommerce website will be super bare bones to start off. 

router.get('/', fetchAllProducts);

module.exports = router;


