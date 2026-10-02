const Usuario = require('../dados/Usuario.js')
class UsuarioBuilder {
    // id_usuario e pontos são atribuidos no banco, deixei aqui caso precise
    #id_usuario;
    #login;
    #senha;
    #nome;
    #pontos;

    // Metodos que recebem os dados
    Id_usuario(id) {
        this.#id_usuario = id;
        return this;
    }

    Login(login) {
        this.#login = login;
        return this;
    }

    Senha(senha) {
        this.#senha = senha;
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

    // Metodo que constroi a classe Usuario
    build() {
        if (this.#login == null || this.#senha == null || this.#nome == null) {
            throw new Error ("Login, Senha e Nome são obrigatórios");
        }
        return new Usuario(this.#login, this.#senha, this.#nome);
    }
}

module.exports = UsuarioBuilder;