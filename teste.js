const UsuarioBuilder = require("./backend/builders/UsuarioBuilder");
const UsuarioService = require("./backend/services/UsuarioService");
const TarefaBuilder = require("./backend/builders/TarefaBuilder");
const TarefaDAO = require("./backend/dao/TarefaDAO");
const DiaBuilder = require("./backend/builders/DiaBuilder");
const DiaDAO = require("./backend/dao/DiaDAO");

async function teste() {

    // criar Usuario pelo Builder
    const usuario = new UsuarioBuilder().Login('Pedro').Senha('1234').Nome('Pedro').build();

    // criar UsuarioDAO
    const cadastrar = new UsuarioService();

    // cadastrar no banco
    // await cadastrar.cadastrar(usuario);

    // console.log("Usuário cadastrado!");

    // testar login
    //try {
    //console.log(await cadastrar.login("Pedro", "1234"));
    //} catch (erro) {
    //    console.log(erro.message);
    //}
    //try {
    //console.log(await cadastrar.login("Juca", "1234"));
    //} catch (erro) {
    //    console.log(erro.message);
    //}
    //try {
    //console.log(await cadastrar.login("Pedro", "4321"));
    //} catch (erro) {
    //    console.log(erro.message);
    //}
    
    //    const tarefa = new TarefaBuilder().Id_usuario(1).Nome("Estudar").Pontos(5).build();

    //    const dao = new TarefaDAO();
    //    await dao.cadastrar(tarefa);
    //    console.log("Tarefa cadastrada!");
    //    const tarefas = await dao.buscar(1);
    //    console.log(tarefas);
    
    const dia = new DiaBuilder().Id_usuario(1).Data("2026-10-01").build();

    const dao = new DiaDAO();
    await dao.cadastrar(dia);
    console.log("Dia Cadastrado!");
    const dias = await dao.buscar(1);
    console.log(dias);

    

}

teste();

