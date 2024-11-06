const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../config/config'); // Asegúrate de ajustar la ruta según sea necesario
const Respuesta = require('./respuesta'); // Asegúrate de que la ruta al modelo Respuesta es correcta
const Pregunta = require('./pregunta'); // Asegúrate de que la ruta al modelo Pregunta es correcta
const Opcion = require('./opcion'); // Asegúrate de que la ruta al modelo Opcion es correcta

class RespuestaDetalle extends Model {}

RespuestaDetalle.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Asumiendo que los IDs son autoincrementales
    allowNull: false,
  },
  idRespuesta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Respuesta, // Nombre del modelo referenciado
      key: 'id', // Clave en el modelo referenciado
    },
  },
  idPregunta: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Pregunta, // Nombre del modelo referenciado
      key: 'id', // Clave en el modelo referenciado
    },
  },
  idOpcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Opcion, // Nombre del modelo referenciado
      key: 'id', // Clave en el modelo referenciado
    },
  },
}, {
  sequelize: dbConnection,
  modelName: 'RespuestaDetalle',
  tableName: 'respuestaDetalles',
  timestamps: false // Ajusta según si tu tabla maneja o no timestamps
});

// Definir las relaciones


module.exports = RespuestaDetalle;