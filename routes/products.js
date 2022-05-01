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

module.exports = router;