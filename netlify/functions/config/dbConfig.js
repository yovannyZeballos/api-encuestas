const { Pool } = require('pg');
require('dotenv').config();

// Opciones de SSL, ajusta las rutas de los certificados según sea necesario
const sslOptions = {
  rejectUnauthorized: false, // Esto permite conexiones a servidores con certificados autofirmados; para producción, considera obtener un certificado válido o establecer esto en true y proporcionar los certificados necesarios.
  // Si tienes certificados específicos, puedes descomentar y ajustar las siguientes líneas:
  // ca: fs.readFileSync('/ruta/a/tu/certificado-ca.crt').toString(),
  // key: fs.readFileSync('/ruta/a/tu/llave-privada.key').toString(),
  // cert: fs.readFileSync('/ruta/a/tu/certificado.crt').toString(),
};

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PWD,
  port: 5432, // default PostgreSQL port
  ssl: sslOptions,
});

module.exports = pool;