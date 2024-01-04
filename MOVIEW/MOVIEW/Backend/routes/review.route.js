const express = require("express");
const reviewExpressRoute = express.Router();
const cors = require("cors");
let ReviewSchema = require("../model/review.model");
// CORS OPTIONS
var whitelist = ["http://localhost:8100", "http://localhost:4000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};


// posting the review
reviewExpressRoute.route("/post-review").post(async (req, res, next) => {
  await ReviewSchema.create(req.body)
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        message: " Review Posted.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});


// Getting reviwes 
reviewExpressRoute.route("/get-reviews/:movie_id").get(async (req, res, next) => {
  await ReviewSchema.find({movie_id : req.params.movie_id}, req.body)
    .then((result) => {
      res.json({
          data: result,
          message: "Review fetched successfully",
          status: 200,
        });
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = reviewExpressRoute;
