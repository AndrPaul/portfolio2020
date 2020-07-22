const express = require('express');

const router = express.Router();

const PortfolioItem = require('../models/portfolioitem');
const Metainfo = require('../models/metainfo');

router.get('/portItems', (req, res) => {

    PortfolioItem.find({})
        .then((data) => {
            console.log('Data: portItems recived');
            res.json(data);
        })
        .catch((error) => {
            console.log('error: portItems', error);
        });
});

router.get('/metainfo', (req, res) => {

    Metainfo.find({})
        .then((data) => {
            console.log('Data: metainfo recived');
            res.json(data);
        })
        .catch((error) => {
            console.log('error: metainfo', error);
        });
});

module.exports = router;