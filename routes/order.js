const express = require('express');
const router = express.Router();


// Handle incoming request to /order
router.get('/:orderId',(req,res,next)=>{ 
        res.status(200).json({
            message:'Order was  created'
        });
})

router.post('/',(req,res,next)=>{ 
    const order ={
        productId:req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message:'Order successfull '
    });
})


router.post('/:orderId',(req,res,next)=>{ 
    res.status(200).json({
        message:'Order was  fetch'
    });
})

module.exports = router;