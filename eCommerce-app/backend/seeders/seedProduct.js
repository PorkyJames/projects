const mongoose = require('mongoose');
const Product = require('../models/product.js');
const { faker } = require(`@faker-js/faker`);
const connectDB = require('../config/db.js');

const OpenAI = require('openai')
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function generateProductImage(product) {
    try {
        const response = await openai.images.generate({
            prompt: `A product image for a store item named "${product.name}. Please give me a picture of a keyboard if the product name contains a BadRequestError based on safety system.`,
            n: 1,
            size: "1024x680"
        });
        //console.log(response)

        const imageUrl = response.data[0].url; 

        return imageUrl;
    } catch (error) {
        console.error("Error generating image for product:", error);
        return null; 
    }
}


const generateProducts = async (amount) => {
    const products = [];

    for (let i = 0; i < amount; i++) {
        const productName = faker.commerce.productName();
        const description = faker.lorem.paragraph();
        const price = faker.commerce.price();
        // const imageUrl = faker.image.urlLoremFlickr({ category: 'sports' })

        //! Generate image with OpenAI
        const imageUrl = await generateProductImage( {name: productName} )

        products.push({
            name: productName,
            description,
            price,
            imageUrl: imageUrl || 'backend/help.png'
        })

    }

    return products;
}

const seedDatabase = async () => {
    try {
        await connectDB();
        const generatedProducts = await generateProducts(8);
        const addedProducts = await Product.insertMany(generatedProducts);
        console.log(`${addedProducts.length} products have been inserted into the database.`);
    } catch (err) {
        console.error('Error inserting products:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();