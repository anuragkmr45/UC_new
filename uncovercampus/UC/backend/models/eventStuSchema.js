const mongoose = require('mongoose')

const eventStuRegSchema = new mongoose.Schema({

    stuName: {
        type: String,
        required: true,
    },

    cllgName: {
        type: String,
        required: true,
        trim: true,
    },

    phone: {
        type: Number,
        required: true,
        trim: true,
        limit: 10
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    date: {
        type: Date,
        default: Date.now,
    }

})

module.exports = new mongoose.model("EventStuReg", eventStuRegSchema)

