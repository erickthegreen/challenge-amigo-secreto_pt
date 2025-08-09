// Variável principal que armazena a lista de amigos
let amigos = [];

// --- DEFINIÇÃO DAS FUNÇÕES ---

function adicionar() {
    let amigoInput = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let nomeAmigo = amigoInput.value;

    if (nomeAmigo == '') {
        alert('Por favor, informe o nome do amigo!');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);
    lista.textContent = amigos.join(', ');
    amigoInput.value = '';
    amigoInput.focus();
}

function sortear() {
    // Validação para ter no mínimo 4 participantes para um bom sorteio
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para o sorteio!');
        return;
    }

    // Embaralha a lista de amigos (Algoritmo de Fisher-Yates)
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Troca de elementos
    }

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa a lista de resultados anteriores

    // Cria e exibe os pares na tela
    for (let i = 0; i < amigos.length; i++) {
        // A condição para o último elemento da lista
        if (i == amigos.length - 1) {
            // O último da lista tira o primeiro, fechando o ciclo
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            // Os outros tiram o próximo da lista embaralhada
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function remover() {
    if (amigos.length > 0) {
        amigos.pop();
        document.getElementById('lista-amigos').textContent = amigos.join(', ');
    } else {
        alert('Não há amigos para remover!');
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

// --- CONEXÃO COM OS BOTÕES (EVENT LISTENERS) ---

document.getElementById('botao-adicionar').addEventListener('click', adicionar);
document.getElementById('botao-sortear').addEventListener('click', sortear);
document.getElementById('botao-remover').addEventListener('click', remover);
document.getElementById('botao-reiniciar').addEventListener('click', reiniciar);