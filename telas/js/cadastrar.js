const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;

    const resposta = await fetch("/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: login,
            senha: senha,
            nome: nome
        })
    });
    const texto = await resposta.text();
    mensagem.textContent = texto;
});