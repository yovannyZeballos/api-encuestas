const nivelCumplimientoModel = require('../models/nivelCumplimientoModel');

class NivelCumplimientoController {

    async listar(req, res) {
        try {
            const result = await nivelCumplimientoModel.listar();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al listar los Niveles Cumplimiento:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    async obtener(req, res) {
        try {
            const {id} = req.params;
            const rol = await nivelCumplimientoModel.obtener(id);
            if (rol) {
                res.json(rol);
            } else {
                res.status(404).send({ message: 'Nivel Cumplimiento no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el Nivel Cumplimiento:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    
}

module.exports = new NivelCumplimientoController();