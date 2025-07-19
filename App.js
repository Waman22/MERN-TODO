const express = require('express');
const LoginRouter = require('./routes/Login');
const RegisterRouter = require('./routes/Register');

const app = express();
const port = 7000;

// Use the routers

app.use('/login', LoginRouter);
app.use('/register', RegisterRouter);




app.get('/', (req, res) => {
  res.send('Wamaanda You are getting used to routers');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});