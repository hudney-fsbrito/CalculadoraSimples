
let tela = document.getElementById("tela");
let divNum = document.getElementsByClassName("num")
let numero;
let numero1;
let numero2;
let resultado;


// console.log(divNum);
// console.log(parseInt(divNum.innerText) + 2);
// console.log(parseFloat(divNum[0].innerText) + 2);
function calc(e) {
    numero = parseFloat(e.innerText);
    console.log(numero);
    escrever()
}

function escrever() {
    tela.innerHTML += numero

}