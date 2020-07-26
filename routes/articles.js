const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Article = require('../../models/Article');
const validatePostInput = require('../../validation/articles');

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(articles))
    .catch(err => res.status(404).json({ nopostsfound: 'No articles found' }));
});

router.get('/user/:user_id', (req, res) => {
  Article.find({ user: req.params.user_id })
    .then(articles => res.json(articles))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No posts found from that user' }
      )
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newArticle = new Article({
      text: req.body.text,
      author: {user: req.user.id,
        username: req.user.username}
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;