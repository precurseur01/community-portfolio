const express = require('express');
const router = express.Router();
const projetController = require('../controllers/projets');
const { authenticate } = require('../middlewares/auth');

router.use(authenticate);
router.get('/', projetController.getAll);
router.get('/:id', projetController.getOne);
router.post('/:id/services', projetController.addService);

module.exports = router;
