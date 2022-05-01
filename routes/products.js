const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'handle Get request to produts'
    });
});

router.post('/',(req,res,next)=>{
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message:'created product'
    });
});

router.get('/:productsId',(req,res,next)=>{
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

router.patch('/:productsId',(req,res,next)=>{
        res.status(200).json({
            message:'Update Product'
        });
})

router.delete('/:productsId',(req,res,next)=>{
    res.status(200).json({
        message:'Delete Product'
    });
})
module.exports = router;