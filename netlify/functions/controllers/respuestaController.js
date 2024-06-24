const respuestaModel = require('../models/respuestaModel');

class RespuestaController {

    async create(req, res) {
    try {
        const result = await respuestaModel.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating respuesta:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
}

module.exports = new RespuestaController();