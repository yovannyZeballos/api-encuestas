const Respuesta = require('../models/respuesta');
const RespuestaDetalle = require('../models/respuestaDetalle');
const sequelize = require('../config/config'); 

class RespuestaController {

    async create(req, res) {
        const { detalles, ...respuestaData } = req.body;
        const t = await sequelize.transaction();
        try {

            respuestaData.fecha = new Date();
            const respuesta = await Respuesta.create(respuestaData, { transaction: t });
            const detallesPromesas = detalles.map(detalle => 
                RespuestaDetalle.create({ ...detalle, idRespuesta: respuesta.id }, { transaction: t })
            );
            await Promise.all(detallesPromesas);
            await t.commit();
            res.status(201).json(respuesta);
        } catch (error) {
            await t.rollback();
            console.error('Error creating respuesta with details:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new RespuestaController();