const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs=>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err=>{
        console.log(err);
        res.status(200).json({
            error:err
        })
    })
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err)
        });
    res.status(200).json({
        message: 'created product successfully'
    });
});

// router.get('/:productsId', (req, res, next) => {
//     const id = req.params.productId;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'You discoverd the special ID'
//         });
//     } else {
//         res.status(200).json({
//             message: 'You passed ID'
//         });
//     }
// })

router.get('/:productsId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

router.patch('/:productsId', (req, res, next) => {
    res.status(200).json({
        message: 'Update Product'
    });
})

router.delete('/:productsId', (req, res, next) => {
    res.status(200).json({
        message: 'Delete Product'
    });
})
module.exports = router;