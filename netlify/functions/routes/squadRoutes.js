const express = require('express');
const router = express.Router();
const SquadController = require('../controllers/squadController');

router.get('/squad', SquadController.listar);
router.get('/squad/:id', SquadController.obtener);
router.get('/tribu/:idTribu/squad', SquadController.listarPorTribu);

module.exports = router;