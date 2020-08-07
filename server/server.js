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
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 

app.use(express.static(path.join(__dirname, '/../client/build')));


app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routeApi);
app.use('/sendme', routeSendMe);
app.get('*', (req,res,next) =>{
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


(async () => {
  const files = await imagemin(['images/*.{jpg,png}'], {
      destination: 'build/images',
      plugins: [
          imageminJpegtran(),
          imageminPngquant({
              quality: [0.6, 0.8]
          })
      ]
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();






