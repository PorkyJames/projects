const ProductSchema = require('../models/product')

//! Fetch all items 
const fetchAllProducts = async (req, res) => {
    try {
        const allProductItems = ProductSchema.find()
        if (allProductItems) {
            res.send(200).json(allProductItems)
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching all products", error })
    }
}

module.exports = {
    fetchAllProducts,
}