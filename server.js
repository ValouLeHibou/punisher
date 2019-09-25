const express = require('express');
const cors = require('cors')
const products = require('./routes/produits');

const app = express();
const corsOptions = {
  origin: true,
}

app.use(cors(corsOptions));
app.use('/products', products);

app.get('/', function (req, res) {
  res.send({ status: 'OK' })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
