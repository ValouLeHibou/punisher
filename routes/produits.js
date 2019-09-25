const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send([
        { id: 0, name: 'ristretto', coffee: 1, water: 1, description: 'a strong coffee', price: '1.10' },
        { id: 1, name: 'expresso', coffee: 1, water: 1, description: 'a regular coffee', price: '1.00' },
        { id: 2, name: 'long coffee', coffee: 1, water: 1, description: 'some call it tall :\')', price: '1.00' },
        { id: 3, name: 'cream coffee', coffee: 1, milk: 1, water: 1, description: 'a comfy coffee', price: '1.20' },
        { id: 4, name: 'chocolate', chocolate: 1, milk: 1, description: 'milk. chocolate. what else ?', price: '1.50' },
    ])
});

router.get('/:id', function (req, res) {
    const request = [
        { id: 0, name: 'ristretto', coffee: 1, water: 1, description: 'a strong coffee', price: '1.10' },
        { id: 1, name: 'expresso', coffee: 1, water: 1, description: 'a regular coffee', price: '1.00' },
        { id: 2, name: 'long coffee', coffee: 1, water: 1, description: 'some call it tall :\')', price: '1.00' },
        { id: 3, name: 'cream coffee', coffee: 1, milk: 1, water: 1, description: 'a comfy coffee', price: '1.20' },
        { id: 4, name: 'chocolate', chocolate: 1, milk: 1, description: 'milk. chocolate. what else ?', price: '1.50' },
    ].find((product) => product.id === parseInt(req.params.id));
    res.send(request)
});

module.exports = router;
