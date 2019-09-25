const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send([
        { name: 'ristretto', coffee: 1, water: 1, description: '', price: '' },
        { name: 'expresso', coffee: 1, water: 1, description: '', price: '' },
        { name: 'long coffee', coffee: 1, water: 1, description: '', price: '' },
        { name: 'cream coffee', coffee: 1, milk: 1, water: 1, description: '', price: '' },
        { name: 'chocolate', chocolate: 1, milk: 1, description: '', price: '' },
    ])
})

module.exports = router;
