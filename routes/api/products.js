const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Product = require('../../models/Product');
const validateProductInput = require('../../validation/products');

router.post('/',
    passport.authenticate('jwt', { session: false }),
    
    (req, res) => {
        const {errors, isValid} = validateProductInput(req.body);


        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newProduct = new Product({
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            rating: req.body.rating,
            pictureURL: req.body.pictureURL
        });

        newProduct.save().then(product => res.json(product));
    }
);

router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
});

module.exports = router;