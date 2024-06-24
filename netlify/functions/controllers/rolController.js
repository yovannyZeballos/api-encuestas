const rolModel = require('../models/rolModel');

class RolController {

    async listar(req, res) {
        try {
            const result = await rolModel.listar();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al listar los roles:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    async obtener(req, res) {
        try {
            const id = req.params.id;
            const rol = await rolModel.obtener(id);
            if (rol) {
                res.json(rol);
            } else {
                res.status(404).send({ message: 'Rol no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el rol:', error);
            res.status(500).send({ message: 'Internal server error'});
        }
    }

    
}

module.exports = new RolController();