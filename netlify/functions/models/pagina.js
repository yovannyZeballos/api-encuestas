const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../config/config'); // Ajusta la ruta según sea necesario
const Pregunta = require('./pregunta');
const Encuesta = require('./encuesta');

class Pagina extends Model {}

Pagina.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false, // Cambia a true si los IDs son autoincrementales
  },
  idEncuesta: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'encuestas', // Nombre del modelo referenciado
      key: 'id', // Clave en el modelo referenciado
    },
  },
  titulo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
}, {
  sequelize: dbConnection,
  modelName: 'paginas',
  timestamps: false
});

Pagina.belongsTo(Encuesta, { foreignKey: 'idEncuesta', as: 'encuestas' });
Encuesta.hasMany(Pagina, { foreignKey: 'idEncuesta', as: 'paginas' });

module.exports = Pagina;