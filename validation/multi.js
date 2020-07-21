const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateMultipleInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.category = validText(data.category) ? data.category : '';
    data.description = validText(data.description) ? data.description : '';
    data.rating = validText(data.rating) ? data.rating : '';
    data.pictureURL = validText(data.pictureURL) ? data.pictureURL : '';

    if (Validator.isEmpty(data.name)) {
        errors.text = 'This field is required! - Name';
    }

    if (Validator.isEmpty(data.description)) {
        errors.text = 'This field is required! - Description';
    }

    if (Validator.isEmpty(data.latitude)) {
        errors.text = 'This field is required! - Latitude';
    }

    if (Validator.isEmpty(data.longitude)) {
        errors.text = 'This field is required! - Longitude';
    }

    if (Validator.isEmpty(data.pictureURL)) {
        errors.text = 'This field is required! - PictureURL';
    }

    if (Validator.isEmpty(data.link1)) {
        errors.text = 'This field is required! - Link1';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
};
