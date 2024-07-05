const { Sequelize } = require('sequelize');

// Configuración de la conexión
const dbConnection = new Sequelize('encuesta', 'encuesta_owner', '1xXLcsH9MDGe', {
  host: 'ep-shy-paper-a59r25fa.us-east-2.aws.neon.tech',
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