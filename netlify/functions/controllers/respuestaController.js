const { Respuesta, RespuestaDetalle, Pregunta, Opcion, Pagina } = require('../models');

const dbConnection = require('../config/config'); 

class RespuestaController {

    async create(req, res) {
        const { detalles, ...respuestaData } = req.body;
        const t = await dbConnection.transaction();
        try {

            const respuestaExistente = await Respuesta.findOne({ where: { correo: respuestaData.correo } });
            if (respuestaExistente) {
                return res.status(400).json({ message: 'Ya existe una respuesta con este correo' });
            }
            
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

    async obtenerRespuestasPorEncuesta(req, res) {
        const { idEncuesta } = req.params;

        try {
             // Contar el total de registros
        const totalRegistros = await Pregunta.count({
            include: [{
                model: Pagina,
                as: 'pagina',
                where: { idEncuesta }
            }]
        });
    
        // Realizar la consulta principal
        const respuestas = await Respuesta.findAll({
            attributes: [
                'id',
                'nombres',
                'correo',
                'fecha',
                [dbConnection.literal(`(100 * COUNT(1) / CAST(${totalRegistros} AS NUMERIC))`), 'porcentaje'],
                [dbConnection.literal(`COUNT(1) || '/' || ${totalRegistros}`), 'correctas']
            ],
            include: [{
                model: RespuestaDetalle,
                as: 'respuestaDetalles',
                attributes: [], // No necesitamos atributos adicionales de RespuestaDetalle
                include: [
                    {
                        model: Pregunta,
                        as: 'pregunta',
                        attributes: [], // No necesitamos atributos adicionales de Pregunta
                        include: [{
                            model: Pagina,
                            as: 'pagina',
                            attributes: [], // No necesitamos atributos adicionales de Pagina
                            where: { idEncuesta }
                        }]
                    },
                    {
                        model: Opcion,
                        as: 'opcion',
                        attributes: [], // No necesitamos atributos adicionales de Opcion
                        where: { correcta: true }
                    }
                ]
            }],
            group: ['Respuesta.id', 'Respuesta.nombres', 'Respuesta.correo', 'Respuesta.fecha']
        });
        res.status(200).json(respuestas);
        } catch (error) {
            console.error('Error creating respuesta with details:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async obtenerRespuestasPorId(req, res) {
        const { idEncuesta, id  } = req.params;

        try {
            const respuesta = await Respuesta.findOne({where: { id, idEncuesta }, 
                include: [{
                    model: RespuestaDetalle,
                    as: 'respuestaDetalles',
                    include: [
                        {
                            model: Pregunta,
                            as: 'pregunta',
                            include: [
                                {
                                    model: Opcion,
                                    as: 'opcion'
                                }
                            ]
                        }
                    ]
                }]
            });
            
            console.log(respuesta);
            
            if (!respuesta) {
                return res.status(404).json({ message: 'Respuesta no encontrada' });
            }
            const preguntas= respuesta.respuestaDetalles.map(detalle => ({
                id: detalle.id,
                numero: detalle.pregunta.numero,
                descripcion: detalle.pregunta.descripcion,
                opciones: detalle.pregunta.opcion.map(opcion => ({
                    id: opcion.id,
                    descripcion: opcion.descripcion,
                    correcta: opcion.correcta,
                    marcada: opcion.id === detalle.idOpcion,
                    esCorrecta: opcion.correcta && opcion.id === detalle.idOpcion
                }))
            }));

            res.status(200).json(preguntas);
        } catch (error) {
            console.error('Error creating respuesta with details:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async obtenerRespuestasPorDni(req, res) {
        const { idEncuesta, dni  } = req.params;

        try {
            const respuesta = await Respuesta.findOne({where: { dni, idEncuesta }, 
                include: [{
                    model: RespuestaDetalle,
                    as: 'respuestaDetalles',
                    include: [
                        {
                            model: Pregunta,
                            as: 'pregunta',
                            include: [
                                {
                                    model: Opcion,
                                    as: 'opcion'
                                }
                            ]
                        }
                    ]
                }]
            });
            
            console.log(respuesta);
            
            if (!respuesta) {
                return res.status(404).json({ message: 'Respuesta no encontrada' });
            }
            const preguntas= respuesta.respuestaDetalles.map(detalle => ({
                id: detalle.id,
                numero: detalle.pregunta.numero,
                descripcion: detalle.pregunta.descripcion,
                opciones: detalle.pregunta.opcion.map(opcion => ({
                    id: opcion.id,
                    descripcion: opcion.descripcion,
                    correcta: opcion.correcta,
                    marcada: opcion.id === detalle.idOpcion,
                    esCorrecta: opcion.correcta && opcion.id === detalle.idOpcion
                }))
            }));

            res.status(200).json(preguntas);
        } catch (error) {
            console.error('Error creating respuesta with details:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new RespuestaController();