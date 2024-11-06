const express = require('express');
const router = express.Router();
const EncuestaController = require('../controllers/encuestaController');

router.get('/:id', EncuestaController.obtener);
router.get('/:id/preguntas', EncuestaController.preguntas);

module.exports = router;