/* primeira maneira de criar funcoes
function calcular() {

}

segunda maneira
calcular = () => {
    
}

*/

function calcular() {
    event.preventDefault(); // impede o reload da pagina, funcao bem util no geral
    // // alert("Olá, voce clicou"); -> popup
    // console.log("Olá, voce clicou"); -> imprime no console, não afeta a página

    const element = document.getElementById('tabuada'); // document = o HTML inteiro
    // // getElementById = o javascript 'pega' o elemento para fazer a manipulacao
    const tabuada = element.value;
    // console.log(element);
    // console.log(tabuada);

   /* for (let index = 1; index < 11; index++) {
        console.log(tabuada + " X " + index + ' = ' +  tabuada * index);
    }

    let condition = 1;
    while (condition < 11) {
        console.log(tabuada + " X " + index + ' = ' +  tabuada * index);
        condition++
    } */

    // apaga o resultado anterior disposto na tela
    const linhaResultado = document.getElementsByClassName('tab-result');
    while(linhaResultado.length != 0) {
        linhaResultado[0].remove();

    }


    // validacao
    if (isNaN(tabuada) || tabuada < 1 || tabuada > 10 || tabuada == '') {
        /*Varias formas de validar

        popup: alert("entre somente com numeros")
        
        imprimir a mensagem no próprio input box:
        element.value = 'entre somente com numeros';
        element.classList.add('erro'); -> adiciona classe nova no elemento (a classe 'erro')
        
        depois, colocar um 'onclick="limparInput(this)"' (o this indica que é deste formulario, caso
        exista utilizacao ampla desta funcao) na tag input do form do arquivo HTML e criar a
        seguinte funcao no script do arquivo JS para limpar a mensagem de erro ao clicar:

        function limparInput(elementClicado){ -> elementClicado equivale ao parametro 'this' do 'onclick', servindo para multiplos forms caso necessario, se nao seria necessario usar o metodo para chamar o id neste parametro (document.getElementById('id')), e esta funcao só serviria para o form com aquele id
            elementClicado.value = '';
            elementClicado.classList.remove('erro'); -> remove a classe erro no elemento input ao clicar (erro neste caso é a mensagem adicionada pelo)
        }
            
        ou imprimir na box:
        -fiquei com preguica de fazer
        
        */
        return; // return dentro de uma estrutura serve para impedir que o código continue sendo lido
    }

    /* da valor para a variavel 'resultado' com os divs, que serao usados para imprimir na tela*/
    let resultado = '';
    for (let index = 1; index < 11; index++){
       resultado += '<div class="tab-result">' + tabuada + " X " + index + ' = ' +  tabuada * index + '<div>';
       
    }

    
    // pega o elemento tabuada-resultado e inseriu o resultado da tabuada
    const elementResultado = document.getElementById('tabuada-resultado');
    elementResultado.insertAdjacentHTML('afterbegin',resultado);
    // parametro 1 = posicao, parametro 2 = objeto

    elementResultado.style.visibility = 'visible';

    element.value = ''; // limpa o input

}