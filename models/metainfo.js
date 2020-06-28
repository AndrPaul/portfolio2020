const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PortfolioSchema = new Schema({
    src: String, 
    alt: String,
    title: String,
    description: String,
    gitlink: String,
    seelink : String
});

const PortfolioItem = mongoose.model('PortfolioItem', PortfolioSchema);

module.exports = PortfolioItem;