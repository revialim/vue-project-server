const express = require('express');
const router = express.Router();

// const controllers = require('../controllers');
const { init, postUser } = require('../controllers');

router.get('/', init);
router.post('/adduser', postUser);

module.exports = router;
