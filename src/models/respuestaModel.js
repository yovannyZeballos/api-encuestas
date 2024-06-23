const pool = require('../config/dbConfig');

class RespuestaModel {

    async create({ nombreEncuestado, idRol, idMember, idSquad, puntajeGeneral, desempeñoComo, desempeñoQue, feedbackApreciativo, feedbackConstructivo }) {
        const query = `INSERT INTO public."respuestasPoclac"(nombreencuestado, fechaencuesta, idrol, idmember, idsquad, puntajegeneral, 
      "desempeñocomo", "desempeñoque", feedbackapreciativo, feedbackconstructivo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`;
        const result = await pool.query(query, [nombreEncuestado, new Date(), idRol, idMember, idSquad, puntajeGeneral, desempeñoComo, desempeñoQue, feedbackApreciativo, feedbackConstructivo]);
        return result.rows[0];
    }
}

module.exports = new RespuestaModel();