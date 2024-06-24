const pool = require('../config/dbConfig');

class MemberModel {

    async listar() {
        const query = `SELECT * FROM public."members"`;
        const result = await pool.query(query);
        return result.rows;
    }

    async obtener(id) {
        const query = `SELECT * FROM public."members" WHERE id = $1`;
        const result = await pool.query(query, [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async listarPorSquad(idSquad) {
        const query = `SELECT * FROM public."members" WHERE idSquad = $1`;
        const result = await pool.query(query, [idSquad]);
        return result.rows;
    }
}

module.exports = new MemberModel();