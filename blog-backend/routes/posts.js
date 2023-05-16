const express = require('express');
const controller = require('../controller/posts');

const router = express.Router();

router.post('/create', controller.createPost);
router.post('/update/:id', controller.updatePost);
router.delete('/delete/:id', controller.deletePost);
router.get('/:id', controller.getPost);
router.get('/', controller.getAllPosts);

module.exports = router;
