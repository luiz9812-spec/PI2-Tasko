class Tarefa {
    // Atributos
    #id_tarefa;
    #id_usuario;
    #nome;
    #pontos;

    // Construtor
    constructor (u, n, p) {
        this.#id_usuario = u;
        this.#nome = n;
        this.#pontos = p;
    }

    // Metodo Getter e Setters
    getId_tarefa() {
        return this.#id_tarefa;
    }

    setId_tarefa(id_tarefa) {
        this.#id_tarefa = id_tarefa;
    }

    getId_usuario() {
        return this.#id_usuario;
    }

    setId_usuario(id_usuario) {
        this.#id_usuario = id_usuario;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getPontos() {
        return this.#pontos;
    }

    setPontos(pontos) {
        this.#pontos = pontos;
    }
}
module.exports = Tarefa;