const pool = require('../config/dbConfig');
const moment = require('moment-timezone');

class RespuestaModel {

    async create({ nombreEncuestado, idRol, idMember, idSquad, puntajeGeneral, desempeñoComo, desempeñoQue, feedbackApreciativo, feedbackConstructivo, correoEncuestado  }) {
        const query = `INSERT INTO public."respuestasPoclac"(nombreencuestado, fechaencuesta, idrol, idmember, idsquad, puntajegeneral, 
      "desempeñocomo", "desempeñoque", feedbackapreciativo, feedbackconstructivo, correoencuestado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;
        const result = await pool.query(query, [nombreEncuestado, this.cambiarZonaHoraria(new Date(),'America/Lima'), idRol, idMember, idSquad, puntajeGeneral, desempeñoComo, desempeñoQue, feedbackApreciativo, feedbackConstructivo, correoEncuestado]);
        return result.rows[0];
    }

    cambiarZonaHoraria(fecha, zonaHoraria) {
      return moment(fecha).tz(zonaHoraria).toDate();
    }
}

module.exports = new RespuestaModel();