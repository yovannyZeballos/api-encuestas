const express = require('express');
const router = express.Router();
const RespuestaController = require('../controllers/respuestaController');

router.post('/', RespuestaController.create);
router.get('/:idEncuesta/:dni', RespuestaController.obtenerRespuestasPorDni);

module.exports = router;