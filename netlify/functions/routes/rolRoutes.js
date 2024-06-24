const express = require('express');
const router = express.Router();
const RolController = require('../controllers/rolController');

router.get('/rol', RolController.listar);
router.get('/rol/:id', RolController.obtener);

module.exports = router;