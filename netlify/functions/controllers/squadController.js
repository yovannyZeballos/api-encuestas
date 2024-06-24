const squadModel = require('../models/squadModel');

class SquadController {

    async listar(req, res) {
        try {
            const result = await squadModel.listar();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al listar los squads:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    async obtener(req, res) {
        try {
            const {id} = req.params;
            const rol = await squadModel.obtener(id);
            if (rol) {
                res.json(rol);
            } else {
                res.status(404).send({ message: 'squad no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener los squads:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    async listarPorTribu(req, res) {
        try {
            const {idTribu} = req.params;
            const result = await squadModel.listarPorTribu(idTribu);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al obtener los squads:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }
}

module.exports = new SquadController();