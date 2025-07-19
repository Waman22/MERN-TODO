const express = require('express');
const router = express.Router();

// Sample data (replace with a database query in a real app)
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 499 },
  { name: 'Headphones', price: 99 }
];

// Define the route to render the products view
router.get('/', (req, res) => {
  res.render('products', { products });
});

module.exports = router;