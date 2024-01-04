const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");

// Connecting MongoDB
async function mongoDbConnection() {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/moview",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    6000
  );
}
mongoDbConnection().then(() => {
  console.log("MongoDB successfully connected.");
}),
  (error) => {
    console.log("Could not connected to database : " + err);
  };

const userRoute = require("./routes/loginRegister.route");
const reviewRoute = require("./routes/review.route");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  bodyParser.json()
);

// CORS
app.use(cors());

// RESTful API root
app.use("/userapi", userRoute);
app.use("/reviewapi", reviewRoute)

// PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("PORT Connected on: " + port);
});
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
