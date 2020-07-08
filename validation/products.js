const Validator = require('validator');
const validText = require('./valid-text');

export const validateProductString = (data) => {
    data.text = validText(data.text) ? data.text : '';
    if (Validator.isEmpty(data.text)) {
        errors.text = 'This field is required!';
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }
}

export const validateProductURL = (data) => {
    if (!Validator.isURL(data.text)) {
        errors.text = 'Please provide a valid URL';
        return {
            errors,
            isValid: Object.keys(errors.length) === 0
        }
    }
}