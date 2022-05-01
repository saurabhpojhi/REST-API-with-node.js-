const express = require('express');
const router = express.Router();


// Handle incoming request to /order
router.get('/:orderId',(req,res,next)=>{ 
        res.status(200).json({
            message:'Order was  created'
        });
})

router.post('/:orderId',(req,res,next)=>{ 
    res.status(200).json({
        message:'Order was  fetch'
    });
})

module.exports = router;