const Tarefa = require('../dados/Tarefa.js')
class TarefaBuilder {
    #id_tarefa;
    #id_usuario;
    #nome;
    #pontos;

    // Metodos que recebem os dados
    Id_tarefa(id_tarefa) {
        this.#id_tarefa = id_tarefa;
        return this;
    }

    Id_usuario(id_usuario) {
        this.#id_usuario = id_usuario;
        return this;
    }

    Nome(nome) {
        this.#nome = nome;
        return this;
    }

    Pontos(pontos) {
        this.#pontos = pontos;
        return this;
    }

    // Metodo que constroi a classe Tarefa
    build() {
        if (this.#nome == null || this.#id_usuario == null || this.#pontos == null) {
            throw new Error ("Nome, Usuario e Pontos são obrigatórios");
        }
        return new Tarefa(this.#id_usuario, this.#nome, this.#pontos);
    }
}

module.exports = TarefaBuilder;