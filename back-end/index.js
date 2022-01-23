

const express = require('express')
const app =express()


const mongoose = require('mongoose')
// //connecting to DB
// mongoose.connect('mongodb+srv://shrinivas:laundry@cluster0.gh2jv.mongodb.net/Laundry-service?retryWrites=true&w=majority',{ useNewUrlParser: true }, () => console.log("MongoDB Connected"))


mongoose.connect('mongodb://localhost:27017/laundry-service',()=>{
    console.log("mongosee connected");
});

//external middleware
const cors = require('cors')
app.use(cors())

//built-in middleware
app.use(express.json())


//custom middleware
app.use( require("./routes/auth"))


const PORT= 5000

//creating server
app.listen(PORT,()=>{
    console.log("app is listing at port 5000");
})

