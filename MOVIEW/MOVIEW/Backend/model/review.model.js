const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let reviewSchema = new Schema(
  {
    movie_id: {
      type: Number,
    },
    name: {
      type: String,
    },
    review: {
      type: String,
    },
    stars: {
      type: Number,
    }
  },
  {
    collection: "reviews",
  },
);
module.exports = mongoose.model("ReviewSchema", reviewSchema);

