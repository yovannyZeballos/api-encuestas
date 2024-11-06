const express = require('express');
const router = express.Router();
const SquadController = require('../controllers/squadController');
const MemberController = require('../controllers/memberController');

router.get('/', SquadController.listar);
router.get('/:id', SquadController.obtener);
router.get('/:idSquad/member', MemberController.listarPorSquad);

module.exports = router;