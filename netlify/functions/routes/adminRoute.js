const express = require('express');
const RespuestaController = require('../controllers/respuestaController');
const RespuestaPoclacController = require('../controllers/respuestaPoclacController');

const router = express.Router();

router.get('/listar-resultados/:idEncuesta', RespuestaController.obtenerRespuestasPorEncuesta);
router.get('/listar-poclac', RespuestaPoclacController.listar);
router.get('/respuesta/:idEncuesta/:id', RespuestaController.obtenerRespuestasPorId);
module.exports = router;