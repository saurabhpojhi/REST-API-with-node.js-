const express = require('express');

// Creating express server
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

// Importing all the routes
const produtsroute=require("./routes/products.js");
const orderroute=require("./routes/order.js");
  
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Handling routes request
app.use("/products",produtsroute);
app.use("/order",orderroute);

// this is middleware error handler to handle the error 
app.use((req,res,next)=>{
    const error = new error('Not found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        message:error.message
    })
})

module.exports =app;

