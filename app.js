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
    // TAREFA 1: Validar que há amigos disponíveis
    if (amigos.length == 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return; // Para a execução da função
    }

    // TAREFA 2: Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // TAREFA 3: Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // TAREFA 4: Mostrar o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSorteado;
}
document.getElementById('botao-sortear').addEventListener('click', sortear);

function reiniciar() {
    
    amigos = [];
    
    
    document.getElementById('lista-amigos').innerHTML = '';
    
    
    document.getElementById('resultado').innerHTML = '';
}

// Conecta a nova função ao botão 'Reiniciar'
document.getElementById('botao-reiniciar').addEventListener('click', reiniciar);


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