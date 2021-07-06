const express = require('express');
const router = express.Router();
const listRepoController = require('../controller/listRepoController')

router.get('/listTakeRepos', listRepoController.takeNetRepos)

module.exports = router;