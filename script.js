
let tela = document.getElementById("tela");
let divNum = document.getElementsByClassName("num")
let numeroAtual;
let numeroAnterior;
let sinal;
let numeroNovo = true;
let resultado;

function clicaNumero(e) {
    if (numeroNovo) {
        tela.innerHTML = parseFloat(e.innerText);
        numeroNovo = false
    } else {
        tela.innerHTML += parseFloat(e.innerText);
    }
    numeroAtual = parseFloat(tela.innerText)
}
let armazenaValor = () => {
    numeroAnterior = (parseFloat(tela.innerText));
    numeroNovo = true
}

function clicaOperador(e) {
    
    if (!numeroNovo) {
        calcula(sinal)
        armazenaValor()
        sinal = e.innerText
    }
    console.log(sinal);
}

function clicaResultado(e) {
    if (!numeroNovo) {
        if (e.innerText) {   
            calcula(sinal)
            resultado = numeroAnterior
            tela.innerHTML = resultado;
            sinal = undefined
        }
        resultado = undefined
    }
}

let operaçãoPendente = () => sinal != undefined;

function calcula(sinal) {
    if (operaçãoPendente()) {
        switch (sinal) {
            case "+":
                numeroAnterior = parseFloat(numeroAnterior + numeroAtual)
                tela.innerHTML = numeroAnterior;
                break;
            case "-":
                numeroAnterior = parseFloat(numeroAnterior - numeroAtual)
                tela.innerHTML = numeroAnterior;
                break;
            case "*":
                numeroAnterior = parseFloat(numeroAnterior * numeroAtual)
                tela.innerHTML = numeroAnterior;
                break;
            case "/":
                numeroAnterior = parseFloat(numeroAnterior / numeroAtual)
                tela.innerHTML = numeroAnterior;
                break;
            default:
                console.log("não rolou!");
                break;
        }
    }
}

function apagaParcial() {
    if (resultado == undefined) {
        numeroAtual = undefined
        numeroNovo = true
        tela.innerHTML = ''
    } 
}
function apagaTotal() {
    numeroAtual = undefined
    numeroAnterior = undefined
    numeroNovo = true;
    sinal = undefined
    resultado = undefined
    tela.innerHTML = ''
}