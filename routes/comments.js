const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentsController = require('../controllers/commentsControllers');

router.post('/create', commentsController.create);
console.log('comments route opened')

module.exports = router;