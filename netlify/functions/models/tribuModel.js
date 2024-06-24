const pool = require('../config/dbConfig');

class TribuModel {

    async listar() {
        const query = `SELECT * FROM public."tribus"`;
        const result = await pool.query(query);
        return result.rows;
    }

    async obtener(id) {
        const query = `SELECT * FROM public."tribus" WHERE id = $1`;
        const result = await pool.query(query, [id]);
        return result.rows.length ? result.rows[0] : null;
    }
}

module.exports = new TribuModel();