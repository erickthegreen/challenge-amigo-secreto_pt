let amigos = [];

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

<<<<<<< HEAD
function sortearnome() {
    if (amigos.length == 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('lista-sorteio');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

function sortear() {
    // Validação para ter no mínimo 4 participantes para um bom sorteio
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para o sorteio!');
        return;
=======
function sortear() {
    // TAREFA 1: Validar que há amigos disponíveis
    if (amigos.length == 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return; // Para a execução da função
>>>>>>> parent of 184c045 (colocando a opção de tirar os nomes já sorteados.)
    }

    // TAREFA 2: Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

<<<<<<< HEAD
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
=======
    // TAREFA 3: Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // TAREFA 4: Mostrar o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSorteado;
>>>>>>> parent of 184c045 (colocando a opção de tirar os nomes já sorteados.)
}
document.getElementById('botao-sortear').addEventListener('click', sortear);

<<<<<<< HEAD
=======
function reiniciar() {
    
    amigos = [];
    
    
    document.getElementById('lista-amigos').innerHTML = '';
    
    
    document.getElementById('resultado').innerHTML = '';
}

// Conecta a nova função ao botão 'Reiniciar'
document.getElementById('botao-reiniciar').addEventListener('click', reiniciar);


>>>>>>> parent of 184c045 (colocando a opção de tirar os nomes já sorteados.)
function remover() {
    if (amigos.length > 0) {
        amigos.pop();
        document.getElementById('lista-amigos').textContent = amigos.join(', ');
    } else {
        alert('Não há amigos para remover!');
    }
}

function limparSorteio() {
    document.getElementById('lista-sorteio').innerHTML = '';
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}


document.getElementById('botao-adicionar').addEventListener('click', adicionar);
document.getElementById('botao-remover').addEventListener('click', remover);
document.getElementById('botao-reiniciar').addEventListener('click', reiniciar);


document.getElementById('botao-sortear-todos').addEventListener('click', sortearTodos);
document.getElementById('botao-sortear-um').addEventListener('click', sortearUm);
document.getElementById('botao-limpar-sorteio').addEventListener('click', limparSorteio);