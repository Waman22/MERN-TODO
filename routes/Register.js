const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Welcome to the Register Page ');
});


module.exports = router;