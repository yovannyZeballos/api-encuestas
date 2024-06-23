const { Pool } = require('pg');

// Opciones de SSL, ajusta las rutas de los certificados según sea necesario
const sslOptions = {
  rejectUnauthorized: false, // Esto permite conexiones a servidores con certificados autofirmados; para producción, considera obtener un certificado válido o establecer esto en true y proporcionar los certificados necesarios.
  // Si tienes certificados específicos, puedes descomentar y ajustar las siguientes líneas:
  // ca: fs.readFileSync('/ruta/a/tu/certificado-ca.crt').toString(),
  // key: fs.readFileSync('/ruta/a/tu/llave-privada.key').toString(),
  // cert: fs.readFileSync('/ruta/a/tu/certificado.crt').toString(),
};

const pool = new Pool({
  user: 'encuesta_owner',
  host: 'ep-shy-paper-a59r25fa.us-east-2.aws.neon.tech',
  database: 'encuesta',
  password: '1xXLcsH9MDGe',
  port: 5432, // default PostgreSQL port
  ssl: sslOptions,
});

module.exports = pool;