// if(localStorage.getItem('token')){
//     window.location.href = "/home.html"
// }
const nick = document.querySelector("#nick");
const senha = document.querySelector("#senha");
const botao = document.querySelector("#entrar");
const aviso = document.querySelector(".aviso");

botao.addEventListener("click", async (e) => {
    e.preventDefault(); // Evita comportamento padrão do botão

    if (nick.value.length === 0 || senha.value.length === 0) {
        aviso.textContent = "Campo(s) vazio(s)";
        return;
    }

    const url = "http://127.0.0.1:5202/api/Desafio/login";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ usuario: nick.value, senha: senha.value }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        const text = await response.text();

        if (text === "Login bem-sucedido!") {
            aviso.textContent = "";
            window.location.href = "/home.html";
        } else {
            aviso.textContent = text || "Erro desconhecido";
        }
    } catch (error) {
        console.error(error);
        aviso.textContent = "Falha na comunicação com o servidor.";
    }
});
