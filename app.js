// Lista principal de amigos
let amigos = [];

// --- FUNÇÕES PRINCIPAIS ---

function adicionar() {
    let amigoInput = document.getElementById('nome-amigo');
    let nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, informe o nome do amigo!');
        return;
    }

    // Usando toLowerCase() para tornar a verificação de duplicados insensível a maiúsculas/minúsculas
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    amigoInput.value = '';
    amigoInput.focus();
}

function remover() {
    if (amigos.length > 0) {
        amigos.pop();
        atualizarListaAmigos();
    } else {
        alert('Não há amigos para remover!');
    }
}

function sortearUm() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos antes de sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('resultado-um');
    resultado.innerHTML = `O nome sorteado é: <strong>${amigoSorteado}</strong>`;
}

function sortearTodos() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para o sorteio de pares!');
        return;
    }

    let amigosEmbaralhados = [...amigos]; // Cria uma cópia para não alterar a lista original
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    let sorteio = document.getElementById('resultado-todos');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        let amigoDaVez = amigosEmbaralhados[i];
        let amigoSorteado = (i === amigosEmbaralhados.length - 1) ? amigosEmbaralhados[0] : amigosEmbaralhados[i + 1];
        sorteio.innerHTML += `${amigoDaVez} --> ${amigoSorteado}<br>`;
    }
}

function adicionarLista() {
    let areaTexto = document.getElementById('lista-nomes-area');
    let nomesDaLista = areaTexto.value;

    // Verifica se a área de texto não está vazia
    if (nomesDaLista.trim() === '') {
        alert('Por favor, cole uma lista de nomes.');
        return;
    }

    // A mágica acontece aqui: .split(',') quebra o texto em uma lista, usando a vírgula como separador
    let novosAmigos = nomesDaLista.split(',');

    // Adiciona cada novo amigo à lista principal, um por um
    for (let i = 0; i < novosAmigos.length; i++) {
        let nome = novosAmigos[i].trim(); // .trim() remove espaços extras antes e depois do nome

        // Valida se o nome não está vazio e se já não foi adicionado
        if (nome && !amigos.map(amigo => amigo.toLowerCase()).includes(nome.toLowerCase())) {
            amigos.push(nome);
        }
    }

    atualizarListaAmigos(); // Atualiza a exibição na tela com os novos nomes
    areaTexto.value = '';   // Limpa a área de texto
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('resultado-um').innerHTML = '';
    document.getElementById('resultado-todos').innerHTML = '';
}

// --- FUNÇÃO AUXILIAR ---

function atualizarListaAmigos() {
    let lista = document.getElementById('lista-amigos');
    lista.textContent = amigos.join(', ');
}

// --- CONEXÃO COM OS BOTÕES (EVENT LISTENERS) ---

document.getElementById('botao-adicionar').addEventListener('click', adicionar);
document.getElementById('botao-remover').addEventListener('click', remover);
document.getElementById('botao-sortear-um').addEventListener('click', sortearUm);
document.getElementById('botao-sortear-todos').addEventListener('click', sortearTodos);
document.getElementById('botao-adicionar-lista').addEventListener('click', adicionarLista);
document.getElementById('botao-reiniciar').addEventListener('click', reiniciar);

document.getElementById('nome-amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar();
    }
});