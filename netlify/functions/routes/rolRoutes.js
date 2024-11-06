const express = require('express');
const router = express.Router();
const RolController = require('../controllers/rolController');

router.get('/', RolController.listar);
router.get('/:id', RolController.obtener);

module.exports = router;