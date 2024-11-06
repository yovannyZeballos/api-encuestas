const express = require('express');
const router = express.Router();
const PreguntaController = require('../controllers/preguntaController');

router.get('/:id', PreguntaController.listar);

module.exports = router;