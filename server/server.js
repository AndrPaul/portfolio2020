const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const routeApi = require("./routes/api");
const routeSendMe = require('./routes/sendMe');
const cors = require("cors");
const helmet = require("helmet");
const path = require('path');

app.use(express.static(path.join(__dirname, '/../client/build')));
var allowedOrigins = [
  'http://161.35.158.203:3000',
  'http://localhost:3000'
];


app.use(cors({
  origin: function (origin, callback) {    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true); if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    } return callback(null, true);
  }
}));
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routeApi);
app.use('/sendme', routeSendMe);
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

app.listen(PORT, console.log(`Server is runing at ${PORT}`));

mongoose.connect("mongodb://localhost/portfolioDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});







