const pool = require('../config/dbConfig');

class NivelCumplimientoModel {

    async listar() {
        const query = `SELECT * FROM public."nivelesCumplimiento"`;
        const result = await pool.query(query);
        return result.rows;
    }

    async obtener(id) {
        const query = `SELECT * FROM public."nivelesCumplimiento" WHERE id = $1`;
        const result = await pool.query(query, [id]);
        return result.rows.length ? result.rows[0] : null;
    }
}

module.exports = new NivelCumplimientoModel();