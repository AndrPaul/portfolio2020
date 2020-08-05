const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PortfolioSchema = new Schema({
    src: String,
    alt: String,
    title: String,
    description: String,
    gitlink: String,
    seelink: String
}, { collection: 'projects' });

mongoose.model('portfolioitem', PortfolioSchema ,"projects");
const PortfolioItem = mongoose.model('portfolioitem');

module.exports = PortfolioItem;