const express = require('express');
const router = express.Router();
const RespuestaController = require('../controllers/respuestaController');

// Create a new respuesta
router.post('/', RespuestaController.create);

module.exports = router;