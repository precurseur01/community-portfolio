const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients');
const { authenticate } = require('../middlewares/auth');

router.use(authenticate);
router.get('/', clientController.getAll);
router.get('/:id', clientController.getOne);
router.post('/', clientController.create);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.delete);
router.get('/:id/dashboard', clientController.getDashboard);

module.exports = router;
