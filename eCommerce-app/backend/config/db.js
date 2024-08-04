//! This file is to mainly focus on handling the database connection:

const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);

        console.log('MongoDB connected');

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
    
};

module.exports = connectDB;
