const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/memberController');

router.get('/', MemberController.listar);
router.get('/:id', MemberController.obtener);

module.exports = router;