const express = require('express');
const router = express.Router();
const NivelCumplimientoController = require('../controllers/nivelCumplimientoController');

router.get('/', NivelCumplimientoController.listar);
router.get('/:id', NivelCumplimientoController.obtener);

module.exports = router;