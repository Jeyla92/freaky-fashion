//server.js

const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const { post_product, all_products } = require('./productResource')
const cors = require('cors'); // Importera cors

app.use(express.json());
app.use(cors())

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/')));

app.use('/', routes)

app.post('/api/products', post_product)
app.get('/api/all-products', all_products)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(
        `Server is running on 
            http://localhost:${PORT}`
    );
});
