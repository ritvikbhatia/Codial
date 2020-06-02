const express = require('express');

const router = express.Router();

const posts_api=require('../../../controllers/api/v1/posts_api');

router.get('/',posts_api.index);
router.delete('/:id',posts_api.destroy);

module.exports = router;