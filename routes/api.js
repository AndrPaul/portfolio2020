const express = require('express');

const router = express.Router();

const PortfolioItem = require('../models/portfolioitem');

router.get('/', (req, res) => {

    PortfolioItem.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


module.exports = router;