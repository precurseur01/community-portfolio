const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formations');

router.get('/', formationController.getAll);
router.get('/:id', formationController.getOne);

module.exports = router;
