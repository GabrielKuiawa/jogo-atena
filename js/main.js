var buttons = document.getElementsByClassName('button');

var imagem = document.querySelector("#imagem");
var ask = document.querySelector("#ask");

var button_1 = document.querySelector("#button-1");
var button_2 = document.querySelector("#button-2");
var button_3 = document.querySelector("#button-3");
var button_4 = document.querySelector("#button-4");



var data = fetch("../js/perguntas/perg.json")
    .then(resposta => {return resposta.json()})
    .then(json => {
        imagem.src = "../" + json[1].imagem;
        ask.innerHTML = json[1].ask;
        button_1.innerHTML = json[1].option_1;
        button_2.innerHTML = json[1].option_2;
        button_3.innerHTML = json[1].option_3;
        button_4.innerHTML = json[1].option_4;

        Array.prototype.slice.call(buttons).forEach(function(pegaElementoAtual){
            pegaElementoAtual.addEventListener('click', function(e){
                if (this == button_1) {
                    alert("ACERTOU");
                } else {
                    alert("errou");
                }
            });
        });


    }
);

// console.log(data);