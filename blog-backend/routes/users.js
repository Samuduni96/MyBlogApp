const express = require('express');
const controller = require('../controller/users');

const router = express.Router();

router.get('/:userId', controller.getUser);

module.exports = router;