const express = require('express');

const cors = require('cors');

// Creating express server
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Importing all the routes
const produtsroute=require("./routes/products.js");
const orderroute=require("./routes/order.js");
const api=require("./routes/API.js");
  
// connnect database 
mongoose.connect('mongodb://localhost:27017/REST_API_Test')
.then(conn=>{
    console.log('MongoDB connected')
})
.catch(error=>{
    console.log("Error:"+ error.Message)
})


app.use(morgan('dev'));   // this is show log in terminal
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());  

app.use((req, res, next)=>{    // this is main error handler dlew
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE,GET');
       return res.status(200).json({});
    }
    next();
})

// Handling routes request
app.use("/products",produtsroute);
app.use("/order",orderroute);
app.use("/API",api)

// this is middleware error handler to handle the error 
app.use((req,res,next)=>{
    const error = new error('Not found');
    error.status(404);
    next(error);
});

// handle error in middleware
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        message:error.message
    })
})

module.exports =app;

