const ShoppingCartSchema = require('../models/cart')

//! Fetch all items from Cart
const getCartItems = async (req, res) => {
    try {
        const cartItems = await ShoppingCartSchema.find();
        if (cartItems) {
            res.status(200).json(cartItems)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//! Add item to our Cart
const addItemsToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const newItem = new ShoppingCartSchema({ newlyAddedProduct: productId, quantity })
        const addedItem = await newItem.save();
        if (addedItem) {
            res.status(201).json(addedItem)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//! Edit the items in our Cart
const updateItemsInCart = async (req, res) => {
    try {
        const cartItems = await ShoppingCartSchema.find()
        const itemId = req.params.id
        const { quantity } = req.body
        const updatedItem = await ShoppingCartSchema.findByIdAndUpdate(itemId, { quantity }, { new: true})
        if (updatedItem) {
            res.status(200).json(updatedItem)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//! Delete the item from the cart
const deleteItemsInCart = async (req, res) => {
    try {
        const itemId = req.params.id
        const deletedItem = await ShoppingCartSchema.findByIdAndDelete(itemId)
        if (deletedItem) {
            res.status(200).json({ message: "Item has been removed from cart" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
