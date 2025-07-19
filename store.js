const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory (optional if using default 'views' folder)
app.set('views', './views');


// Root route rendering an EJS template
app.get('/', (req, res) => {
  res.render('index'); // Render index.ejs
});


// Use the products router for /products routes
app.use('/products', productsRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});