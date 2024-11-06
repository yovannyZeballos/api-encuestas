const { Model, DataTypes } = require('sequelize');
const dbConnection = require('./../config/config'); // Ajusta la ruta a tu archivo de configuración de Sequelize

class Usuario extends Model {}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  sequelize: dbConnection,
  modelName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;