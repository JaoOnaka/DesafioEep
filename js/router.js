function loadContent(page) {
    fetch(`${page}.html`)
        .then(response => {
            console.log(response.status); // Verificar status da resposta
            if (!response.ok) throw new Error('Página não encontrada!');
            return response.text();
        })
        .then(html => {
            console.log('HTML carregado:', html); // Debug do conteúdo carregado
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Erro:', error); // Exibir erros no console
            document.getElementById('content').innerHTML = `<p>Erro: ${error.message}</p>`;
        });
}

function navigateTo(route) {
    window.history.pushState({}, '', route); 
    handleRoute();
}

function handleRoute() {
    const path = window.location.pathname;

    switch (path) {
        case '/login':
            loadContent('login');
            break;
        case '/register':
            loadContent('register');
            break;
        default:
            loadContent('home'); 
            break;
    }
}

window.onpopstate = handleRoute;

handleRoute();
