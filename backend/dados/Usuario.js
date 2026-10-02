class Usuario {
    // Atributos
    #id_usuario;
    #login;
    #senha;
    #nome;
    #pontos;

    // Construtor
    constructor (l, s, n) {
        this.#login = l;
        this.#senha = s;
        this.#nome = n;
    }

    // Metodos Getters e Setters
    getId_usuario() {
        return this.#id_usuario;
    }

    setId_usuario(id_usuario) {
        this.#id_usuario = id_usuario;
    }

    getLogin() {
        return this.#login;
    }

    setLogin(login) {
        this.#login = login;
    }

    getSenha() {
        return this.#senha;
    }

    setSenha(senha) {
        this.#senha = senha;
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

module.exports = Usuario;