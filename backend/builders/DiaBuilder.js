const Dia = require('../dados/Dia.js')
class DiaBuilder{
    #id_dia;
    #id_usuario;
    #data;
    #tarefas;

    // Metodos que recebem os dados, Id Auto_increment

    Id_dia(id_dia) {
        this.#id_dia = id_dia;
        return this;
    }

    Id_usuario(id_usuario) {
        this.#id_usuario = id_usuario;
        return this;
    }

    Data(data) {
        this.#data = data;
        return this;
    }

    // tarefas vão ser atribuidas pelo metodo
    // adicionar tarefa, coloquei aqui caso precise no futuro.
    // Tarefas(tarefas) {
    //     this.#tarefas = tarefas;
    //     return this;
    // }

    build() {
        if (this.#data == null || this.#id_usuario == null) {
            throw new Error ("Data e usuario são obrigatórios");
        }
        return new Dia(this.#data, this.#id_usuario);
    }
}
module.exports = DiaBuilder;