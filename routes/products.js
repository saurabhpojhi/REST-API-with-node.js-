const express = require('express');

const router = express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'handle Get request to produts'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'handle Post request to produts'
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message:'You discoverd the special ID'
        });
    }else{
        res.status(200).json({
            message:'You passed ID'
        });
    }
})
module.exports = router;