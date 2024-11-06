const EncuestaPoclac = require('../models/encuestaPoclacModel');
const respuestaModel = require('../models/respuestaModel');

class RespuestaPocalcController {

    async create(req, res) {
        try {
            const result = await respuestaModel.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error creating respuesta:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async listar(req, res) {
        try {
            const encuesta = await EncuestaPoclac.findAll({
                order: ['id']
            });
            res.json(encuesta);
        } catch (error) {
            console.error('Error al obtener la encuesta poclac:', error);
            res.status(500).send({ message: 'Internal server error' });
        }
    }
}

module.exports = new RespuestaPocalcController();