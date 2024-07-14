const express = require('express');
const { getPosts, createPost } = require('../controllers/postController');

const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(createPost);

module.exports = router;
