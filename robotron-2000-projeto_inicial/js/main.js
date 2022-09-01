/*------ primeiros testes clicando no robô-------------------

const robotron = document.querySelector('#robotron_id')

robotron.addEventListener('click', () => {
    console.log('cliquei no robô')
})

function say_hi (nome) {
    console.log('oi ' + nome);
}*/

//-----Mexendo na quantidade (add ou remover) de peças do robô------------

/*const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');

somar.addEventListener('click', () => {manipula_dados('somar')
});

subtrair.addEventListener('click', () => {manipula_dados('substrair')
});*/


const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        
        // acessando a propriedade do elemento que foi clicado no evento (como é uma string, usamos 'textContent'. Se fosse number, seria 'value')
        manipula_dados(evento.target.dataset.controle, evento.target.parentNode)

        atualiza_estatisticas(evento.target.dataset.peca)
    })
})

function manipula_dados (operacao, controle) {

    //acessando '.controle-contador' dentro da div pai '.controle'
    const peca = controle.querySelector('[data-contador]');
    
    if (operacao === '+') {
        peca.value = parseInt(peca.value) + 1
    }
    else{
        peca.value = parseInt(peca.value) - 1;
    }
} 

function atualiza_estatisticas (peca) {

    //console.log(pecas[peca])

    estatisticas.forEach ((elemento) => {

        //Ao clicar em cada um dos elementos (peca) queremos atualizar o textContent dele (valor), e esse valor vem em string entao passamos para numero com o parseInt. P/ atualizar somamos seu valor atual com o valor do clique na peca especifica que foi clicada. P/ acessar os valores de poderes da peca clicada usamos o pecas[peca] e p atualizar o valor da estatistica desses poderes usamos o dataset.estatistica

    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];

    })
    
        
}