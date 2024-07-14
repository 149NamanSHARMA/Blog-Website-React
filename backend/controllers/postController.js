const Post = require('../models/Post');

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Create a post
// @route   POST /api/posts
// @access  Public
const createPost = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    try {
        const newPost = new Post({ title, content });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getPosts,
    createPost,
};
