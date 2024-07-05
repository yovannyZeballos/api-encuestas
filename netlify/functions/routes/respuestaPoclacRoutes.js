const express = require('express');
const router = express.Router();
const RespuestaPoclacController = require('../controllers/respuestaPoclacController');

router.post('/respuesta-poclac', RespuestaPoclacController.create);

module.exports = router;