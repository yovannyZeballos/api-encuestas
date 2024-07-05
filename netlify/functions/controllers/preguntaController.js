const Pregunta = require('../models/pregunta');
const Pagina = require('../models/pagina');
const Opcion = require('../models/opcion');
const Encuesta = require('../models/encuesta');

class PreguntaController {

    async listar(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const preguntas = await Pagina.findAll({
                where: { idEncuesta: id },
                include: [{
                    model: Pregunta,
                    as: 'preguntas',
                    include: [{
                        model: Opcion,
                        as: 'opciones'
                    }]
                }]
            });
            res.json(preguntas);
        } catch (error) {
            console.error('Error al obtener la encuesta:', error);
            res.status(500).send({ message: 'Internal server error' });
        }
    }
}

module.exports = new PreguntaController();
