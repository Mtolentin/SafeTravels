const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

router.get('/user/:user_id', (req, res) => {
  Post.find({ 'author.user': req.params.user_id })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No posts found from that user' }
      )
    );
});

router.get('/article/:article_id', (req, res) => {
  Post.find({ origin: req.params.article_id })
    .then(posts => res.json(posts))
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // const newPost = new Post({
    //   text: req.body.text,
    //   origin: req.params.article_id,
    //   author: {user: req.user.id,
    //     username: req.user.username}
    // });

    const newPost = new Post({
      text: req.body.text,
      origin: req.body.origin,
      author: {user: req.user.id,
        username: req.user.username}
    });

    //console.log(newPost);

    newPost.save().then(post => res.json(post));
  }
);

router.delete('/:id', function (req, res) {
  
  //console.log(req);
  Post.deleteOne( { _id: req.params.id } )
    .then(() => res.json({success: 'deletion successful'}))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No posts found for that id' }
    )
  );
  // console.log(req);
  // console.log(res);
  console.log('item deleted');

});

router.patch('/:id', function (req, res) {

  Post.updateOne( { text: req.body.text } )
    .then(() => res.json({success: 'update successful'}))  
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No posts found for that id' }
    )
  );

});

module.exports = router;