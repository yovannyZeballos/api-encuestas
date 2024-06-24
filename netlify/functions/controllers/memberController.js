const memberModel = require('../models/memberModel');

class MemberController {

    async listar(req, res) {
        try {
            const result = await memberModel.listar();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al listar los members:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    async obtener(req, res) {
        try {
            const {id} = req.params;
            const rol = await memberModel.obtener(id);
            if (rol) {
                res.json(rol);
            } else {
                res.status(404).send({ message: 'squad no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener los members:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    async listarPorSquad(req, res) {
        try {
            const {idSquad} = req.params;
            const result = await memberModel.listarPorSquad(idSquad);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al listar los members:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }
}

module.exports = new MemberController();