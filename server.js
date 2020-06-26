const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/portfolio_items', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});



mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

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

const data = {
    src: 'https://dummyimage.com/298x150/d4c768/ffffff', 
    alt: "dummyimage",
    title: 'title',
    description: 'Starwars themed minigame, fun project made to exercise and better my javascript knowledge.',
    gitlink: 'https://github.com/injecti0n',
    seelink : 'https://github.com/injecti0n'
}

const newPortItem = new PortfolioItem(data);

// newPortItem.save((error)=> {
//     if(error){
//         console.log("Error something went wrong");
//     } else {
//         console.log('Data has been saved');
//     }
// });

app.use(morgan('tiny'));

app.get('/api', (req,res) => {

    PortfolioItem.find({data})
        .then(()=>{
            console.log("Data: ", data);
             res.json(data);
        })
        .catch((error)=>{
            
        })
    
   
});

app.get('/api/name', (req,res) => {

    const data = {
        username : 'name1',
        age : 5
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is runing at ${PORT}`));