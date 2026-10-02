const GestorDeConexao = require("./GestorDeConexao.js");

class TarefaDAO {
    async cadastrar(tarefa) {
        const sql = `INSERT INTO tarefa (id_usuario, nome, pontos) VALUES (?, ?, ?)`;

        const conexao = await GestorDeConexao.getConnection();

        try {
            await conexao.execute(sql, [
                tarefa.getId_usuario(),
                tarefa.getNome(),
                tarefa.getPontos()
            ]);
        } finally {
            await conexao.end();
        }
    }

    async buscar(id_usuario) {
        const sql = `SELECT * FROM tarefa WHERE id_usuario = ?`;

        const conexao = await GestorDeConexao.getConnection();

        try{
            const [resultado] = await conexao.execute(sql, [id_usuario]);
            return resultado;
        } finally {
            await conexao.end();
        }
    }

    async deletar(tarefa) {
        const sql = `DELETE FROM tarefa WHERE id_tarefa = ?`;

        const conexao = await GestorDeConexao.getConnection();

        try{
            await conexao.execute(sql, [tarefa.getId_tarefa()]);
        } finally {
            await conexao.end();
        }
    }

    async alterar(nome, pontos, id) {
        const sql = `UPDATE tarefa SET nome = ?, pontos = ? WHERE id_tarefa = ?`

        const conexao = await GestorDeConexao.getConnection();

        try{
            await conexao.execute(sql, [nome, pontos, id]);
        } finally {
            await conexao.end();
        }

    }

}

module.exports = TarefaDAO;