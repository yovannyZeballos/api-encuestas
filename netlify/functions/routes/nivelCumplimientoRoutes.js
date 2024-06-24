const express = require('express');
const router = express.Router();
const NivelCumplimientoController = require('../controllers/nivelCumplimientoController');

router.get('/nivel-cumplimiento', NivelCumplimientoController.listar);
router.get('/nivel-cumplimiento/:id', NivelCumplimientoController.obtener);

module.exports = router;