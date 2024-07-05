const { Model, DataTypes } = require('sequelize');
const dbConnection = require('./../config/config'); // Ajusta la ruta a tu archivo de configuración de Sequelize

class Encuesta extends Model {}

Encuesta.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subtitulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  preguntasAleatorias: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  opcionesAleatorias: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, {
  sequelize: dbConnection,
  modelName: 'encuestas',
  timestamps: false,
});

module.exports = Encuesta;