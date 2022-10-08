const mongoose = require('mongoose')

const campexpSchema = new mongoose.Schema({

    _id:{
        type: Number,
        required: true
    },

    expType: {
        type: String,
        required: true,
        trim: true,
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    collegeName: {
        type: String,
        required: true,
        trim: true,
    },

    distFromCllg: {
        type: String,
        required: true,
        trim: true,
    },

    rating: {
        type: String,
        require: false,
        trim: true,
    },

    cost: {
        type: String,
        required: true,
    },

})

module.exports = new mongoose.model("campusexp", campexpSchema)


