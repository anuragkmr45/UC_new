const mongoose = require('mongoose')

const cllgSchema = new mongoose.Schema({

    cllgName: {
        type: String,
        required: true,
        trim: true,
    },

    img: {
        data: Buffer,
        contentType: String
    },

    campus: {
        type: String,
        required: true,
        trim: true
    },

    location: {
        type: String,
        required: true,
        trim: true,
    },

    nearMetro: {
        type: String,
        required: true,
        trim: true,
    },

    dateOfEstablish: {
        type: String,
        require: false,
        trim: true,
    },

    aboutShort: {
        type: String,
        required: true,
    },

    aboutLong: {
        type: String,
        require: false
    },

    type: {
        type: String,
        required: true,
    },

    infrastructure: {
        type: String,
        required: false
    },

    courses: {
        course1: String,
        course2: String,
        course3: String,
        course4: String,
        course5: String,
        course6: String,
    },

    docsReq: {
        doc1: String,
        doc2: String,
        doc3: String,
        doc4: String,
        doc5: String,
        doc6: String,
    },

    Societies : {
        society1: String,
        society2: String,
        society3: String,
        society4: String,
        society5: String,
        society6: String,
    }

})

module.exports = new mongoose.model("cllglist", cllgSchema)


