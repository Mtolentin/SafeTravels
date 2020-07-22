const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Validator = require('validator');

const Activity = require('../../models/Activity');
const validateMultipleInput = require('../../validation/multi');

router.post('/',
    passport.authenticate('jwt', { session: false }),

    (req, res) => {
        const { errors, isValid } = validateMultipleInput(req.body);


        if (!isValid) {
            return res.status(400).json(errors);
        }

        if (Validator.isEmpty(req.body.endDate)) {
            errors.text = 'This field is required! - End Date';
            return res.status(400).json(errors);
        }
        const newActivity = new Activity({
            name: req.body.name,
            description: req.body.description,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            pictureURL: req.body.pictureURL,
            beginDate: req.body.beginDate || "",
            endDate: req.body.endDate,
            link1: req.body.link1,
            link2: req.body.link2 || ""
        });

        newActivity.save().then(activity => res.json(activity));
    }
);

router.get('/', (req, res) => {
    Activity.find()
        .sort({ date: -1 })
        .then(activities => res.json(activities))
});

module.exports = router;