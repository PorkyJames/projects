const mongoose = require('mongoose');
const Product = require('../models/product.js');
const { faker } = require(`@faker-js/faker`);
const connectDB = require('../config/db.js');

const generateProducts = (amount) => {
    const products = [];

    for (let i = 0; i < amount; i++) {
        const productName = faker.commerce.productName();
        const description = faker.lorem.paragraph();
        const price = faker.commerce.price();
        const imageUrl = faker.image.urlLoremFlickr({ category: 'sports' })

        products.push({
            name: productName,
            description,
            price,
            imageUrl,
        })

    }

    return products;
}

const seedDatabase = async () => {
    try {
        await connectDB();
        const generatedProducts = generateProducts(12);
        const addedProducts = await Product.insertMany(generatedProducts);
        console.log(`${addedProducts.length} products have been inserted into the database.`);
    } catch (err) {
        console.error('Error inserting products:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();