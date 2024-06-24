const express = require('express');
const router = express.Router();
const TribuController = require('../controllers/tribuController');

router.get('/tribu', TribuController.listar);
router.get('/tribu/:id', TribuController.obtener);

module.exports = router;