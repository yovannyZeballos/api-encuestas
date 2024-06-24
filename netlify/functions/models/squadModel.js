const pool = require('../config/dbConfig');

class SquadModel {

    async listar() {
        const query = `SELECT * FROM public."squads"`;
        const result = await pool.query(query);
        return result.rows;
    }

    async obtener(id) {
        const query = `SELECT * FROM public."squads" WHERE id = $1`;
        const result = await pool.query(query, [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async listarPorTribu(idTribu) {
        const query = `SELECT * FROM public."squads" WHERE idTribu = $1`;
        const result = await pool.query(query, [idTribu]);
        return result.rows;
    }
}

module.exports = new SquadModel();