const express = require('express');
const app = express();

const productRoutes = require('./routes/products');

app.use('/products',productRoutes);

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'it works '
//     })
// });

module.exports =app;