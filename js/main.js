var ask_section = document.querySelector("#ask-section");
var pontuacao = document.querySelector("#pontuacao");
var h5 = document.querySelector("#h5");

var buttons = document.getElementsByClassName('button');

var id_ask = document.querySelector("#id_ask");
var imagem = document.querySelector("#imagem");
var ask = document.querySelector("#ask");

var button_1 = document.querySelector("#button-1");
var button_2 = document.querySelector("#button-2");
var button_3 = document.querySelector("#button-3");
var button_4 = document.querySelector("#button-4");

var existePerguntas = [];

var totalDeperguntas = 0;

var pontos = 0;

listarPerguntas();

function listarPerguntas() {

    var data = fetch("../js/perguntas/perg.json")
        .then(resposta => { return resposta.json() })
        .then(json => {
            var random = perguntasAleatorias(0, json.length);

            var exist = existePerguntas.filter(perg => random == perg);
            if (exist > 0) {
                console.log("já existe " + random);
            } else {
                proximaQuestao(random, json);
                console.log(id_ask.innerText);
                // certoOuErrado(buttons, json[random].response, json, random);
                existePerguntas.push(random);
            }
        }
    );
}

function certoOuErrado(nQuestao) {
    fetch("../js/perguntas/perg.json").then(resposta => { return resposta.json() }).then(json => {
        var random = perguntasAleatorias(0, json.length);

        console.log(id_ask.innerText);
        console.log(nQuestao.attributes.value.nodeValue);
        console.log(json[id_ask.innerText -1].response);

        if (nQuestao.attributes.value.nodeValue == json[id_ask.innerText -1].response) {
            nQuestao.style = "background-color: green";
            setTimeout(function () {
                if (totalDeperguntas > 10) {
                    acabou();
                } else {
                    proxima = random;
                    pontos += 10;
                    proximaQuestao(proxima, json);
                    nQuestao.style = "#fff";
                }
            }, 600)
        } else {
            setTimeout(function () {
                if (totalDeperguntas > 10) {
                    acabou();
                } else {
                    proxima = random;
                    proximaQuestao(proxima, json);
                    nQuestao.style = "#fff";
                }
            }, 600)
            nQuestao.style = "background-color: red";
        }
    })
    totalDeperguntas += 1;
}

function acabou() {
    console.log("acabou");
    ask_section.style.display = 'none';
    pontuacao.style.display = 'flex';
    h5.innerHTML = "Sua pontuação foi de: " + pontos;
}

function perguntasAleatorias(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function reload() {
    document.getElementsByClassName('card').contentWindow.location.reload(true);
}

function proximaQuestao(nQuestao, questoes) {
    id_ask.textContent = questoes[nQuestao].id_ask;
    ask.textContent = questoes[nQuestao].ask;
    imagem.src = "../" + questoes[nQuestao].imagem;

    button_1.textContent = questoes[nQuestao].option_1;
    button_2.textContent = questoes[nQuestao].option_2;
    button_3.textContent = questoes[nQuestao].option_3;
    button_4.textContent = questoes[nQuestao].option_4;

    // button_1.setAttribute('value', option_1);
    // button_2.setAttribute('value', option_2);
    // button_3.setAttribute('value', option_3);
    // button_4.setAttribute('value', option_4);
}