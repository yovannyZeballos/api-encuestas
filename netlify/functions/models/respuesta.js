const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../config/config'); // Asegúrate de ajustar la ruta según sea necesario
const Encuesta = require('./encuesta'); // Asegúrate de que la ruta al modelo Encuesta es correcta

class Respuesta extends Model {}

Respuesta.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombres: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  idEncuesta: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: Encuesta, // Este es el modelo al que se hace referencia
      key: 'id', // La clave en el modelo referenciado
    },
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize: dbConnection,
  modelName: 'Respuesta',
  tableName: 'respuestas',
  timestamps: false, // Ajusta según si tu tabla maneja o no timestamps (createdAt, updatedAt)
});


module.exports = Respuesta;