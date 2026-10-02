const GestorDeConexao = require("./GestorDeConexao.js");

class DiaDAO {
    async cadastrar(dia) {
        const sql = `INSERT INTO dia (id_usuario, data) VALUES (?, ?)`;

        const conexao = await GestorDeConexao.getConnection();

        try {
            await conexao.execute(sql, [dia.getId_usuario(), dia.getData()]);
        } finally {
            await conexao.end();
        }
    }

    async buscar(id_usuario) {
        const sql = `SELECT * FROM dia WHERE id_usuario = ?`;

        const conexao = await GestorDeConexao.getConnection();

        try {
            const [resultado] = await conexao.execute(sql, [id_usuario]);
            return resultado;
        } finally {
            await conexao.end();
        }
    }

}
module.exports = DiaDAO;