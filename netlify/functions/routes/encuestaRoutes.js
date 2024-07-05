const express = require('express');
const router = express.Router();
const EncuestaController = require('../controllers/encuestaController');

router.get('/encuesta/:id', EncuestaController.obtener);
router.get('/encuesta/:id/preguntas', EncuestaController.preguntas);

module.exports = router;