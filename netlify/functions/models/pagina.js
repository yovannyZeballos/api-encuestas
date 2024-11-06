const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../config/config'); // Ajusta la ruta según sea necesario
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
      model: Encuesta, // Nombre del modelo referenciado
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
  modelName: 'Pagina',
  tableName: 'paginas',
  timestamps: false
});

Pagina.belongsTo(Encuesta, { foreignKey: 'idEncuesta', as: 'encuesta' });
Encuesta.hasMany(Pagina, { foreignKey: 'idEncuesta', as: 'pagina' });

module.exports = Pagina;