const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Validator = require('validator');

const Hotel = require('../../models/Hotel');
const validateMultipleInput = require('../../validation/multi');

router.post('/',
    passport.authenticate('jwt', { session: false }),

    (req, res) => {
        const { errors, isValid } = validateMultipleInput(req.body);


        if (!isValid) {
            return res.status(400).json(errors);
        }

        if (Validator.isEmpty(req.body.rating)) {
            errors.text = 'This field is required! - rating';
            return res.status(400).json(errors);
        }
        const newHotel = new Hotel({
            name: req.body.name,
            description: req.body.description,
            address1: req.body.address1 || "",
            address2: req.body.address2 || "",
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            rating: req.body.rating,
            pictureURL: req.body.pictureURL,
            link1: req.body.link1,
            link2: req.body.link2 || ""
        });

        newHotel.save().then(hotel => res.json(hotel));
    }
);

router.get('/', (req, res) => {
    Hotel.find()
        .sort({ date: -1 })
        .then(hotels => res.json(hotels))
});

module.exports = router;