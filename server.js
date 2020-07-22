const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const routeApi = require("./routes/api");
const routeSendMe = require('./routes/sendMe');



mongoose.connect("mongodb://localhost/portfolioDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan("tiny"));
app.use("/api", routeApi);
app.use('/sendme', routeSendMe);

app.listen(PORT, console.log(`Server is runing at ${PORT}`));


