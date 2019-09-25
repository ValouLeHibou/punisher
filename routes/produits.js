const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send([
        { name: 'coffee', coffee: 8, water: 2 },
        { name: 'chocolate', coffee: 8, water: 2 },
    ])
})

module.exports = router;
