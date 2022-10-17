const app = require('./app')
const { connectDatabase } = require('./db/conn')

// connect database.js from config
connectDatabase();


app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})  