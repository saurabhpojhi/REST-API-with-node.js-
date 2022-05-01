const express = require('express');
const router = express.Router();

router.get('/:ordersId',(req,res,next)=>{ 
        res.status(200).json({
            message:'Order was  created'
        });
})

module.exports = router;