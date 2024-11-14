const Opcion = require('../models/opcion');
const Pagina = require('../models/pagina');
const Pregunta = require('../models/pregunta');
const Encuesta = require('./../models/encuesta');

class EncuestaController {

    async obtener(req, res) {
        try {
            const { id } = req.params;
            const encuesta = await Encuesta.findByPk(id);
            if (encuesta) {
                res.json(encuesta);
            } else {
                res.status(404).send({ message: 'Encuesta no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener la encuesta:', error);
            res.status(500).send({ message: 'Internal server error' });
        }
    }

    async preguntas(req, res) {
        try {
            const { id } = req.params;
            const encuesta = await Encuesta.findOne({
                where: { id },
                include: [{
                    model: Pagina,
                    as: 'pagina',
                    include: [{
                        model: Pregunta,
                        as: 'preguntas',
                        include: [{
                            model: Opcion,
                            as: 'opcion'
                        }]
                    }]
                }]
            });

            if (!encuesta) {
                return res.status(404).send({ message: 'Encuesta no encontrado' });
            }

            const { titulo, pagina, estado, preguntasAleatorias, opcionesAleatorias } = encuesta;

            console.log(encuesta.pagina[0].preguntas);

            const paginasDto = pagina.map(({ titulo, descripcion, preguntas }) => ({
                titulo,
                descripcion,
                preguntas: preguntas.map(({ id, descripcion, multipleRespuestas, numero, opcion }) => ({
                    id,
                    descripcion,
                    multipleRespuestas,
                    numero,
                    opciones: opcion.map(({ id, descripcion }) => ({ id, descripcion }))
                }))
            }));

            res.json({ titulo, paginas: paginasDto, estado, preguntasAleatorias, opcionesAleatorias });
        } catch (error) {
            console.error('Error al obtener la encuesta:', error);
            res.status(500).send({ message: 'Internal server error' });
        }
    }

    async listar(req, res) {
        try {
            const encuesta = await Encuesta.findAll();
            res.json(encuesta);
        } catch (error) {
            console.error('Error al listar las encuestas:', error);
            res.status(500).send({ message: 'Error al listar las encuestas' });
        }
    }
}

module.exports = new EncuestaController();
