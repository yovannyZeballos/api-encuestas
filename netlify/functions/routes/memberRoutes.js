const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/memberController');

router.get('/member', MemberController.listar);
router.get('/member/:id', MemberController.obtener);
router.get('/squad/:idSquad/member', MemberController.listarPorSquad);

module.exports = router;