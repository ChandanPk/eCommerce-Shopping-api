const express = require('express')
const authRoutes = require("./routes/user")
require('dotenv').config()
const mongoose = require('mongoose')


const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(res => console.log("connected to db!"))
    .catch(err => console.log(err, err.message))

app.use('/api/auth', authRoutes)

app.get("/", (req, res)=> {
    res.send("Up and running")
})

app.listen(process.env.PORT || 8000, ()=> {
    console.log("Server running on port 8000..")
})