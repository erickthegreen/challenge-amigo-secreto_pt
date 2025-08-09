//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionar() {
    // Pegar os elementos do HTML
    let amigoInput = document.getElementById('nome-amigo');
    // ID CORRIGIDO AQUI
    let lista = document.getElementById('lista-amigos');

    let nomeAmigo = amigoInput.value;

    // Validar se um nome foi digitado
    if (nomeAmigo == '') {
        alert('Por favor, informe o nome do amigo!');
        return; // O 'return' para a execução da função aqui
    }

    // Adicionar o nome na lista (array)
    amigos.push(nomeAmigo);
    
    // Mostrar a lista atualizada na tela
    lista.textContent = amigos.join(', ');

    // Limpar o campo de input e focar nele novamente
    amigoInput.value = '';
    amigoInput.focus();
}
// Conecta a função adicionar ao botão 'Adicionar'
document.getElementById('botao-adicionar').addEventListener('click', adicionar);


function sortear() {
    // Validação para ter no mínimo 4 participantes
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
    sorteio.innerHTML = ''; // Limpa a lista antes de preencher

    // Cria e exibe os pares
    for (let i = 0; i < amigos.length; i++) {
        // A condição para o último elemento da lista
        if (i == amigos.length - 1) {
            // O último da lista tira o primeiro
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            // Os outros tiram o próximo da lista
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
        amigos = [];
        document.getElementById('lista-amigos').innerHTML = '';
        // Adicione esta linha para limpar a lista do sorteio também
        document.getElementById('lista-sorteio').innerHTML = '';
    }



function remover() {
    // Verifica se a lista não está vazia antes de remover
    if (amigos.length > 0) {
        // O método .pop() remove o último elemento do array
        amigos.pop();

        // Atualiza a exibição da lista na tela
        document.getElementById('lista-amigos').textContent = amigos.join(', ');
    } else {
        alert('Não há amigos para remover!');
    }
}
// Conecta a função remover ao botão 'Remover'
document.getElementById('botao-remover').addEventListener('click', remover);