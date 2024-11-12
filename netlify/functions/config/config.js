const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración de la conexión
const dbConnection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PWD , {
  host: process.env.DB_SERVER,
  schema: 'public',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
    }
  }
});

// Verificar la conexión
async function verificarConexion() {
  try {
    await dbConnection.authenticate();
    console.log('Conexión establecida exitosamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

verificarConexion();

module.exports = dbConnection;