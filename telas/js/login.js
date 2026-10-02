const formulario = document.getElementById("formLogin");
const mensagem = document.getElementById("mensagem");
const btnCadastrar = document.getElementById("btnCadastrar");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: login,
            senha: senha
        })
    });
    
    if (resposta.ok) {
        const dados = await resposta.json();
        console.log(dados.usuario);
        window.location.href = "principal.html";
    } else {
        const text = await resposta.text();
        mensagem.textContent = text;
    }
});

btnCadastrar.addEventListener("click", () => {
    window.location.href = "cadastrar.html";
});