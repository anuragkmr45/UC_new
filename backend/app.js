const express = require('express')
const app = express()

const cors = require('cors')

const multer = require('multer')

const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})



// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


const router = require('./routes/router.js')
app.use('/', router)

module.exports = app