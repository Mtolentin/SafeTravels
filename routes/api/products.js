const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Product = require('../../models/Product');
const { validateProductString, validateProductURL
    } = require('../../validation/products');

router.post('/',
    passport.authenticate('jwt', { session: false }),
    
    (req, res) => {
        //{errors, isValid}
        let check = validateProductString(req.body.name);
        check = validateProductString(req.body.category);
        check = validateProductString(req.body.description);

        if (req.body.rating < 1 || req.body.rating > 5) {
            check.errors.text += 'Rating must by between 1 and 5';
            check.isValid += Object.keys(errors).length === 0;
        }

        if (req.body.link1) {
            let check = validateProductURL(req.body.link1);
        }

        if (req.body.link2) {
            let check = validateProductURL(req.body.link2);
        }

        if (req.body.keyword1) {
            let check = validateProductString(req.body.keyword1);
        }

        if (req.body.keyword2) {
            let check = validateProductString(req.body.keyword2);
        }


        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newProduct = new Product({
            name: req.body.text,
            category: req.body.category,
            description: red.body.description,
            rating: req.body.rating,
            link1: req.body.link1 || "",
            link2: req.body.link2 || "",
            keyword1: req.body.keyword1 || "",
            keyword2: req.body.keyword2 || ""
        });

        newProduct.save().then(product => res.json(product));
    }
);

router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(404).json({ noproducts: 'No products found' }));
});

module.exports = router;