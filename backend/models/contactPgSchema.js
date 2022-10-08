const mongoose = require('mongoose')

const contactPgSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: Number,
        required: true,
        trim: true,
    },

    areaOfSearch: {
        type: String,
        required: false,
        trim: true,
    },


})

module.exports = new mongoose.model("contactPg", contactPgSchema)


