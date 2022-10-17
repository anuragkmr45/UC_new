const mongoose = require('mongoose')

const pgSchema = new mongoose.Schema({

    pgName: {
        type: String,
        required: true,
        trim: true,
    },

    ownerName: {
        type: String,
        required: false,
        trim: true
    },

    location: {
        type: String,
        required: false,
        trim: true,
    },

    nearMetro: {
        type: String,
        required: false,
        trim: true,
    },

    rent: {
        type: Number,
        trim: true,
    },

    gender: {
        type: String,
        required: true,
        trim: true
    },

    nearCllg: {
        type: String,
        trim: true,
        required: false
    }

})

module.exports = new mongoose.model("pglist", pgSchema)


