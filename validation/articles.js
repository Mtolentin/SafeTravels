const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateArticleInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 1, max: 300 })) {
    errors.text = 'Title must be between 1 and 300 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.text = 'Title field is required';
  }

  data.body = validText(data.body) ? data.body : '';

  if (!Validator.isLength(data.body, { min: 1, max: 1000 })) {
    errors.text = 'Body must be between 1 and 1000 characters';
  }

  if (Validator.isEmpty(data.body)) {
    errors.text = 'Text field is required';
  }

  data.link = validText(data.link) ? data.link : '';

  if (!Validator.isURL(data.link)) {
    errors.text = 'Invalid link!';
  }

  if (Validator.isEmpty(data.link)) {
    errors.text = 'Link field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};