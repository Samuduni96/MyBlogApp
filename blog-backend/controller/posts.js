const Post = require('../models/Post');

// Create Post
const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        //console.log("Post saved:", savedPost);
        res.status(200).json(savedPost);
    } catch (err) {
        console.error("Error saving post:", err);
        res.status(500).json(err);
    }
};

// Update Post
const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    { $set: req.body },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can update only your posts');
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get one Post
const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        //console.log(post);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get all Post
const getAllPosts = async (req, res) => {
    const username = req.query.user;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete Post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(post);
                res.status(200).json('Post has been deleted');
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can update only your posts');
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createPost, updatePost, deletePost, getPost, getAllPosts };