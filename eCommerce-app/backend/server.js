const express = require('express');
const connectDB = require('../backend/config/db');

//! Initialize our express app
const app = express();

//! Connect to our DB using the db.js in the config directory
connectDB();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

