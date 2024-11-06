const Respuesta = require('./respuesta');
const RespuestaDetalle = require('./respuestaDetalle');
const Pregunta = require('./pregunta');
const Opcion = require('./opcion');
const Pagina = require('./pagina');

// Definir asociaciones
Respuesta.hasMany(RespuestaDetalle, { foreignKey: 'idRespuesta', as: 'respuestaDetalles' });
RespuestaDetalle.belongsTo(Respuesta, { foreignKey: 'idRespuesta', as: 'respuesta' });

Pregunta.hasMany(RespuestaDetalle, { foreignKey: 'idPregunta', as: 'preguntaDetalles' });
RespuestaDetalle.belongsTo(Pregunta, { foreignKey: 'idPregunta', as: 'pregunta' });

Opcion.hasMany(RespuestaDetalle, { foreignKey: 'idOpcion', as: 'opcionDetalles' });
RespuestaDetalle.belongsTo(Opcion, { foreignKey: 'idOpcion', as: 'opcion' });

Pagina.hasMany(Pregunta, { foreignKey: 'idPagina', as: 'preguntas' });
Pregunta.belongsTo(Pagina, { foreignKey: 'idPagina', as: 'pagina' });

module.exports = {
    Respuesta,
    RespuestaDetalle,
    Pregunta,
    Opcion,
    Pagina
};