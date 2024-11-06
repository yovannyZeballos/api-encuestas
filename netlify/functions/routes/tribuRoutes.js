const express = require('express');
const router = express.Router();
const TribuController = require('../controllers/tribuController');
const SquadController = require('../controllers/squadController');

router.get('/', TribuController.listar);
router.get('/:id', TribuController.obtener);
router.get('/:idTribu/squad', SquadController.listarPorTribu);

module.exports = router;