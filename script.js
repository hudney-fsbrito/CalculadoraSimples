
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
    }
    sinal = e.innerText
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
            case "=":
                resultado = numeroAnterior
                tela.innerHTML = resultado;
                sinal = undefined
                break;
            default:
                console.log("não rolou!");
                break;
        }
    }
}