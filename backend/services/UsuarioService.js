const bcrypt = require("bcrypt");
const UsuarioDAO = require("../dao/UsuarioDAO");

class UsuarioService {
    // Transforma a senha em hash
    async cadastrar(usuario) {
        const crypt = await bcrypt.hash(usuario.getSenha(), 10);
        usuario.setSenha(crypt);
        const dao = new UsuarioDAO();
        await dao.cadastrar(usuario);
    }
    // Verifica se o login e senha estão corretos
    async login(login, senha) {
        const dao = new UsuarioDAO();
        const usuario = await dao.buscar(login);
        if (usuario == null) {
            throw new Error ("Usuario ou Senha incorreto");
        } else {
            const comparar = await bcrypt.compare(senha, usuario.senha);
            if(!comparar){
                throw new Error ("Usuário ou Senha incorreto")
            } else {
                return {
                    id_usuario: usuario.id_usuario,
                    login: usuario.login,
                    nome: usuario.nome,
                    pontos: usuario.pontos
                };
            }
        }
    }
}
module.exports = UsuarioService;