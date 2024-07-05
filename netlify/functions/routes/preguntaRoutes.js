const express = require('express');
const router = express.Router();
const PreguntaController = require('../controllers/preguntaController');

router.get('/pregunta/:id', PreguntaController.listar);

module.exports = router;