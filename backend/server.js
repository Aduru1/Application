const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv =require('dotenv')
const routeUrls = require('./routes/routes') //server need to aware their is a route.js 
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("DataBase Connected"))


app.use(express.json()) //body parser  helps to our incomming and outgoing requests
app.use(cors())
app.use('/app',routeUrls)    //base url
app.listen(4000,()=> console.log("server is up and running "))














