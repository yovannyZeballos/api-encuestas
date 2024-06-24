const tribuModel = require('../models/tribuModel');

class TribuController {

    async listar(req, res) {
        try {
            const result = await tribuModel.listar();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al listar las tribus:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    async obtener(req, res) {
        try {
            const id = req.params.id;
            const rol = await tribuModel.obtener(id);
            if (rol) {
                res.json(rol);
            } else {
                res.status(404).send({ message: 'tribu no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la tribu:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }
}

module.exports = new TribuController();