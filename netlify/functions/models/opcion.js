const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../config/config');
const Pregunta = require('./pregunta');

class Opcion extends Model {}

Opcion.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Asumiendo que los IDs son autoincrementales
  },
  idPregunta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'preguntas', // Nombre del modelo referenciado
      key: 'id', // Clave en el modelo referenciado
    },
  },
  descripcion: {
    type: DataTypes.STRING, // Ajusta el tamaño según tus necesidades
    allowNull: true,
  },
  correcta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, {
  sequelize: dbConnection,
  modelName: 'opciones',
  timestamps: false
});

Opcion.belongsTo(Pregunta, { foreignKey: 'idPregunta', as: 'preguntas' });
Pregunta.hasMany(Opcion, { foreignKey: 'idPregunta', as: 'opciones' });

module.exports = Opcion;