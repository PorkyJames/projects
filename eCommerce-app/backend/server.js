const express = require('express');
const connectDB = require('../backend/config/db');
const productRoutes = require('../backend/routes/product.js')
const cors = require("cors")

//! Initialize our express app
const app = express();

//! Connect to our DB using the db.js in the config directory
connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log("Hello in the Console!")
    res.setHeader("Content-Type", "text/html")
    res.send(`
    <h1>eCommerce Practice</h1>
    `)
})

app.use('/products', productRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

