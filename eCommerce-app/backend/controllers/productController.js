const ProductSchema = require('../models/product')

//! Fetch all items 
const fetchAllProducts = async (req, res) => {
    try {
        const allProductItems = await ProductSchema.find()
        //! Remember to include await because finding from the ProductSchema returns a promise. Not data. 
        if (allProductItems) {
            res.status(200).json(allProductItems)
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching all products", error })
    }
}

module.exports = fetchAllProducts
//! Only need {} if you're exporting multiple 