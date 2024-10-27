// if(localStorage.getItem('token')){
//     window.location.href = "/home"
// }
const nome = document.querySelector("#nome");
const nick = document.querySelector("#nick");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const aviso = document.querySelector("#aviso");
const r_senha = document.querySelector("#r-senha");
const btn = document.querySelector("#btn").addEventListener('click', async (e) =>{ 
    e.preventDefault()
    if(nome.value.length <= 2 || email.value.length <= 2 || senha.length <= 2 || r_senha.length <= 2){
        aviso.textContent = "Compo(s) Inválido(s)!"
        return
    }
    const url = "http://127.0.0.1:5202/api/Desafio/registro";
    try {  
        if(senha.value == r_senha.value){
      
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ usuario: nick.value, email: email.value, senha: senha.value, nome: nome.value }),
                headers: { "Content-Type": "application/json" },
            })
            
        
            const text = await res.text(); // A variável correta é 'res'

            if (text !== "Registro bem-sucedido!") {
                aviso.textContent = text; // Mostra a mensagem retornada pelo backend
            } else {
                window.location.href = "/login.html";
            }
        } else{
            aviso.textContent = "Senhas diferem!"
        }
    } 
    catch (error) {
        console.error(error);
        aviso.textContent = "Falha na comunicação com o servidor.";
    }
      
    
});