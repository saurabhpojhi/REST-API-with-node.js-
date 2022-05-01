const express = require('express');
const app = express();

app.use(require('./routes/products'))
app.use(require('./routes/orders'))

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'it works '
//     })
// });

module.exports =app;