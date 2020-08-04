const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const routeApi = require("./routes/api");
const routeSendMe = require('./routes/sendMe');
const cors = require("cors");
const helmet = require("helmet");


app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routeApi);
app.use('/sendme', routeSendMe);


app.listen(PORT, console.log(`Server is runing at ${PORT}`));

mongoose.connect("mongodb://localhost/portfolioDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

;



