const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Validator = require('validator');

const Restaurant = require('../../models/Restaurant');
const validateMultipleInput = require('../../validation/multi');

router.post('/',
    passport.authenticate('jwt', { session: false }),
    
    (req, res) => {
        const {errors, isValid} = validateMultipleInput(req.body);


        if (!isValid) {
            return res.status(400).json(errors);
        }
    
        if (Validator.isEmpty(req.body.category)) {
            errors.text = 'This field is required! - category';
            return res.status(400).json(errors);
        }

        const newRestaurant = new Restaurant({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            address1: req.body.address1 || "",
            address2: req.body.address2 || "",
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            pictureURL: req.body.pictureURL,
            link1: req.body.link1,
            link2: req.body.link2 || ""
        });

        newRestaurant.save().then(restaurant => res.json(restaurant));
    }
);

router.get('/', (req, res) => {
    Restaurant.find()
        .sort({ date: -1 })
        .then(restaurants => res.json(restaurants))
});

module.exports = router;