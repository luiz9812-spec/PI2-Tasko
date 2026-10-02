const express = require("express");
const UsuarioService = require("./backend/services/UsuarioService.js");
const UsuarioBuilder = require("./backend/builders/UsuarioBuilder.js");

const app = express();
app.use(express.json());
app.use(express.static("telas"));

app.post("/cadastrar", async (req, res) => {
    try {
        const { login, senha, nome } = req.body;

        const usuario = new UsuarioBuilder().Login(login).Senha(senha).Nome(nome).build();

        const service = new UsuarioService();

        await service.cadastrar(usuario);

        res.send("Usuário cadastrado com sucesso!");
    } catch (erro) {
        res.status(400).send(erro.message);
    }
});

app.post("/login", async (req, res) => {
    try {
        const { login, senha} = req.body;

        const service = new UsuarioService();

        const usuario = await service.login(login, senha);

        res.json({
            mensagem: "Login realizado com sucesso!",
            usuario: usuario
        });
    } catch(erro) {
        res.status(401).send(erro.message);
    }

});

app.get("/teste", (req, res) => {
    res.send("Servidor Funcionando!");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});