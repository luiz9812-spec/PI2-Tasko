const mysql = require("mysql2/promise")

class GestorDeConexao {

    static #url = "localhost";
    static #user = "root";
    static #senha = "";
    static #db = "tasko";

    static getConnection() {
        return mysql.createConnection({
            host: this.#url,
            user: this.#user,
            password: this.#senha,
            database: this.#db
        });
    }
    
}

module.exports = GestorDeConexao;