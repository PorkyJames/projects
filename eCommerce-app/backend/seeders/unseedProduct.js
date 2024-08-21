const mongoose = require('mongoose');
const Product = require('../models/product.js');
const connectDB = require('../config/db.js');

const unseedProducts = async () => {
    try {
        await connectDB();
        const unseed = await Product.deleteMany({});
        console.log(`${unseed.deletedCount} products have been deleted from the database`);
    } catch (error) {
        console.error('Error unseeding Database', error);
    } finally {
        mongoose.connection.close();
    }
};


unseedProducts();