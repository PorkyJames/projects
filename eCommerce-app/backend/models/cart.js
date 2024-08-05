const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingCartSchema = new Schema({
    product: {
        //! This is a way to reference the product model in mongoose / MongoDB
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);
