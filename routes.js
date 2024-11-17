// routes.js
const express = require('express');
const router = express.Router();
const {fetchData, fetchProduct } = require('./database_handler');

router.get('/', (req, res) => {
  console.log('calling database...');
    const products = fetchData()
      res.render('index', { products: products });
})


router.get('/product/:id', (req, res) => {
  const product_id = req.params.id;
  const product = fetchProduct(product_id);
  const recommended_products = fetchData();
    
  res.render('product', { product: product, recommended_products: recommended_products });    
});

router.get('/admin/products', (req, res) => {
  res.render('admin')
})

router.get('/admin/new-product', (req, res) => {
  res.render('new_product')
})

module.exports = router;
