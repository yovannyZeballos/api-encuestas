const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../config/config'); // Ajusta la ruta según sea necesario
const Pagina = require('./pagina');

class Pregunta extends Model {}

Pregunta.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false, // Cambia a true si los IDs son autoincrementales
  },
  idPagina: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'paginas', // Nombre del modelo referenciado
      key: 'id', // Clave en el modelo referenciado
    },
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  multipleRespuestas: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize: dbConnection,
  modelName: 'preguntas',
  timestamps: false,
});

Pagina.hasMany(Pregunta, { foreignKey: 'idPagina', as: 'preguntas' });
Pregunta.belongsTo(Pagina, { foreignKey: 'idPagina', as: 'paginas' });


module.exports = Pregunta;