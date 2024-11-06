const express = require('express');
const router = express.Router();
const RespuestaController = require('../controllers/respuestaController');

router.post('/', RespuestaController.create);

module.exports = router;