const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {type:Number,
        min:1895},
    director: {
        type: String,
        required: true
    },
    duration: String,
    genre: Array,
    rate: {type: Number,
           max:10},
    poster: String
})


const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie