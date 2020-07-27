const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Article = require('../../models/Article');
const validateArticleInput = require('../../validation/articles');

router.get('/', (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nopostsfound: 'No articles found' }));
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateArticleInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newArticle = new Article({
      title: req.body.title,
      body: req.body.body,
      link: req.body.link
    });

    newArticle.save().then(article => res.json(article));
  }
);

module.exports = router;